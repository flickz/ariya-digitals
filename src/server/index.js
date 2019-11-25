import express from "express";
import path from "path";
import next from "next";
import routes from "../routes";

const port = parseInt(process.env.PORT) || 3000;

const nextApp = next({
  dir: path.dirname(__dirname),
  dev: process.env.NODE_ENV !== "production"
});

const handler = routes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email === "test@gmail.com" && password === 123) {
      return res
        .status(200)
        .send({
          state: "success",
          message: "Congratulations you successfully signed in."
        });
    } else {
      return res
        .status(401)
        .send({ state: "error", message: "Incorrect email or password." });
    }
  });

  server.get("*", handler);

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});

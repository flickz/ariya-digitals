import React, { useState } from "react";
import styled from "styled-components";
import { layout } from "styled-system";

import Input from "./Input";
import Link from "./Link";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import MessageBox from "./MessageBox";
import { postJson } from "../lib/fetch";
import { useForm } from "../hooks/form";

const LoginWrapper = styled.div`
  margin-left: 110px;
  margin-top: 50px;
  ${layout}
`;

const LoginTitle = styled.h1`
  margin-bottom: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [response, setResponse] = useState({});
  const {
    values,
    errors,
    isSubmtting,
    touched,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit
  } = useForm({
    initalValues: {
      email: "",
      password: ""
    },

    validate(values) {
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Email address is invalid";
      } else {
        errors.email = "";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else {
        errors.password = "";
      }

      return errors;
    },

    async onSubmit(values, { setSubmitting }) {
      try {
        const result = await postJson("/login", values);
        if (result.state === "error") {
          const message = (
            <span>
              Invalid Email and/or password. Don&apos;t have an account?{" "}
              <Link href="#">Register</Link>
            </span>
          );
          setSubmitting(false);
          setResponse({ state: "error", message });
        } else {
          setSubmitting(false);
          setResponse({ state: "success", message: "Sign in was sccessful" });
        }
      } catch (err) {
        setSubmitting(false);
        console.error(err);
      }
    }
  });

  return (
    <LoginWrapper width={1}>
      {response.message && (
        <MessageBox
          type={response.state}
          message={response.message}
          mt={3}
          mb={5}
        />
      )}
      <LoginTitle>Login</LoginTitle>
      <Form onSubmit={handleOnSubmit}>
        <Input
          type="text"
          name="email"
          label="Email"
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          required={true}
          value={values.email}
          width="100%"
          mb={5}
          error={errors.email && touched.email && errors.email}
        />

        <PasswordInput
          type="password"
          name="password"
          label="Password"
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          required={true}
          value={values.password}
          error={errors.password && touched.password && errors.password}
          width="100%"
          mt={3}
          mb={4}
        />
        <Link href="#" mb={4}>
          Forgot password?
        </Link>
        <Button
          type="submit"
          width={3 / 10}
          px={4}
          py={2}
          my={5}
          fontSize="14px"
          fontWeight="500"
          letterSpacing={1.6}
          disabled={isSubmtting}
        >
          {isSubmtting ? "Logging you in..." : "LOGIN"}
        </Button>
      </Form>
    </LoginWrapper>
  );
};

export default Login;

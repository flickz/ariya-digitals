export function fetchJson(url, params = {}) {
  params.credentials = "same-origin";
  return fetch(url, params).then(res => res.json());
}

export function postJson(url, body, params = {}) {
  params.method = "POST";
  params.headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  params.body = JSON.stringify(body);
  return fetchJson(url, params);
}

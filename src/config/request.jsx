import axios from "axios";

const request = axios.create({baseURL:'https://64c8a982a1fe0128fbd6042d.mockapi.io'});

request.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: "Barer exapletoken12345",
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };

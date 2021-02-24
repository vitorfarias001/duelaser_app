import axios from "axios";

const API_KEY = "F4944B335B634FF29D563D5F92E9FB7D";

export const env = {
  port: "80",
  key: API_KEY,
};

let baseURL = "http://192.168.0.41";


const api = axios.create({
  baseURL,
  // baseURL: 'https://fornodejsuse.appspot.com',
});

export const setBaseURL = baseUrl => {
  baseURL = baseUrl
}

export const makeAxiosInstance = (baseUrl, useBaseURLVar = false) => {
  return axios.create({baseURL: useBaseURLVar ? baseURL : baseUrl});
}

// const api_octo = axios.create(  {
//     headers: {'X-Api-Key': API_KEY}
// })

export default api;

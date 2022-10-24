import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://arcane-reef-82924.herokuapp.com/",
  development: "https://arcane-reef-82924.herokuapp.com/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
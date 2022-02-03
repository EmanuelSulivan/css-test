import axios from "axios";

const FAKE_TOKEN = localStorage.getItem("fake_access_token");

const baseURL = "https://king-tide.ecjasso.com/api/v1";

export const imagesURL = "https://king-tide.ecjasso.com";

export const backendApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${FAKE_TOKEN}`,
  },
});

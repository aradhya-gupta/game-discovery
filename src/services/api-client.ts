import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0496604cf9c147f488a59a3b237d98ee",
  },
});

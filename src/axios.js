import axios from "axios";
import { baseUrl } from "./constansts/constants";

const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance
import axios from "axios";
import { baseUrl } from "./Constansts/constants";

const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance
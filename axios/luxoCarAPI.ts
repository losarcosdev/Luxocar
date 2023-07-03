import axios from "axios";

export const luxoCarAPI = axios.create({ baseURL: "http://localhost:3000/api" });


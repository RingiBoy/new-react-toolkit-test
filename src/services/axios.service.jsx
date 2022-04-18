import axios from "axios";
import baseURl from "../constants/url";


const axiosService = axios.create({baseURL:baseURl});

export{axiosService}

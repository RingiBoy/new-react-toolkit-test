import { urls } from "../constants/url";
import { axiosService } from "./axios.service";




const userService = {
    getAll:()=>axiosService.get(urls.users).then(value=>value.data),
    getById:(idUser)=>axiosService(`${urls.users}/${idUser}`)
}
export {userService}
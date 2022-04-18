import { urls } from "../constants/url";
import { axiosService } from "./axios.service";



const postService = {
    getAllPostOfUser:(idUser)=>axiosService(`${urls.users}/${idUser}/posts`).then(value =>value.data)
}
export {postService}
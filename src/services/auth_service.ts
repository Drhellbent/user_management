import { catchErr } from "../utils/common_function"
import { getAsyncData, getAsyncPostData } from "./common_service"

const BaseUrl = `https://reqres.in/api/`
interface UserRegisterParams{
    name:string,
    email:string,
    password:string,
}
interface LoginParams{
    email:string,
    password:string
}
export const createUser=async (params:UserRegisterParams)=>{
    try{
        let url = BaseUrl+"register"
       const response = await getAsyncPostData(url, params);
       return response
    
    }catch(err){
        catchErr(err) 
    }

}

export const loginUser=async(data:LoginParams)=>{
        try{
            let url = BaseUrl+"login"
            const response = await getAsyncPostData(url, data)
            return response
        }catch(err){
            catchErr(err) 
        }
}
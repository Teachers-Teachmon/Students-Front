import axiosInstance from "../lib/axiosInstance.js";
import {API_ENDPOINTS} from "../lib/endpoints.js";

export const searchStudent = async (name) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.SEARCH}`, {
            name:name
        });
        if(res.status!==200){
            return new Promise.reject({
                status:res.status,
                message:res.message
            })
        }
        return res;
    }catch (err){
        return Promise.reject(err);
    }
}

export const searchPlace = async (name) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.SEARCH}/place`, {
            name:name
        });
        if(res.status!==200){
            return new Promise.reject({
                status:res.status,
                message:res.message
            })
        }
        return res;
    }catch (err){
        return Promise.reject(err);
    }
}

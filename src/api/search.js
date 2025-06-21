import axiosInstance from "../lib/axiosInstance.js";
import {API_ENDPOINTS} from "../lib/endpoints.js";

//${API_ENDPOINTS.SEARCH}
export const searchStudent = async (query) =>{
    try{
        const res = await axiosInstance.get(`/searchStudent?search_query=${query}`);
        if(res.status!==200){
            return new Promise.reject({
                status:res.status,
                message:res.message
            })
        }
        return res.data;
    }catch (err){
        return Promise.reject(err);
    }
}

export const searchPlace = async (query) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.SEARCH}/place?search_query=${query}`);
        if(res.status!==200){
            return new Promise.reject({
                status:res.status,
                message:res.message
            })
        }
        return res.data;
    }catch (err){
        return Promise.reject(err);
    }
}

export const searchTeacher = async (query) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.SEARCH}/teacher?search_query=${query}`);
        if(res.status!==200){
            return new Promise.reject({
                status:res.status,
                message:res.message
            })
        }
        return res.data;
    }catch (err){
        return Promise.reject(err);
    }
}
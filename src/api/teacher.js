import axiosInstance from "../lib/axiosInstance.js";
import {API_ENDPOINTS} from "../lib/endpoints.js";

export const getTeacher = async () => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.TEACHER}`);
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

export const patchTeacher = async ({teachers}) => {
    try {
        const res = await axiosInstance.post(`${API_ENDPOINTS.TEACHER}2`, teachers);
        if(res.status!==200 && res.status!==201){
            return Promise.reject(res.status)
        }
        return res;
    }catch (err){
        return Promise.reject(err);
    }
}

export const getRanking = async (order, teacher) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.TEACHER}/ranking?order=${order}&search_query=${teacher}`);
        if(res.status!==200 && res.status!==201){
            return Promise.reject(res.status)
        }
        return res;
    }catch (err){
        return Promise.reject(err);
    }
}
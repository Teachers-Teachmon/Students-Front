import axiosInstance from "../lib/axiosInstance.js";
import {API_ENDPOINTS} from "../lib/endpoints.js";

export const getTeacher = async (name, order) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.TEACHER}?sort=${order}&search_query=${name}`);
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
        const res = await axiosInstance.post(`${API_ENDPOINTS.TEACHER}`, teachers);
        if(res.status!==200 && res.status!==201){
            return Promise.reject(res.status)
        }
        return res;
    }catch (err){
        return Promise.reject(err);
    }
}
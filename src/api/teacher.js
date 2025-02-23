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

export const patchTeacher = async (teacher) => {
    console.log(teacher)
    try {
        const res = await axiosInstance.patch(`${API_ENDPOINTS.TEACHER}/${teacher.teachers.teacher_id}`, {
            name : teacher.teachers.name,
            email : teacher.teachers.email,
            role : teacher.teachers.role
        });
        if(res.status!==200 && res.status!==201){
            return Promise.reject(res.status)
        }
        return res;
    }catch (err){
        return Promise.reject(err);
    }
}

export const deleteTeacher = async (id) => {
    try {
        const res = await axiosInstance.delete(`${API_ENDPOINTS.TEACHER}/${id}`);
        if(res.status!==200){
            return Promise.reject(res.status)
        }
        return res;
    }catch (err){
        return Promise.reject(err);
    }
}

export const postTeacher = async ({teachers}) => {
    try {
        const res = await axiosInstance.post(`${API_ENDPOINTS.TEACHER}`, {
            name : teachers.name,
            email : teachers.email,
            role : teachers.role
        });
        if(res.status!==200 && res.status!==201){
            return Promise.reject(res.status)
        }
        return res;
    }catch (err){
        return Promise.reject(err);
    }
}
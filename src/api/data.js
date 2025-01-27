import {API_ENDPOINTS} from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";

export const getMovement = async (day) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/leaveseat`, {
            day:day
        });
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}

export const getStudent = async (day) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/student`, {
            day:day
        });
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}

export const getLeave = async (day) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/leave`, {
            day:day
        });
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}

export const postMovement = async ({selectStudent, day, time, place, cause}) =>{
    console.log(selectStudent, day, time, place, cause)
    try{
        const res = await axiosInstance.post(`${API_ENDPOINTS.DATA}/leaveseat`, {
            students:selectStudent,
            cause:cause,
            day: day,
            period: time,
            place: place
        });
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}

export const deleteMovement = async ({day, teacher_name}) =>{
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.DATA}/leaveseat`, {
            day: day,
            teacher_name: teacher_name
        });
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}

export const deleteLeave = async ({day, teacher_name}) =>{
    console.log(day, teacher_name)
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.DATA}/leave`, {
            day: day,
            teacher_name: teacher_name
        });
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}

export const patchStudent = async ({studentID, status}) =>{
    try{
        const res = await axiosInstance.patch(`${API_ENDPOINTS.DATA}/student`, {
            studentID: studentID,
            status: status
        });
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}

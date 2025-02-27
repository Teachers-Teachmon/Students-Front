import {API_ENDPOINTS} from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";
import {period} from "../lib/period.js";

//${API_ENDPOINTS.DATA}
export const getMovement = async (day) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/leaveseat?day=${day}`);
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

export const getMovementDetail = async (day, teacher_id, periodName, place) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/leaveseat/detail?day=${day}&teacherId=${teacher_id}&period=${period[periodName]}&place=${place}`);
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
//${API_ENDPOINTS.DATA}
export const getStudent = async (day, search) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/student?day=${day}&search_query=${search}`);
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res.data;

    }catch (err){
        return Promise.reject(err);
    }
}

export const getLeave = async (day) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/leave?day=${day}`);
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


export const deleteMovement = async ({teacher_id, day, periodName, place}) =>{
    console.log(teacher_id, day, periodName)
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.DATA}/leaveseat?teacherId=${teacher_id}&day=${day}&period=${period[periodName]}&place=${place}`);
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

export const deleteLeave = async ({id}) =>{
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.DATA}/leave/${id}`, );
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

export const closeMovement = async ({teacherId, day, period})=>{
    try{
        const res = await axiosInstance.patch(`${API_ENDPOINTS.DATA}/leaveseat?teacherId=${teacherId}&day=${day}&period=${period}`);
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
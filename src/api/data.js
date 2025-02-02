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

export const getMovementDetail = async (day, teacher_id, periodName) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/detail?day=${day}&teacherId=${teacher_id}&period=${period[periodName]}`);
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

export const getStudent = async (day, search) =>{
    try{
        const res = await axiosInstance.get(`/student?day=${day}&search_query=${search}`);
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

export const postMovement = async ({selectStudentShow, today, time, place, cause}) =>{
    console.log(selectStudentShow, today, time, place, cause)
    try{
        const res = await axiosInstance.post(`${API_ENDPOINTS.DATA}/leaveseat`, {
            students:selectStudentShow,
            cause:cause,
            day: today,
            period: period[time],
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

export const deleteMovement = async (teacher_id, day, periodName) =>{
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.DATA}/leaveseat/?teacherId=${teacher_id}&day=${day}&period=${period[periodName]}`);
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

export const deleteLeave = async (id) =>{
    console.log(id)
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
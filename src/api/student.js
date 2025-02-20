import {API_ENDPOINTS} from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";
import {period} from "../lib/period.js";

//${API_ENDPOINTS.STUDENT}
export const getNowStudent = async (grade) =>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.STUDENT}/schedule/${grade}`);
        if(res.status!==200){
            return new Promise.reject({
                status:res.status,
                message:res.message
            })
        }
        return res;
    }catch (err){
        return new Promise.reject(err);
    }
}
export const schoolOutStudent = async (studentID) =>{
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.STUDENT}/exit/${studentID}`);
        if(res.status!==200){
            return new Promise.reject({
                status:res.status,
                message:res.message
            })
        }
        return res;
    }catch(err){
        return Promise.reject(err);
    }
}

export const getLocationAll = async ()=>{
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.STUDENT}/location`);
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

export const getLocation = async (floor) =>{
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.STUDENT}/location/${floor}`);
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

export const getStudentCount = async () => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.STUDENT}/schedule/count`);
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

export const postMovement = async ({selectStudentShow, dayComponent, time, place, cause}) =>{
    try{
        const res = await axiosInstance.post(`${API_ENDPOINTS.STUDENT}/leaveseat`, {
            students:selectStudentShow,
            cause:cause,
            day: dayComponent,
            period: period[time],
            place: place.id
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
    console.log(studentID, status)
    try{
        const res = await axiosInstance.patch(`${API_ENDPOINTS.STUDENT}/schedule`, {
            id: studentID,
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
//${API_ENDPOINTS.STUDENT}
export const createStudent = async ({students, grade}) =>{
    try{
        const res = await axiosInstance.patch(`${API_ENDPOINTS.STUDENT}/${grade}`, students);
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

import {API_ENDPOINTS} from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";


export const getNowStudent = async (grade) =>{
    console.log(grade);
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.STUDENT}/schedule`, {
            grade:grade
        });
        if(res.status!==200){
            return new Promise.reject({
                status:res.status,
                message:res.message
            })
        }
        console.log(res);
        return res;
    }catch (err){
        return new Promise.reject(err);
    }
}
export const schoolOutStudent = async (studentID) =>{
    console.log(studentID);
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.STUDENT}/exit`, {
            studentID:studentID
        });
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
    console.log(floor);
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
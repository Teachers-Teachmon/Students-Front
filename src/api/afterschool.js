import {API_ENDPOINTS} from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";

export const getClassList = async (grade, weekday) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/grade/${grade}/${weekday}`);
        if (res.status !== 200) {
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
};



export const getTodayClasses = async () => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/today`);
        if (res.status !== 200) {
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
};

export const getMyClasses = async () => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/mine`);
        if (res.status !== 200) {
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getAfterSchoolClasses = async (branch, weekday) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/all/${branch}/${weekday}`);
        if (res.status !== 200) {
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const businessTrip = async (day, period, afterSchoolId) => {
    try {
        const res = await axiosInstance.patch(`${API_ENDPOINTS.AFTER_SCHOOL}/participation`, { day, period, afterSchoolId });
        if (res.status !== 200) {
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const classPrep = async (sender, recipient) => {
    try {
        const res = await axiosInstance.patch(`${API_ENDPOINTS.AFTER_SCHOOL}/supplement`, {
            sender,
            recipient
        });

        if (res.status !== 200) {
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteClass = async (afterSchoolId) =>{
    console.log(afterSchoolId)
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.AFTER_SCHOOL}/delete/${afterSchoolId}` );
        if(res.status !== 200){
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}
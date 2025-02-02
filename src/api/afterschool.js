import {API_ENDPOINTS} from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";

export const getClassList = async (grade) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/grade/${grade}`);
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
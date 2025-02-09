import { API_ENDPOINTS } from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";

export const getMonthlySupervision = async (month) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.CHANGE}/schedule/${month}`);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getFixedTeachers = async (date, grade, period) => {
    console.log(date, grade, period);
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.CHANGE}/static`, {
            params: { date, grade, period }
        });
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const sendChangeRequest = async ({sender, recipient, cause}) => {
    try {
        const res = await axiosInstance.post(`${API_ENDPOINTS.CHANGE}/send`, {
            sender,
            recipient,
            cause
        });
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getChangeRequest = async () => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.CHANGE}/view`);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateChangeRequest = async (id, status) => {
    try {
        const res = await axiosInstance.patch(`${API_ENDPOINTS.CHANGE}/${id}`, {
            status
        });
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}
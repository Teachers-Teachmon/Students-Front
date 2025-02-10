import {API_ENDPOINTS} from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";

export const autoAssignment = async ({start, end}) => {
    try {
        const res = await axiosInstance.post(`${API_ENDPOINTS.SUPERVISION}/assignment`, {
            start: start,
            end: end
        })
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}

export const getAssignment = async (momth) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.SUPERVISION}/assignment/${momth}`);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}

export const saveAutoAssignment = async (assignmentList) => {
    try {
        const res = await axiosInstance.patch(`${API_ENDPOINTS.SUPERVISION}/save`, assignmentList);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}

export const getNextSupervision = async () => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.SUPERVISION}/next`);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}

export const getMonthlySupervision = async (month) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.SUPERVISION}/month/${month}`);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}

export const getDailySupervision = async (day) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.SUPERVISION}/day/${day}`);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}

export const getCompleteRate = async ({percentage, total, completed}) => {
    console.log(percentage, total, completed);
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.SUPERVISION}/completed`, {
            percentage: percentage,
            total: total,
            completed: completed
        });
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}

export const getBannedList = async () => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.SUPERVISION}/ban-times`);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}

export const setBannedList = async (bannedList) => {
    try {
        const res = await axiosInstance.post(`${API_ENDPOINTS.SUPERVISION}/ban-times`, bannedList);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch(err) {
        return Promise.reject(err);
    }
}
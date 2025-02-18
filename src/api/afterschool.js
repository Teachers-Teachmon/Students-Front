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

export const businessTrip = async (day, period, afterSchoolId, branch) => {
    try {
        const res = await axiosInstance.patch(`${API_ENDPOINTS.AFTER_SCHOOL}/participation`, { day, period, afterSchoolId, branch });
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

export const classPrep = async ({originalAfterSchool, newAfterSchool}) => {
    try {
        const res = await axiosInstance.patch(`${API_ENDPOINTS.AFTER_SCHOOL}/supplement`, {
            originalAfterSchool,
            newAfterSchool
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
        const res = await axiosInstance.delete(`${API_ENDPOINTS.AFTER_SCHOOL}/remove/${afterSchoolId}` );
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

export const getUploadUrl = async (spreadSheetId) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/upload/${spreadSheetId}`);
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

export const getFlushClass = async (spreadSheetId) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/flush/${spreadSheetId}`);
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

export const saveClass = async (afterSchoolData) => {
    try {
        const res = await axiosInstance.post(`${API_ENDPOINTS.AFTER_SCHOOL}/save`, afterSchoolData)
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

export const getSupplementList = async (day, period) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/list/${day}/${period}`);
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

export const getDailyAfterSchool = async (day) => {
    try {
        const res = await axiosInstance.get(`${API_ENDPOINTS.AFTER_SCHOOL}/daily/${day}`);
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
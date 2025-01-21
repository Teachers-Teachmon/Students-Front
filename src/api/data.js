import {API_ENDPOINTS} from "./endpoints.js";
import axiosInstance from "./axiosInstance.js";

const apiHandler = async (method, endpoint, data) => {
    try {
        const res = await axiosDataClient[method](endpoint, data);
        if (res.status !== 200 && res.status !== 201) {
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    } catch (err) {
        if (err.response) {
            return Promise.reject(`Request failed with status: ${err.response.status}`);
        }
        return Promise.reject(err);
    }
};

export const getMovement =  () => apiHandler('get', `${API_ENDPOINTS.DATA}/leaveseat`);

export const getStudent = () => apiHandler('get', `${API_ENDPOINTS.DATA}/student`);

export const getLeave = () => apiHandler('get', `${API_ENDPOINTS.DATA}/leave`);

export const postLeave = ({students, cause, day, period, place}) => apiHandler('post', `${API_ENDPOINTS.DATA}/leave`, {
    students:students,
    cause:cause,
    day: day,
    period: period,
    place: place
});

export const deleteMovement = () => apiHandler('delete', `${API_ENDPOINTS.DATA}/leaveseat`);

export const deleteLeave = () => apiHandler('delete', `${API_ENDPOINTS.DATA}/leave`);

export const patchStudent = ({studentID, status})=> apiHandler('patch', `${API_ENDPOINTS.DATA}/student`, {
    studentID: studentID,
    status: status
})

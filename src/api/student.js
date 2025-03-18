import {API_ENDPOINTS} from "../lib/endpoints.js";
import axiosInstance from "../lib/axiosInstance.js";
import {period, MovementPeriod} from "../lib/period.js";

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
        console.log("여기에요")
        return err;
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

export const postMovement = async ({selectStudentShow, day, time, place, cause}) =>{
    try{
        const res = await axiosInstance.post(`${API_ENDPOINTS.STUDENT}/leaveseat`, {
            students:selectStudentShow,
            cause:cause,
            day: day,
            period: MovementPeriod[time],
            place: place.id
        });
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        if(res.status === 409){
            alert('이미 해당 교실에 이석중인 학생이 있습니다. 이석 수정을 이용해주세요.');
        }
        return res;

    }catch (err){
        alert('이미 해당 교실에 이석중인 학생이 있습니다. 이석 수정을 이용해주세요.');
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
export const putStudent = async ({students}) =>{
    try{
        const res = await axiosInstance.patch(`${API_ENDPOINTS.STUDENT}/${students.id}`, {
            number : students.number,
            name : students.name,
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

export const postStudent = async ({students}) =>{
    try{
        const res = await axiosInstance.post(`${API_ENDPOINTS.STUDENT}`, {
            number : students.number,
            name : students.name
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

export const deleteStudent = async (studentId) => {
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.STUDENT}/${studentId}`);
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

export const getLeaveStudent = async () => {
    try{
        const res = await axiosInstance.get(`${API_ENDPOINTS.DATA}/leave/week`);
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

export const deleteLeaveStudent = async (leave_id) =>{
    try{
        const res = await axiosInstance.delete(`${API_ENDPOINTS.DATA}/leave/${leave_id}` );
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

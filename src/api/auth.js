import axiosInstance from "../lib/axiosInstance.js";


export const logout = async () => {
    try{
        const res = await axiosInstance.post('/oauth2/logout');
        if(res.status === 200){
            localStorage.removeItem('accessToken');
            localStorage.removeItem("name");
            localStorage.removeItem("profile");
            window.location.href = '/';
        }
        else{
            return Promise.reject({
                status : res.status,
                message : res.message || 'Request failed'
            })
        }
    }catch(err){
        return Promise.reject(err);
    }
}

export const getInfo = async (teacherId) =>{
    try{
        const res = await axiosInstance.get(`/teacher/view/${teacherId}`);
        console.log(res);
        console.log(res.data);
        return res.data;
    }catch(err){
        return Promise.reject(err);
    }
}

export const HealthCheck = async () =>{
    try{
        const res = await axiosInstance.get('/health');
        return res.status;
    }catch(err){
        return Promise.reject(err);
    }
}
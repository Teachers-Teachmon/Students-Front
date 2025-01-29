import axiosInstance from "../lib/axiosInstance.js";
import {useNavigate} from "react-router-dom";


export const logout = async () => {
    const navigate = useNavigate();
    try{
        const res = await axiosInstance.post('/oauth2/logout');
        if(res.status === 200){
            localStorage.removeItem('accessToken');
            localStorage.removeItem("name");
            localStorage.removeItem("profile");
            navigate('/');
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
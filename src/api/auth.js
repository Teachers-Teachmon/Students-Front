import axiosInstance from "../lib/axiosInstance.js";
import {useNavigate} from "react-router-dom";

export const login = async () =>{
    try{
        const res = await axiosInstance.get('/oauth2/authorization/google');
        if(res.status !== 200 && res.status !== 201){
            return Promise.reject({
                status: res.status,
                message: res.message || 'Request failed'
            });
        }
        return res;
    }catch(err){
        return Promise.reject(err);
    }
}

export const logout = async () => {
    const navigate = useNavigate();
    try{
        const res = await axiosInstance.post('/oauth2/logout');
        if(res.status === 200){
            localStorage.removeItem('AT');
            navigate('/');
        }
    }catch(err){
        return Promise.reject(err);
    }
}
import {useEffect, useState} from "react";
import useAuth from "../../zustand/auth.js";
import {Navigate, Outlet} from "react-router-dom";

export default function Authorize(){
    const [isLogin, setIsLogin] = useState(false);
    const {role} = useAuth();
    useEffect(() => {
        if(role === "TEACHER" || role === ''){
            setIsLogin(true);
        }
    }, []);

    if(isLogin) return <Navigate to="/limit" replace />
    return(
        <Outlet />
    )
}
import {useEffect} from "react";

export default function LoginLoading(){

    useEffect(()=>{
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        function deleteCookie(name) {
            document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        }

        localStorage.setItem('accessToken', getCookie('accessToken'));
        deleteCookie('accessToken');
        window.location.href = '/main';
    }, []);

    return(
        <>
        </>
    )
}
import {useEffect} from "react";
import {getInfo} from "../../api/auth.js";
import {decodeJWT} from '../../zustand/auth.js';

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

        const access = getCookie('access');
        localStorage.setItem('accessToken', access);
        deleteCookie('access');

        const value = decodeJWT(access);
        console.log(value);
        const data = getInfo(value.id);
        console.log(data);
        if(data){
            localStorage.setItem('name', data.name);
            localStorage.setItem('profile', data.profile);
            // window.location.href = '/main';
        }
        else{
            throw new Error();
        }
      
    }, []);

    return(
        <>
        </>
    )
}
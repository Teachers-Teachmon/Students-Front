import {useEffect} from "react";
import {getInfo} from "../../api/auth.js";
import {decodeJWT} from '../../zustand/auth.js';
import {useNavigate} from "react-router-dom";
import Loading from "../loading/index.jsx";

export default function LoginLoading(){

    const RETRY_LIMIT = 3;
    const navigate = useNavigate()

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

        let retryCount = 0;
        const fetchTeacherInfo = async () => {
            while (retryCount < RETRY_LIMIT) {
                const value = decodeJWT(access);
                if (!value.id) {
                    console.warn(`Retry ${retryCount + 1}/${RETRY_LIMIT}: teacherId is undefined`);
                    retryCount++;
                    continue;
                }

                try {
                    const data = await getInfo(value.id);
                    if (data) {
                        localStorage.setItem('name', data.name);
                        localStorage.setItem('profile', data.profile);
                        window.history.replaceState(null, "", "/main");
                        navigate("/main", { replace: true });
                        return;
                    }
                } catch (error) {
                    console.error(`Attempt ${retryCount + 1}: Error fetching teacher info`, error);
                    retryCount++;
                }
            }
        };

        fetchTeacherInfo();
    }, []);

    return(
        <>
            <Loading />
        </>
    )
}
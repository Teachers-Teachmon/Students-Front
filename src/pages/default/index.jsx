import {useEffect, useState} from "react";
import {HealthCheck, Check} from "../../api/auth.js";

export default function Default() {
    const [isProxyReady, setIsProxyReady] = useState(false);
    useEffect(() => {
        const checkHealth = async () => {
            try {
                const res = await HealthCheck();
                if(res === 200){
                    setIsProxyReady(true);
                }
            } catch (error) {
                console.error("Health check failed:", error);
            }
        };
        checkHealth();
    }, []);

    useEffect(()=>{
        if(isProxyReady){
            checkUser();
        }
    }, [isProxyReady])

    const checkUser = async () =>{
        try {
            const res = await Check();
            if(res.message === "성공적으로 확인되었습니다."){
                window.location.href = '/main';
            }
            else{
                window.location.href = '/landing';
            }
        } catch (error) {
            console.error("Health check failed:", error);
        }
    }
    return (
        <></>
    )
}
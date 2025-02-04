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
            console.log(res);
            if(res.message === "Authentication Success"){
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
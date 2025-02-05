import {useEffect, useState} from "react";
import {HealthCheck, Check} from "../../api/auth.js";
import {useNavigate} from "react-router-dom";

export default function Default() {
    const [isProxyReady, setIsProxyReady] = useState(false);
    const navigate = useNavigate()
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

            if(res.data === "Authentication Success"){
                navigate('/main');
            }
            else{
                navigate('/landing');
            }
        } catch (error) {
            console.error("Health check failed:", error);
        }
    }
    return (
        <></>
    )
}
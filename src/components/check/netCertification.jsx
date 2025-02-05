import {Navigate, Outlet} from "react-router-dom";
import {useCheck} from "../../hooks/useAuth.js";

export default function NotCertification(){
    const {data, isFetching} = useCheck();
    if (!isFetching && data.data !== "Authentication Success") {
        return <Outlet /> ;
    }
    if(!isFetching){
        return(
            <Navigate to="/main" replace />
        )
    }
}
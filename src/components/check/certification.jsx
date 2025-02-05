import {Navigate, Outlet} from "react-router-dom";
import {useCheck} from "../../hooks/useAuth.js";

export default function Certification(){
    const {data, isFetching} = useCheck();
    if (!isFetching && data.data !== "Authentication Success") {
        alert('로그인된 사용자만 접근가능합니다.')
        return <Navigate to="/landing" replace />;
    }
    if(isFetching) return <></>
    return(
        <Outlet />
    )
}
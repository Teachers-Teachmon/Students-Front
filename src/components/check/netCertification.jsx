import {Navigate, Outlet} from "react-router-dom";
import {useCheck} from "../../hooks/useAuth.js";

export default function Certification(){
    const {data, isFetching} = useCheck();
    console.log(data);
    if (!isFetching && data.data === "Authentication Success") {
        alert('로그인된 사용자는 접근할 수 없습니다.')
        return <Navigate to="/main" replace />;
    }
    if(isFetching) return <></>
    return(
        <Outlet />
    )
}
import {Navigate, Outlet} from "react-router-dom";

export default function NotCertification(){
    if (localStorage.getItem('name')) {
        alert('로그인된 사용자는 접근할 수 없습니다.')
        return <Navigate to="/main" replace />;
    }
    return(
        <Outlet />
    )
}
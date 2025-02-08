import { create } from 'zustand';

export function decodeJWT(token) {
    try {
        const payload = token.split('.')[1];

        const decoded = JSON.parse(atob(payload.replace(/_/g, '/').replace(/-/g, '+')));
        return decoded;
    } catch (error) {
        console.error('JWT 디코딩 실패:', error);
        return null;
    }
}


function setting(){
    const token = localStorage.getItem('accessToken');
    return token ? decodeJWT(token) : null;
}

const useAuth = create((set) => ({
    name:localStorage.getItem('name'),
    profile:localStorage.getItem('profile'),
    email: setting()?.email || '',
    role:setting()?.role || '',
    id:setting()?.id || '',
    setSetting: (token)=>{
        const access = decodeJWT(token);
        set({email : access.email})
        set({role : access.role})
        set({id : access.id})
    }
}));

export default useAuth;
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

const token = localStorage.getItem('accessToken');
const decodedToken = token ? decodeJWT(token) : null;

const useAuth = create(() => ({
    name:localStorage.getItem('name'),
    profile:localStorage.getItem('profile'),
    email: decodedToken.email || '',
    role:decodedToken.role || '',
    id:decodedToken.id || ''
}));

export default useAuth;
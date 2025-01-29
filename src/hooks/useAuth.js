import * as API from '../api/auth.js';
import { useQuery, useMutation } from '@tanstack/react-query';

export const useLogin = () =>{
    return useQuery({
        queryKey: ['login'],
        queryFn: async () => {
            const res = await API.login();
            return res;
        }
    })
}

export const useLogout = () => {
    return useMutation({
        mutationFn: () => API.logout(),
        onSuccess: () => {
            window.location.href = '/';
        },
        onError: (err) => {
            console.error('로그아웃 실패:', err);
        },
    });
};
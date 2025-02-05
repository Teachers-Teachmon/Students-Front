import * as API from '../api/auth.js';
import { useQuery, useMutation } from '@tanstack/react-query';


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

export const useCheck = () =>{
    return useQuery({
        queryKey : 'check',
        queryFn : async () =>{
            return await API.Check();
        },
        staleTime: 1000 * 60 * 10, // 5분 동안 캐시 유지
        cacheTime: 1000 * 60 * 10, // 10분 후 캐시 삭제
        retry: true
    })
}
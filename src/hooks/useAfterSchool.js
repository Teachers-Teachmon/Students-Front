import * as API from '../api/supervision.js';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetClassList = (grade) => {
    return useQuery({
        queryKey: ['getClassList', grade],
        queryFn: async () => {
            const res = await API.getClassList(grade); // 학년 별로 구ㅜㅂㄴ
            return res.data || [];
        },
    });
};

export const useGetTodayClasses = () => {
    return useQuery({
        queryKey: ['getTodayClasses'],
        queryFn: async () => {
            const res = await API.getTodayClasses();
            return res.data || [];
        }
    });
};

export const useGetMyClasses = () => {
    return useQuery({
        queryKey: ['getMyClasses'],
        queryFn: async () => {
            const res = await API.getMyClasses();
            return res.data || [];
        }
    });
};
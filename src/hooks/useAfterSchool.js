import * as API from '../api/afterschool.js';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetClassList = (grade, weekday) => {
    return useQuery({
        queryKey: ['getClassList', grade, weekday],
        queryFn: async () => {
            const res = await API.getClassList(grade, weekday); // 학년 별로 구분
            return res.data || [];
        }
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

export const useGetAfterSchoolClasses = (branch, weekday) => {
    return useQuery({
        queryKey: ['getAfterSchoolClasses', branch, weekday],
        queryFn: async () => {
            const res = await API.getAfterSchoolClasses(branch, weekday);
            return res.data || [];
        }
    });
}
import * as API from '../api/supervision.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useAutoAssignment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (props) => API.autoAssignment(props),
        onSuccess: () => {
            queryClient.invalidateQueries(['getAssignment']);
            console.log('Assignment 성공');
        },
        onError: (err) => {
            console.error('Assignment 실패:', err);
        }
    });
};

export const useGetAssignment = (month) => {
    return useQuery({
        queryKey: ['getAssignment', month],
        queryFn: async () => {
            const res = await API.getAssignment(month);
            return res.data || [];
        }
    });
}

export const useSaveAutoAssignment = () => {
    return useMutation({
        mutationFn: (props) => API.saveAutoAssignment(props),
        onSuccess: () => {
            console.log('Assignment 저장 성공');
        },
        onError: (err) => {
            console.error('Assignment 저장 실패:', err);
        }
    });
};

export const useGetNextSupervision = () => {
    return useQuery({
        queryKey: ['getNextSupervision'],
        queryFn: async () => {
            const res = await API.getNextSupervision();
            return res.data || [];
        }
    });
}

export const useGetMonthlySupervision = (momth) => {
    return useQuery({
        queryKey: ['getMonthlySupervision', momth],
        queryFn: async () => {
            const res = await API.getMonthlySupervision(momth);
            return res.data || [];
        }
    });
}

export const useGetDailySupervision = (day) => {
    return useQuery({
        queryKey: ['getDailySupervision', day],
        queryFn: async () => {
            const res = await API.getDailySupervision(day);
            return res.data || [];
        }
    });
}

export const useGetCompleteRate = (percentage, total, completed) => {
    console.log(percentage, total, completed);
    return useQuery({
        queryKey: ['getCompleteRate', percentage, total, completed],
        queryFn: async () => {
            const res = await API.getCompleteRate({percentage, total, completed});
            return res.data || [];
        }
    });
}
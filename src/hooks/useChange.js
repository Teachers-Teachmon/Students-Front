import * as API from '../api/change.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useGetMonthlySupervision = (month) => {
    return useQuery({
        queryKey: ['getMonthlySupervision', month],
        queryFn: async () => {
            const res = await API.getMonthlySupervision(month);
            return res.data || [];
        }
    })
}

export const useGetFixedTeachers = (date, grade, period) => {
    return useQuery({
        queryKey: ['getFixedTeachers', date, grade, period],
        queryFn: async () => {
            const res = await API.getFixedTeachers(date, grade, period);
            return res.data || [];
        }
    })
}

export const useSendChangeRequest = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (props) => API.sendChangeRequest(props),
        onSuccess: () => {
            navigate('/supervision');
            console.log('교체요청 보냄');
        },
        onError: (err) => {
            console.error('교체요청 실패:', err);
        }
    })
}

export const useGetChangeRequest = () => {
    return useQuery({
        queryKey: ['getChangeRequest'],
        queryFn: async () => {
            const res = await API.getChangeRequest();
            return res.data || [];
        }
    })
}

export const useUpdateChangeRequest = (closeModal) => {
    return useMutation({
        mutationFn: ({ id, status }) => API.updateChangeStatus(id, status),
        onSuccess: () => {
            console.log('교체요청 업데이트');
            closeModal();
        },
        onError: (err) => {
            console.error('교체요청 업데이트 실패:', err);
            closeModal();
        }
    })
}
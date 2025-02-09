import * as API from '../api/change.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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
    console.log(date, grade, period);
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
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, status }) => API.updateChangeRequest(id, status),
        onSuccess: (_, { id, status }) => {
            queryClient.setQueryData(['getChangeRequest'], (old) => {
                if (!old) return [];
                return old.map((request) =>
                    request.changeId === id ? { ...request, result: status } : request
                );
            }); // 바로 적용하기

            setTimeout(() => {
                queryClient.invalidateQueries(['getChangeRequest']);
            }, 5000); // 그치만 서버 값과 다를 수 있으니까, 서버 값은 5초 뒤에 다시 불러오기
        },
        onError: (err) => {
            console.error('교체요청 업데이트 실패:', err);
            closeModal();
        }
    })
}
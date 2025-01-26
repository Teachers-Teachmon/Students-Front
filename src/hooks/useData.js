import * as API from '../api/data.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// Movement 데이터 가져오기
export const useGetMovement = (day) => {
    return useQuery({
        queryKey: ['getMovement', day],
        queryFn: async () => {
            const res = await API.getMovement(day); // 비동기적으로 API 호출
            console.log("이석", res.data);
            return res.data || []; // 데이터가 없을 경우 빈 배열 반환
        },
        enabled: !!day
    });
};

// Leave 데이터 가져오기
export const useGetLeave = (day) => {
    return useQuery({
        queryKey: ['getLeave', day],
        queryFn: async () => {
            const res = await API.getLeave(day);
            return res;
        },
        enabled: !!day
    });
};

// Student 데이터 가져오기
export const useGetStudent = (day) => {
    return useQuery({
        queryKey: ['getStudent', day],
        queryFn: async () => {
            const res = await API.getStudent(day);
            return res;
        },
        enabled: !!day
    });
};

export const usePostMovement = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (props) => API.postMovement(props),
        onSuccess: () => {
            navigate('/manage/record');
        },
        onError: (err) => {
            console.error('Movement 등록 실패:', err);
        },
    });
};
// Movement 삭제하기
export const useDeleteMovement = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (props) => API.deleteMovement(props),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getMovement'] });
        },
        onError: (err) => {
            console.error('Movement 삭제 실패:', err);
        },
    });
};

// Leave 삭제하기
export const useDeleteLeave = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (props) => API.deleteLeave(props),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getLeave'] });
        },
        onError: (err) => {
            console.error('Leave 삭제 실패:', err);
        },
    });
};

// Student 데이터 수정하기
export const usePatchStudent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (props) => API.patchStudent(props),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getStudent'] });
        },
        onError: (err) => {
            console.error('Student 수정 실패:', err);
        },
    });
};
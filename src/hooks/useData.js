import * as API from '../api/data.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// Movement 데이터 가져오기
export const useGetMovement = (day) => {
    return useQuery({
        queryKey: ['getMovement', day],
        queryFn: async () => {
            const res = await API.getMovement(day); // 비동기적으로 API 호출
            return res.data || []; // 데이터가 없을 경우 빈 배열 반환
        },
    });
};

// Leave 데이터 가져오기
export const useGetLeave = (day) => {
    return useQuery({
        queryKey: ['getLeave', day],
        queryFn: async () => {
            const res = await API.getLeave(day);
            return res.data;
        },
    });
};


// Movement 삭제하기
export const useDeleteMovement = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (props) =>API.deleteMovement(props),
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['getMovement', variables.day],(oldData)=>{
                oldData.filter((item)=>{
                        return !(item.teacher_id === variables.teacher_id && item.period === variables.periodName)
                })
            });
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
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries(['getLeave', variables.day]);
            queryClient.setQueryData(['getLeave', variables.day],(oldData)=>{
                oldData.filter((item)=>item.leave_id !== variables.id)
            })
        },
        onError: (err) => {
            console.error('Leave 삭제 실패:', err);
        },
    });
};

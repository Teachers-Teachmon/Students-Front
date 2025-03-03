import * as API from '../api/data.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {closeMovement} from "../api/data.js";

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
                return oldData.filter((item)=>{return !(item.teacher_id === variables.teacher_id && item.period === variables.periodName && variables.place === item.place )})
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
            queryClient.setQueryData(['getLeave', variables.day],(oldData)=>{
                return oldData.filter((item)=>item.leave_id !== variables.id)
            })
        },
        onError: (err) => {
            console.error('Leave 삭제 실패:', err);
        },
    });
};

export const useCloseMovement = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : (props)=> API.closeMovement(props),
        onSuccess : (_, variables)=>{
            queryClient.setQueryData(['locationFloor', variables.floor], (oldData)=>{
                let student;
                const filteredData = Object.keys(oldData)
                    .filter((key) => {
                        if(key === variables.place){
                            student = oldData[key].students;
                            student = student.map(item => ({
                                ...item,
                                classNum: String(item.number).slice(0, 1) + '-' + String(item.number).slice(1, 2)
                            }))}
                        return key !== variables.place;
                    })
                    .reduce((acc, key) => {
                        acc[key] = oldData[key];
                        student.forEach(item => {
                            if(variables.floor === 4) return;
                            if(key === item.classNum){
                                delete item.classNum;
                                acc[key].students.push(item)
                            }
                        })
                        return acc;
                    }, {});

                variables.onSuccessPatch();
                return filteredData
            });
            queryClient.setQueryData(['locationAll'], (oldData)=>{
                const value = Object.keys(oldData[variables.floor - 1]).reduce((acc, item) => {
                    if (item !== variables.place) {
                        acc[item] = oldData[variables.floor - 1][item]; // 필터링된 항목 추가
                    }
                    return acc;
                }, {});
                oldData[variables.floor-1] = value;
            })
        },
        onError: (err) => {
            console.error('Leave 삭제 실패:', err);
        },
    })
}

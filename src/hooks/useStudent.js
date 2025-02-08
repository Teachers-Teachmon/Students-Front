import * as API from '../api/student.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {useNavigate} from "react-router-dom";

export const useGetNowStudent = (grade) =>{
    return useQuery({
        queryKey:['nowStudent', grade],
        queryFn: async () =>{
            const res = await API.getNowStudent(grade);
            return res.data;
        }
    })
}

export const useDeleteSchoolOut = () =>{
    return useMutation({
        mutationFn : (props)=> API.schoolOutStudent(props),
        onError:(err)=>{
            console.log("자퇴 실패 ", err);
        }
    })
}

export const useGetLocationAll = ()=>{
    return useQuery({
        queryKey:['locationAll'],
        queryFn: async () =>{
            const res = await API.getLocationAll();
            return res.data;
        }
    })
}

export const useGetLocationFloor = (floor) =>{
    return useQuery({
        queryKey:['locationFloor', floor],
        queryFn: async () =>{
            const res = await API.getLocation(floor);
            return res.data;
        },
    })
}

export const useGetStudentCount = () => {
    return useQuery({
        queryKey:['studentCount'],
        queryFn: async () => {
            const res = await API.getStudentCount();
            return res.data || [];
        }
    })
}

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

// Student 데이터 수정하기
export const usePatchStudent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (props) => API.patchStudent(props),
        onSuccess: (data, variables) => {
            if(variables.class){
                queryClient.setQueryData(['nowStudent', variables.grade], (oldData) => {
                    if (!oldData) return {};
                    const classKey = `${variables.class}반`;
                    console.log(variables.status)
                    return {
                        ...oldData,
                        [classKey]: oldData[classKey].map(student =>
                            student.id === variables.studentID
                                ? { ...student, status: variables.status }
                                : student
                        )
                    };
                });
            }else{
                queryClient.setQueryData(['locationFloor', variables.floor], (oldData)=>{
                    if (!oldData) return {};
                    return {
                        ...oldData,
                        [variables.place]: oldData[variables.place]['students'].map((item)=>{
                                if(item.id === variables.studentID){
                                    return {
                                        ...item,
                                        status : variables.status
                                    }
                                }
                            }
                        )
                    };
                })
            }
        },
        onError: (err) => {
            console.error('Student 수정 실패:', err);
        },
    });
};
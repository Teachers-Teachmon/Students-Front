import * as API from '../api/student.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {useNavigate} from "react-router-dom";
import {useStatusUpdate} from "../zustand/statusUpdate.js";

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
            console.log(res);
            if(res.status === 500){
                return res.status;
            }
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
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (props) => API.postMovement(props),
        onSuccess: () => {
            queryClient.invalidateQueries(['getMovement']);
            navigate('/manage/record', {state : 1});
        },
        onError: (err) => {
            console.error('Movement 등록 실패:', err);
        },
    });
};

// Student 데이터 수정하기
export const usePatchStudent = () => {
    const queryClient = useQueryClient();
    const {setStatus} = useStatusUpdate();
    return useMutation({
        mutationFn: (props) => API.patchStudent(props),
        onSuccess: (data, variables) => {
            if(variables.class){
                queryClient.setQueryData(['nowStudent', variables.grade], (oldData) => {
                    if (!oldData) return {};
                    const classKey = `${variables.class}반`;
                    return {
                        ...oldData,
                        [classKey]: oldData[classKey].map(student =>
                            student.id === variables.studentID
                                ? { ...student, status: variables.status }
                                : student
                        )
                    };
                });
            }else if(variables.search){
                setStatus();
            } else{
                queryClient.setQueryData(['locationFloor', variables.floor], (oldData)=>{
                    if (!oldData) return {};
                    return {
                        ...oldData,
                        [variables.place]: {
                            ...oldData[variables.place],
                            students: oldData[variables.place].students.map((student) => {
                                if (student.id === variables.studentID) {
                                    return {
                                        ...student,
                                        status: variables.status,
                                    };
                                }
                                return student;
                            }),
                        }
                    }
                })
            }
        },
        onError: (err) => {
            console.error('Student 수정 실패:', err);
        },
    });
};

export const useCreateStudent = ()=>{
    const {setStatus} = useStatusUpdate();
    return useMutation({
        mutationFn : (props)=> API.postStudent(props),
        onSuccess:(data, variables)=>{
            variables.onSuccessPatch();
            setStatus();
        },
        onError:(err)=>{
            console.log("생성 실패 ", err);
        }
    })
}

export const usePutStudent = () => {
    const {setStatus} = useStatusUpdate();
    return useMutation({
        mutationFn : (props)=> API.putStudent(props),
        onSuccess:(data, variables)=>{
            variables.onSuccessPatch();
            setStatus();
        },
        onError:(err)=>{
            console.log("수정 실패 ", err);
        }
    })
}

export const useDeleteStudent = () => {
    const {setStatus} = useStatusUpdate();
    return useMutation({
        mutationFn : (props)=> API.deleteStudent(props),
        onSuccess:(data, variables)=>{
            variables.onSuccessPatch();
            setStatus()
        },
        onError:(err)=>{
            console.log("삭제 실패 ", err);
        }
    })
}

export const useGetLeaveStudent = () => {
    return useQuery({
        queryKey:['getLeaveStudent'],
        queryFn: async () => {
            const res = await API.getLeaveStudent();
            return res.data || [];
        }
    })
}

export const useDeleteLeaveStudent = () =>{
    return useMutation({
        mutationFn : (props)=> API.deleteLeaveStudent(props),
        onError:(err)=>{
            console.log("삭제 실패 ", err);
        }
    })
}
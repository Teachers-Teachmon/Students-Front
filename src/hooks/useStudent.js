import * as API from '../api/student.js';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetNowStudent = (grade) =>{
    return useQuery({
        queryKey:['nowStudent', grade],
        queryFn: async () =>{
            const res = await API.getNowStudent(grade);
            return res;
        },
        enabled:!!grade
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
            return res;
        }
    })
}

export const useGetLocationFloor = (floor) =>{
    return useQuery({
        queryKey:['locationFloor', floor],
        queryFn: async () =>{
            const res = await API.getLocation(floor);
            return res;
        },
        enabled:!!floor
    })
}
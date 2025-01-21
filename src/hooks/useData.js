import * as API from '../api/supervision.js';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetMovement = () =>{
    return useQuery(['getMovement'],async ()=>{
       const res = await API.getMovement();
       return res.data;
    })
}

export const useGetLeave = () =>{
    return useQuery(['getLeave'],async ()=>{
        const res = await API.getLeave();
        return res.data;
    })
}

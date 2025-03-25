import {useMutation, useQuery} from "@tanstack/react-query";
import * as API from "../api/teacher.js";
import {useStatusUpdate} from "../zustand/statusUpdate.js";

export const usePatchTeacher = () => {
    const {setStatus} = useStatusUpdate();
    return useMutation({
        mutationFn: (props)=> API.patchTeacher(props),
        onSuccess: (data, variables) => {
            variables.onSuccessPatch();
            setStatus();
        },
        onError: (err) => {
            console.error('수업 갈수 변경 실패:', err);
        }
    });
}

export const usePostTeacher = () => {
    const {setStatus} = useStatusUpdate();
    return useMutation({
        mutationFn: (props)=> API.postTeacher(props),
        onSuccess: (data, variables) => {
            variables.onSuccessPatch();
            setStatus();
        },
        onError: (err) => {
            console.error('수업 갈수 추가 실패:', err);
        }
    });
}

export const useDeleteTeacher = () => {
    const {setStatus} = useStatusUpdate();
    return useMutation({
        mutationFn: (props)=> API.deleteTeacher(props),
        onSuccess: (data, variables) => {
            variables.onSuccessPatch();
            setStatus();
        },
        onError: (err) => {
            console.error('수업 갈수 삭제 실패:', err);
        }
    });
}
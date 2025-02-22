import {useMutation, useQuery} from "@tanstack/react-query";
import * as API from "../api/teacher.js";
import {useStatusUpdate} from "../zustand/statusUpdate.js";

export const usePatchTeacher = () => {
    const {setStatus} = useStatusUpdate();
    return useMutation({
        mutationFn: (props)=> API.patchTeacher(props),
        onSuccess: (data, variables) => {
            console.log("성공")
            variables.onSuccessPatch();
            setStatus();
        },
        onError: (err) => {
            console.error('수업 갈수 변경 실패:', err);
        }
    });
}
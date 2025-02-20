import * as API from '../api/afterschool.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useGetClassList = (grade, weekday) => {
    return useQuery({
        queryKey: ['getClassList', grade, weekday],
        queryFn: async () => {
            const res = await API.getClassList(grade, weekday); // 학년 별로 구분
            return res.data || [];
        }
    });
};

export const useGetTodayClasses = () => {
    return useQuery({
        queryKey: ['getTodayClasses'],
        queryFn: async () => {
            const res = await API.getTodayClasses();
            return res.data || [];
        }
    });
};

export const useGetMyClasses = () => {
    return useQuery({
        queryKey: ['getMyClasses'],
        queryFn: async () => {
            const res = await API.getMyClasses();
            return res.data || [];
        }
    });
};

export const useGetAfterSchoolClasses = (branch, weekday) => {
    return useQuery({
        queryKey: ['getAfterSchoolClasses', branch, weekday],
        queryFn: async () => {
            const res = await API.getAfterSchoolClasses(branch, weekday);
            return res.data || [];
        }
    });
}

export const useBusinessTrip = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: ({ day, period, afterSchoolId, branch }) => API.businessTrip(day, period, afterSchoolId, branch),
        onSuccess: () => {
            navigate('/after-school');
        }
    });
};

export const useClassPrep = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (props) => API.classPrep(props),
        onSuccess: () => {
            navigate('/after-school');
        }
    })
};

export const useDeleteClass = () =>{
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn : (props)=> API.deleteClass(props),
        onSuccess: () => {
            queryClient.invalidateQueries(['getAfterSchoolClasses']);
            navigate('/after-school');
        }
    })
}

export const useGetUploadUrl = (spreadSheetId) => {
    return useQuery({
        queryKey: ['getUploadUrl', spreadSheetId],
        queryFn: async () => {
            const res = await API.getUploadUrl(spreadSheetId);
            return res.data || [];
        },
        enabled:false
    });
};

export const useUpload = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (spreadSheetId) => API.getUploadUrl(spreadSheetId), // 업로드 API 호출
        onSuccess: (_, variables) => {
            queryClient.refetchQueries(['getAfterSchoolClasses', variables.branch, variables.weekday]); // 업로드 후 데이터 리프레시
        },
    });
};


export const useGetFlushClass = (spreadSheetId) => {
    return useQuery({
        queryKey: ['getFlushClass', spreadSheetId],
        queryFn: async () => {
            const res = await API.getFlushClass(spreadSheetId);
            return res.data || [];
        },
        enabled:false
    });
};

export const useFlush = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (spreadSheetId) => API.getFlushClass(spreadSheetId),
        onSuccess: (_, variables) => {
            queryClient.refetchQueries(['getAfterSchoolClasses', variables.branch, variables.weekday]); // 업로드 후 데이터 리프레시
        },
    });
};

export const useSaveClass = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (props) => API.saveClass(props),
        onSuccess: () => {
            alert("방과후가 저장되었습니다!");
            navigate('/after-school');
        }
    })
}

export const useGetSupplementList = (day, period) => {
    return useQuery({
        queryKey: ['getSupplementList', day, period],
        queryFn: async () => {
            const res = await API.getSupplementList(day, period);
            return res.data || [];
        },
        enabled:false
    });
};

export const useGetMonthlyAfterSchool = (month) => {
    return useQuery({
        queryKey: ['getMonthlyAfterSchool', month],
        queryFn: async () => {
            const res = await API.getMonthlyAfterSchool(month);
            return res.data || [];
        }
    })
}

export const useGetDailyAfterSchool = (day) => {
    return useQuery({
        queryKey: ['getDailyAfterSchool', day],
        queryFn: async () => {
            const res = await API.getDailyAfterSchool(day);
            return res.data || [];
        }
    });
}
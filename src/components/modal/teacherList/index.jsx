import * as S from './style.jsx';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useGetDailySupervision } from '../../../hooks/useSupervision.js';
import X from '../../../assets/X.svg';
import LeftGrayButton from '../../../assets/LeftGrayButton.svg';
import RightGrayButton from '../../../assets/RightGrayButton.svg';

export default function TeacherList({ closeModal, selectedDate }) {
    const formatDateForUI = (date) => {
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${dayNames[date.getDay()]})`;
    };

    const formatDateForRequest = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    const [currentDate, setCurrentDate] = useState(new Date(selectedDate));

    const handlePrevDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    const queryClient = useQueryClient();
    const { data: todayTeacher } = useGetDailySupervision(formatDateForRequest(currentDate), {
        initialData: () => queryClient.getQueryData(['dailySupervision', formatDateForRequest(currentDate)]) || null,
        onSuccess: (data) => {
            queryClient.setQueryData(['dailySupervision', formatDateForRequest(currentDate)], data);
        }
    });
    const formatTeacherName = (teacher) => {
        if (!teacher) return "X";
        const isMe = teacher.includes("/me");
        const teacherName = teacher.replace("/me", "").trim();
        return { name: teacherName, isMe };
    };
    return (
        <S.Container>
            <S.HandleButton onClick={handlePrevDay}><img src={LeftGrayButton} /></S.HandleButton>
            <S.Wrapper>
                <S.Header>
                    <S.MainText>{formatDateForUI(currentDate) || ""}</S.MainText>
                    <S.CloseButton onClick={closeModal}><img src={X} /></S.CloseButton>
                </S.Header>
                <S.Content>
                    {todayTeacher && !isLoading && (
                        <S.Table>
                            <S.TeacherListTop>
                                <span></span>
                                <span>1학년</span>
                                <span>2학년</span>
                                <span>3학년</span>
                            </S.TeacherListTop>
                            <S.TeacherListContent>
                                {["7th_teacher", "8th_teacher", "10th_teacher"].map((period, index) => (
                                    <S.TeacherTable key={index}>
                                        <p>{index === 0 ? "7교시" : index === 1 ? "8~9교시" : "10~11교시"}</p>
                                        {["first_grade", "second_grade", "third_grade"].map((grade, i) => {
                                            const { name, isMe } = formatTeacherName(todayTeacher?.[grade]?.[period]) || {};
                                            return (
                                                <p
                                                    key={i}
                                                    style={{
                                                        color: isMe ? "#2E6FF2" : "",
                                                        fontWeight: isMe ? "bold" : "normal"
                                                    }}
                                                >
                                                    {name}
                                                </p>
                                            );
                                        })}
                                    </S.TeacherTable>
                                ))}
                            </S.TeacherListContent>
                        </S.Table>
                    )}
                </S.Content>
            </S.Wrapper>
            <S.HandleButton onClick={handleNextDay}><img src={RightGrayButton} /></S.HandleButton>
        </S.Container>
    )
}
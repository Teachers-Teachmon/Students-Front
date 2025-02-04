import * as S from './style.jsx';
import { useState } from 'react';
import { useGetDailySupervision } from '../../../hooks/useSupervision.js';

export default function TeacherList({ closeModal, selectedDate }) {
    const formatDateForUI = (date) => {
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${dayNames[date.getDay()]})`;
    };

    const formatDateForRequest = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    const [currentDate, setCurrentDate] = useState(new Date(selectedDate));

    const fetchTeacherData = (newDate) => {
        console.log(`API 요청: ${formatDateForRequest(newDate)}`);
    };

    const handlePrevDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 1);
        setCurrentDate(newDate);
        fetchTeacherData(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 1);
        setCurrentDate(newDate);
        fetchTeacherData(newDate);
    };

    const { data: todayTeacher, isLoading, isError } = useGetDailySupervision(formatDateForRequest(currentDate));
    const formatTeacherName = (teacher) => {
        if (!teacher) return "미배정";
        const isMe = teacher.includes("/me");
        const teacherName = teacher.replace("/me", "").trim();
        return { name: teacherName, isMe };
    };
    return (
        <S.Container>
            <S.HandleButton onClick={handlePrevDay}>{'<'}</S.HandleButton>
            <S.Wrapper>
                <S.Header>
                    <S.MainText>{formatDateForUI(currentDate)}</S.MainText>
                    <S.CloseButton onClick={closeModal}>X</S.CloseButton>
                </S.Header>
                <S.Content>
                    {todayTeacher && (
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
                                            const { name, isMe } = formatTeacherName(todayTeacher?.[grade]?.[period]);
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
            <S.HandleButton onClick={handleNextDay}>{'>'}</S.HandleButton>
        </S.Container>
    )
}
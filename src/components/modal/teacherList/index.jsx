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

    // const { data: todayTeacher, isLoading, isError } = useGetDailySupervision(formatDateForRequest(currentDate));

    const todayTeacher = [
        {
            "day": "2025년 1월 8일 (수)",
            "1학년": {
                "7th_teacher": "정유진",
                "8th_teacher": "최병준",
                "10th_teacher": "장나영"
            },
            "2학년": {
                "7th_teacher": "정유진",
                "8th_teacher": "최병준",
                "10th_teacher": "장나영"
            },
            "3학년": {
                "7th_teacher": "정유진",
                "8th_teacher": "최병준",
                "10th_teacher": "장나영"
            },
        }
    ];

    return (
        <S.Container>
            <S.HandleButton onClick={handlePrevDay}>{'<'}</S.HandleButton>
            <S.Wrapper>
                <S.Header>
                    <S.MainText>{formatDateForUI(currentDate)}</S.MainText>
                    <S.CloseButton onClick={closeModal}>X</S.CloseButton>
                </S.Header>
                <S.Content>
                    {todayTeacher.map((data) => (
                        <S.Table key={data.day}>
                            <S.TeacherListTop>
                                <span></span>
                                <span>1학년</span>
                                <span>2학년</span>
                                <span>3학년</span>
                            </S.TeacherListTop>
                            <S.TeacherListContent>
                                <S.TeacherTable>
                                    <p>7교시</p>
                                    <p>{data['1학년']['7th_teacher']}</p>
                                    <p>{data['2학년']['7th_teacher']}</p>
                                    <p>{data['3학년']['7th_teacher']}</p>
                                </S.TeacherTable>
                                <S.TeacherTable>
                                    <p>8~9교시</p>
                                    <p>{data['1학년']['8th_teacher']}</p>
                                    <p>{data['2학년']['8th_teacher']}</p>
                                    <p>{data['3학년']['8th_teacher']}</p>
                                </S.TeacherTable>
                                <S.TeacherTable>
                                    <p>10~11교시</p>
                                    <p>{data['1학년']['10th_teacher']}</p>
                                    <p>{data['2학년']['10th_teacher']}</p>
                                    <p>{data['3학년']['10th_teacher']}</p>
                                </S.TeacherTable>
                            </S.TeacherListContent>
                        </S.Table>
                    ))}
                </S.Content>
            </S.Wrapper>
            <S.HandleButton onClick={handleNextDay}>{'>'}</S.HandleButton>
        </S.Container>
    )
}
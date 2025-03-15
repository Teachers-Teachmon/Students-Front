import * as S from './style.jsx';
import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useGetDailySupervision } from '../../../hooks/useSupervision.js';
import { useGetDailyAfterSchool } from '../../../hooks/useAfterSchool.js';
import X from '../../../assets/X.svg';
import LeftGrayButton from '../../../assets/LeftGrayButton.svg';
import RightGrayButton from '../../../assets/RightGrayButton.svg';

export default function TeacherList({ closeModal, selectedDate }) {
    const [currentDate, setCurrentDate] = useState(new Date(selectedDate));
    const [tab, setTab] = useState(false);

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

    const formatDateForUI = (date) => {
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${dayNames[date.getDay()]})`;
    };
    const formatDateForRequest = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    const queryClient = useQueryClient();
    const { data: todayTeacher } = useGetDailySupervision(formatDateForRequest(currentDate), {
        initialData: () => queryClient.getQueryData(['dailySupervision', formatDateForRequest(currentDate)]) || null,
        onSuccess: (data) => {
            queryClient.setQueryData(['dailySupervision', formatDateForRequest(currentDate)], data);
        }
    });
    const [cachedTeacher, setCachedTeacher] = useState(null);
    useEffect(() => {
        if (todayTeacher) {
            setCachedTeacher(todayTeacher);
        }
    }, [todayTeacher]);
    const { data: todayAfterSchoolTeacher } = useGetDailyAfterSchool(formatDateForRequest(currentDate), {
        initialData: () => queryClient.getQueryData(['dailyAfterSchool', formatDateForRequest(currentDate)]) || null,
        onSuccess: (data) => {
            queryClient.setQueryData(['dailyAfterSchool', formatDateForRequest(currentDate)], data);
        }
    });
    const [cachedAfterSchoolTeacher, setCachedAfterSchoolTeacher] = useState(null);
    useEffect(() => {
        if (todayAfterSchoolTeacher) {
            setCachedAfterSchoolTeacher(todayAfterSchoolTeacher);
        }
    }, [todayAfterSchoolTeacher]);

    const formatTeacherName = (teacher) => {
        if (teacher === null || !teacher) return { name: "X", isMe: false };
        const isMe = teacher.includes("/me");
        const teacherName = teacher.replace("/me", "").trim();
        return { name: teacherName, isMe };
    };
    const periods = [
        { label: "7교시", key: "7th_teacher" },
        { label: "8~9교시", key: "8th_teacher" },
        { label: "10~11교시", key: "10th_teacher" },
        { label: "야간", key: "night_teacher" }
    ];
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                handlePrevDay();
            } else if (e.key === "ArrowRight") {
                handleNextDay();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentDate]);

    return (
        <S.Container tabIndex={0}>
            <S.HandleButton onClick={handlePrevDay}><img src={LeftGrayButton} /></S.HandleButton>
            <S.Wrapper>
                <S.Header>
                    <div>
                        <S.MainText>{formatDateForUI(currentDate) || ""}</S.MainText>
                        <S.CloseButton onClick={closeModal}><img src={X} /></S.CloseButton>
                    </div>
                    <div>
                        <S.DivisionText $tab={!tab} onClick={() => setTab(false)}>자습감독</S.DivisionText>
                        <S.DivisionText $tab={tab} onClick={() => setTab(true)}>방과후</S.DivisionText>
                    </div>
                </S.Header>
                <S.Content>
                    {(cachedTeacher || cachedAfterSchoolTeacher || todayTeacher || todayAfterSchoolTeacher) && (
                        <S.Table>
                            <S.TeacherListTop $tab={tab}>
                                <span></span>
                                {!tab ? (
                                    <>
                                        <span>자습</span>
                                        <span>이석</span>
                                    </>
                                ) : (
                                    <>
                                        <span>이름</span>
                                        <span>장소</span>
                                    </>
                                )}
                            </S.TeacherListTop>
                            <S.TeacherListContent>
                                {!tab ? (
                                    <>
                                        {periods.map((item, idx) => {
                                            const { label, key } = item;
                                            // if (key === "7th_teacher") {
                                            //     const seventhStr = todayTeacher && todayTeacher["7th_teacher"] ? todayTeacher["7th_teacher"] : "X";
                                            //     const { name: seventhName, isMe: isMeSeventh } = formatTeacherName(seventhStr);
                                            //     return (
                                            //         <S.TeacherTable key={idx}>
                                            //             <p>{label}</p>
                                            //             <p style={{ color: isMeSeventh ? "#2E6FF2" : "", fontWeight: isMeSeventh ? "bold" : "normal" }}>
                                            //                 {seventhName}
                                            //             </p>
                                            //             <p style={{ color: isMeSeventh ? "#2E6FF2" : "", fontWeight: isMeSeventh ? "bold" : "normal" }}>
                                            //                 {seventhName}
                                            //             </p>
                                            //         </S.TeacherTable>
                                            //     );
                                            // }
                                            if (key === "night_teacher") {
                                                const nightStr = todayTeacher && todayTeacher.night_teacher ? todayTeacher.night_teacher : "X";
                                                const { name: nightName, isMe: isMeNight } = formatTeacherName(nightStr);
                                                return (
                                                    <S.TeacherTable key={idx}>
                                                        <p>{label}</p>
                                                        <p style={{ color: isMeNight ? "#2E6FF2" : "", fontWeight: isMeNight ? "bold" : "normal" }}>
                                                            {nightName}
                                                        </p>
                                                        <p style={{ color: isMeNight ? "#2E6FF2" : "", fontWeight: isMeNight ? "bold" : "normal" }}>
                                                            {nightName}
                                                        </p>
                                                    </S.TeacherTable>
                                                );
                                            } else {
                                                const studyStr = todayTeacher && todayTeacher.self_study_teacher ? todayTeacher.self_study_teacher[key] : null;
                                                const leaveStr = todayTeacher && todayTeacher.leave_seat_teacher ? todayTeacher.leave_seat_teacher[key] : null;

                                                const { name: studyName, isMe: isMeStudy } = formatTeacherName(studyStr);
                                                const { name: leaveName, isMe: isMeLeave } = formatTeacherName(leaveStr);

                                                return (
                                                    <S.TeacherTable key={idx}>
                                                        <p>{label}</p>
                                                        <p style={{ color: isMeStudy ? "#2E6FF2" : "", fontWeight: isMeStudy ? "bold" : "normal" }}>
                                                            {studyName}
                                                        </p>
                                                        <p style={{ color: isMeLeave ? "#2E6FF2" : "", fontWeight: isMeLeave ? "bold" : "normal" }}>
                                                            {leaveName}
                                                        </p>
                                                    </S.TeacherTable>
                                                );
                                            }
                                        })}
                                    </>
                                ) : (
                                    <>
                                        {todayAfterSchoolTeacher && todayAfterSchoolTeacher.length > 0 ? (
                                            todayAfterSchoolTeacher.map((item, idx) => {
                                                const { period, teacherName, place } = item;
                                                return (
                                                    <S.TeacherTable key={idx}>
                                                        <p>{period}</p>
                                                        <p>{teacherName}</p>
                                                        <p>{place}</p>
                                                    </S.TeacherTable>
                                                );
                                            })
                                        ) : (
                                            <S.TeacherTable>
                                                <p>{"X"}</p>
                                                <p>{"X"}</p>
                                                <p>{"X"}</p>
                                            </S.TeacherTable>
                                        )}
                                    </>
                                )}
                            </S.TeacherListContent>
                        </S.Table>
                    )}
                </S.Content>
            </S.Wrapper>
            <S.HandleButton onClick={handleNextDay}><img src={RightGrayButton} /></S.HandleButton>
        </S.Container>
    )
}
import * as S from './style.jsx';
import Header from '../../components/header/index.jsx';
import SquareBtn from "../../components/button/square";
import TeacherList from "../../components/modal/teacherList/index.jsx";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetMonthlySupervision } from '../../hooks/useSupervision.js';

export default function Supervision() {
    let navigate = useNavigate();
    let [selectedDate, setSelectedDate] = useState(null);
    let [isModalOpen, setIsModalOpen] = useState(false);

    let [currentDate, setCurrentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const today = new Date().toLocaleDateString();

    const firstDayofMonth = new Date(year, month, 1);
    const startDay = new Date(firstDayofMonth);
    startDay.setDate(1 - firstDayofMonth.getDay());

    const lastDayofMonth = new Date(year, month + 1, 0);
    const endDay = new Date(lastDayofMonth);
    endDay.setDate(lastDayofMonth.getDate() + 6 - lastDayofMonth.getDay());

    const groupDatesByWeek = (startDay, endDay) => {
        const weeks = [];
        let currentWeek = [];
        let currentDate = new Date(startDay);

        while (currentDate <= endDay) {
            currentWeek.push(new Date(currentDate));

            if (currentDate.length === 7 || currentDate.getDay() === 6) {
                weeks.push(currentWeek);
                currentWeek = [];
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }

        if (currentWeek.length > 0) {
            weeks.push(currentWeek);
        }

        return weeks;
    }
    const weeks = groupDatesByWeek(startDay, endDay);

    const handlePrevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const handleDateClick = (date) => {
        const formattedDate = date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\. /g, '-').replace('.', '');

        setSelectedDate(formattedDate);
        setIsModalOpen(true);
    };


    const { data: supervisionList, isLoading, isError } = useGetMonthlySupervision(month + 1);

    return (
        <S.Wrapper>
            <Header />
            <S.MainContent>

                <S.CalendarWrapper>
                    <S.CalendarHeader>
                        <button onClick={handlePrevMonth}>{'<'}</button>
                        <div>{year}년 {month + 1}월</div>
                        <button onClick={handleNextMonth}>{'>'}</button>
                    </S.CalendarHeader>

                    <S.Weekdays>
                        {['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'].map((day, index) => (
                            <S.Weekday key={index}>{day}</S.Weekday>
                        ))}
                    </S.Weekdays>
                    <S.Calendar>
                        {weeks.map((week, weekIdx) => (
                            <S.Week key={weekIdx}>
                                {week.map((date, dateIdx) => {
                                    const localDate = date.toLocaleDateString();
                                    return (
                                        <S.CalendarDay key={dateIdx} onClick={() => { handleDateClick(date) }} $isCurrentMonth={date.getMonth() === month} $isSupervised={Array.isArray(supervisionList) && supervisionList.some(s => s.day === date.getDate() && s.month === month + 1 && s.year === year)}>
                                            <S.Day style={{
                                                backgroundColor: localDate === today ? '#ECF3FD' : '',
                                                color: localDate === today ? '#5288F4' : '',
                                            }}>{date.getDate()}</S.Day>
                                            {Array.isArray(supervisionList) && supervisionList.map((s, index) => {
                                                if (s.day === date.getDate() && s.year == year && s.month === month + 1) {
                                                    return Array.isArray(s.schedule) ? (
                                                        s.schedule.map((schedule, idx) => (
                                                            <S.ScheduleItem key={idx} period={schedule.period}>
                                                                <span>{schedule.period}</span>
                                                                <span>{schedule.grade}학년</span>
                                                            </S.ScheduleItem>
                                                        ))
                                                    ) : (
                                                        s.schedule && (
                                                            <S.ScheduleItem key={index} period={s.schedule.period}>
                                                                <span>{s.schedule.period}</span>
                                                                <span>{s.schedule.grade}학년</span>
                                                            </S.ScheduleItem>
                                                        )
                                                    );
                                                }
                                            })}
                                        </S.CalendarDay>
                                    );
                                })}
                            </S.Week>
                        ))}
                    </S.Calendar>
                </S.CalendarWrapper>
                <S.Actions>
                    <SquareBtn name="교체하기" status={true} On={() => { navigate('/supervision/change') }} />
                    <SquareBtn name="자습감독일정" status={true} On={() => { navigate('/supervision/detail') }} />
                </S.Actions>
            </S.MainContent>

            {isModalOpen && (
                <S.ModalOverlay>
                    <S.Modal>
                        <TeacherList closeModal={() => { setIsModalOpen(false) }} selectedDate={selectedDate} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Wrapper>
    );
}
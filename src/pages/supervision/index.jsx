import * as S from './style.jsx';
import Header from '../../components/header/index.jsx';
import SquareBtn from "../../components/button/square";
import TeacherList from "../../components/modal/teacherList/index.jsx";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Supervision() {
    let navigate = useNavigate();
    let [selectedDate, setSelectedDate] = useState(null);
    let [isModalOpen, setIsModalOpen] = useState(false); // 이거 날짜 클릭했을 때 나오는 모달을 위해서 만든거임

    let [currentDate, setCurrentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const today = new Date().toLocaleDateString();

    // 바로 1일로 시작하지 않고 빈공간이 있다면 저번달의 날짜를 표시하기 위해서
    const firstDayofMonth = new Date(year, month, 1); //현재 달의 첫날
    const startDay = new Date(firstDayofMonth);
    startDay.setDate(1 - firstDayofMonth.getDay()); //현재 달의 첫날의 요일을 일요일로 맞춤

    // 31일로 끝났는데, 빈공간이 있으면 거기를 채워야함
    const lastDayofMonth = new Date(year, month + 1, 0); //현재 달의 마지막날 (3번째 인자를 0으로 하면 마지막날 반환)
    const endDay = new Date(lastDayofMonth);
    endDay.setDate(lastDayofMonth.getDate() + 6 - lastDayofMonth.getDay()); //현재 달의 마지막날의 요일을 토요일로 맞춤

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
            month: 'long',
            day: 'numeric'
        });
    
        const weekdayMap = {
            '일요일': '(일)',
            '월요일': '(월)',
            '화요일': '(화)',
            '수요일': '(수)',
            '목요일': '(목)',
            '금요일': '(금)',
            '토요일': '(토)'
        };
    
        const weekday = date.toLocaleDateString('ko-KR', { weekday: 'long' });
        const formattedWithWeekday = `${formattedDate} ${weekdayMap[weekday]}`;
    
        setSelectedDate(formattedWithWeekday);
        setIsModalOpen(true);
    };    

    const supervisionList = [
        {
            "year": 2025,
            "month": 1,
            "day": 19,
            "schedule": [
                {
                    "period": "7교시",
                    "grade": 1
                },
                {
                    "period": "8~9교시",
                    "grade": 1
                }
            ]
        },
        {
            "year": 2025,
            "month": 2,
            "day": 3,
            "schedule": [
                {
                    "period": "7교시",
                    "grade": 1
                },
                {
                    "period": "8~9교시",
                    "grade": 1
                },
                {
                    "period": "10~11교시",
                    "grade": 1
                }
            ]
        }
    ]

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
                                        <S.CalendarDay key={dateIdx} onClick={() => { handleDateClick(date) }} isCurrentMonth={date.getMonth() === month} isSupervised={supervisionList.some(s => s.day === date.getDate() && s.month === month + 1 && s.year === year)}>
                                            <S.Day style={{
                                                backgroundColor: localDate === today ? '#ECF3FD' : '',
                                                color: localDate === today ? '#5288F4' : '',
                                            }}>{date.getDate()}</S.Day>
                                            {supervisionList.map((s, index) => {
                                                if (s.day === date.getDate() && s.year == year && s.month === month + 1) {
                                                    return s.schedule.map((schedule, idx) => (
                                                        <S.ScheduleItem key={idx} period={schedule.period}>
                                                            <span>{schedule.period}</span>
                                                            <span>{schedule.grade}학년</span>
                                                        </S.ScheduleItem>
                                                    ));
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
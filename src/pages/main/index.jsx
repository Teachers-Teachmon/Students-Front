import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/progressBar";
import SquareBtn from "../../components/button/square";
import TeacherList from "../../components/modal/teacherList/index.jsx";
import Header from "../../components/header";
import RequestBox from "../../components/modal/requestBox";
import * as S from './style.jsx'
import Arrow from '../../assets/Arrow.svg'
import Rotate from '../../assets/rotate.svg';
import { useState, useEffect } from "react";
import { useGetCompleteRate, useGetNextSupervision } from "../../hooks/useSupervision.js";
import { useGetChangeRequest } from "../../hooks/useChange.js";
import { useGetStudentCount } from "../../hooks/useStudent.js";
import LeftGrayButton from '../../assets/LeftGrayButton.svg';
import RightGrayButton from '../../assets/RightGrayButton.svg';
import DivisionAll from '../../assets/DivisionAll.svg';
import DivisionAfterSchool from '../../assets/DivisionAfterSchool.svg';
import DivisionSupervision from '../../assets/DivisionSupervision.svg';

export default function Main() {
    let navigate = useNavigate();
    let userName = localStorage.getItem('name');
    const [isModalOpen, setIsModalOpen] = useState([false, false]);
    const [selectedChange, setSelectedChange] = useState(null);
    let [selectedDate, setSelectedDate] = useState(null);

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
    const { data: changeDay, isLoading: isLoadingChange, isError: isErrorChange } = useGetChangeRequest();
    // const { data: todayTeacher, isLoading: isLoadingTeacher, isError: isErrorTeacher } = useGetDailySupervision(formattedDate);
    const { data: studentCount, isLoading: isLoadingCount, isError: isErrorCount } = useGetStudentCount();
    const { data: nextData, isLoading: isLoadingNext, isError: isErrorNext } = useGetNextSupervision();
    const { data: completeRateData, isLoading: isLoadingRate, isError: IsErrorRate } = useGetCompleteRate();

    const [nextDay, setNextDay] = useState(0);
    const [day, setDay] = useState("");
    const [period, setPeriod] = useState("");

    const [supRate, setSupRate] = useState(0);
    const [supCount, setSupCount] = useState(0);
    const [supTotal, setSupTotal] = useState(0);

    useEffect(() => {
        if (!isLoadingNext && nextData) {
            setNextDay(nextData.remainder);
            setDay(nextData.day || "");
            setPeriod(nextData.period || "");
        }
    }, [nextData, isLoadingNext]);

    useEffect(() => {
        if (!isLoadingRate && completeRateData) {
            setSupRate(completeRateData.percentage);
            setSupCount(completeRateData.completed);
            setSupTotal(completeRateData.total);
        }
        console.log(completeRateData);
    }, [completeRateData, isLoadingRate]);

    // const formatDateForUI = (date) => {
    //     console.log(date);
    //     date = new Date(date);
    //     const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    //     return `${date.getMonth() + 1}월 ${date.getDate()}일 (${dayNames[date.getDay()]})`;
    // };

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
        setIsModalOpen(prev => [true, prev[1]]);
    };

    const [isFullscreen, setIsFullscreen] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia('(display-mode: fullscreen)');
        const handleChange = (e) => {
            setIsFullscreen(e.matches);
        };
        mq.addEventListener('change', handleChange);
        setIsFullscreen(mq.matches);

        return () => {
            mq.removeEventListener('change', handleChange);
        };
    }, []);


    return (
        <S.MainContainer>
            <Header />
            <S.MainContent $isFullscreen={isFullscreen}>
                <h1>안녕하세요 {userName} 선생님</h1>
                <S.MainTop>
                    <S.SelfStudySupCnt>
                        <h2>{supRate}%</h2>
                        <ProgressBar rate={supRate} />
                        <S.ProgressBottom>
                            <p>내가 한 자습감독 횟수 : {supCount}</p>
                            <p>나의 전체 자습감독 횟수 : {supTotal}</p>
                        </S.ProgressBottom>
                    </S.SelfStudySupCnt>

                    <SquareBtn name="학생관리" status={true} On={() => { navigate('/manage') }} />
                </S.MainTop>
                <div style={{ display: "flex", flexDirection: "column", gap: isFullscreen ? "1.1rem" : "0" }}>
                    <S.MainMiddle>
                        <S.NextSup $isFullscreen={isFullscreen}>
                            <S.NexSupLeft $isFullscreen={isFullscreen}>
                                <h3>다음 자습감독 기간</h3>
                                <S.NextSupDate>D - {nextDay === -1 ? "End" : nextDay === 0 ? "Day" : nextDay}</S.NextSupDate>
                                <h2>{day}</h2>
                                <h4>{period}</h4>
                            </S.NexSupLeft>
                            <S.GoToSupBtn $isFullscreen={isFullscreen} onClick={() => { navigate('/supervision') }}>자습감독<img src={Arrow} /></S.GoToSupBtn>
                        </S.NextSup>

                        <S.CalendarWrapper>
                            <S.CalendarHeader>
                                <S.Division>
                                    <div>방과후 : <img src={DivisionAfterSchool} /></div>
                                    <div>자습감독 : <img src={DivisionSupervision} /></div>
                                </S.Division>
                                <S.Control>
                                    <button onClick={handlePrevMonth}><img src={LeftGrayButton} /></button>
                                    <div>{year}년 {month + 1}월</div>
                                    <button onClick={handleNextMonth}><img src={RightGrayButton} /></button>
                                </S.Control>
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
                                                <S.CalendarDay key={dateIdx} onClick={() => { handleDateClick(date) }} $isCurrentMonth={date.getMonth() === month}>
                                                    <S.Day $isCurrentMonth={date.getMonth() === month} style={{
                                                        backgroundColor: localDate === today ? '#ECF3FD' : '',
                                                        color: localDate === today ? '#5288F4' : '',
                                                    }}>{date.getDate()}</S.Day>
                                                </S.CalendarDay>
                                            );
                                        })}
                                    </S.Week>
                                ))}
                            </S.Calendar>
                        </S.CalendarWrapper>
                    </S.MainMiddle>
                    <S.MainBottom>
                        <S.BottomLeft>
                            <h2>교체 요청 ({changeDay?.length})</h2>
                            <S.BottomLeftContent>
                                <S.BottomLeftHeader>
                                    <span>받는 사람</span>
                                    <span>보내는 사람</span>
                                </S.BottomLeftHeader>
                                {(!changeDay || (changeDay && changeDay.length === 0)) && <S.NoChange>교체 요청이 없습니다.</S.NoChange>}
                                {changeDay && changeDay.map((data) => {
                                    const senderInfo = data.sender.teacher.split('/');
                                    const recipientInfo = data.recipient.teacher.split('/');
                                    
                                    const convertType = (type) => {
                                        if (type === "SELF_STUDY_SUPERVISION") return "자습";
                                        if (type === "LEAVE_SEAT_SUPERVISION") return "이석";
                                        if (type === "NIGHT_SUPERVISION") return "야간";
                                        if (type === "COMMON_SUPERVISION") return "공통";
                                    }

                                    const leftName = data.toMe ? "(나)" : `(${recipientInfo[0]} 선생님)`;
                                    const leftDay = data.toMe ? data.recipient.day : data.sender.day;
                                    const leftPeriod = data.toMe ? data.recipient.period : data.sender.period;
                                    const leftType = data.toMe ? convertType(data.recipient.type) : convertType(data.sender.type);

                                    const rightName = data.toMe ? `(${senderInfo[0]} 선생님)` : "(나)";
                                    const rightDay = data.toMe ? data.sender.day : data.recipient.day;
                                    const rightPeriod = data.toMe ? data.sender.period : data.recipient.period;
                                    const rightType = data.toMe ? convertType(data.sender.type) : convertType(data.recipient.type);

                                    return (
                                        <S.ChangeCard key={data.changeId} style={{ backgroundColor: data.toMe ? "#C8DBFF" : data.result === "ACCEPTED" ? "#72FAAA" : data.result === "REJECTED" ? "#FF938C" : "" }}>
                                            <S.ChangeWrap>
                                                <S.ChangeSide>
                                                    <p>{leftName}</p>
                                                    <p>{leftDay} {leftPeriod} {leftType}</p>
                                                </S.ChangeSide>
                                                <S.RotateIcon src={Rotate} />
                                                <S.ChangeSide>
                                                    <p>{rightName}</p>
                                                    <p>{rightDay} {rightPeriod} {rightType}</p>
                                                </S.ChangeSide>
                                            </S.ChangeWrap>
                                            <S.DetailButton onClick={() => { setIsModalOpen(prev => [prev[0], true]); setSelectedChange(data) }}>자세히 보기</S.DetailButton>
                                        </S.ChangeCard>
                                    );
                                })}
                            </S.BottomLeftContent>
                        </S.BottomLeft>
                        <S.BottomRight>
                            <S.StudentInfoWrap>
                                <S.StudentInfoHeader>
                                    <span>학년</span>
                                    <span>자습 인원</span>
                                    <span>이석 인원</span>
                                    <span>조퇴/결석</span>
                                </S.StudentInfoHeader>
                                <S.StudentInfoContent>
                                    {studentCount && studentCount?.map((data) => (
                                        <S.Row $isFullscreen={isFullscreen} key={data.grade}>
                                            <div>{data.grade}학년</div>
                                            <div>{data.self_study_count}명</div>
                                            <div>{data.leaveseat_count}명</div>
                                            <div>{data.absent_count}명</div>
                                        </S.Row>
                                    ))}
                                </S.StudentInfoContent>
                            </S.StudentInfoWrap>
                            {/* <h2>오늘의 자습감독 선생님</h2>
                            {!isLoadingTeacher ? (
                                <S.BottomRightContent>
                                    <div>
                                        <S.TeacherListTop $isFullscreen={isFullscreen}>
                                            <span>{todayTeacher && formatDateForUI(todayTeacher.date)}</span>
                                            <span>1학년</span>
                                            <span>2학년</span>
                                            <span>3학년</span>
                                        </S.TeacherListTop>
                                        <S.TeacherListContent>
                                            {["7th_teacher", "8th_teacher", "10th_teacher"].map((period, index) => (
                                                <S.TeacherTable key={index}>
                                                    <p>{index === 0 ? "7교시" : index === 1 ? "8~9교시" : "10~11교시"}</p>
                                                    {["first_grade", "second_grade", "third_grade"].map((grade, i) => {
                                                        const teacher = todayTeacher[grade][period] ? todayTeacher[grade][period].replace("/me", "") : "X";
                                                        const isMe = todayTeacher[grade][period] ? todayTeacher[grade][period].includes("/me") : false;
                                                        return (
                                                            <p key={i} style={{ color: isMe ? "#2E6FF2" : "", fontWeight: isMe ? "600" : "" }}>
                                                                {teacher}
                                                            </p>
                                                        );
                                                    })}
                                                </S.TeacherTable>
                                            ))}
                                        </S.TeacherListContent>
                                    </div>
                                </S.BottomRightContent>
                            ) : (
                                <S.BottomRightContent>
                                    <p>로딩중...</p>
                                </S.BottomRightContent>
                            )} */}

                        </S.BottomRight>
                    </S.MainBottom>
                </div>
            </S.MainContent>
            {isModalOpen[0] && (
                <S.ModalOverlay onClick={() => { setIsModalOpen(prev => [false, prev[1]]); }}>
                    <S.Modal onClick={(e) => { e.stopPropagation() }}>
                        <TeacherList closeModal={() => { setIsModalOpen(prev => [false, prev[1]]); }} selectedDate={selectedDate} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
            {isModalOpen[1] && (
                <S.ModalOverlay onClick={() => { setIsModalOpen(prev => [prev[0], false]) }}>
                    <S.Modal onClick={() => { setIsModalOpen(prev => [prev[0], false]) }}>
                        <RequestBox closeModal={() => { setIsModalOpen(prev => [prev[0], false]) }} changeData={selectedChange} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.MainContainer>
    )
}
import { data, useNavigate } from "react-router-dom";
import ProgressBar from "../../components/progressBar";
import SquareBtn from "../../components/button/square";
import Header from "../../components/header";
import RequestBox from "../../components/modal/requestBox";
import * as S from './style.jsx'
import Arrow from '../../assets/Arrow.svg'
import Rotate from '../../assets/rotate.svg';
import { useState, useEffect } from "react";
import { useGetCompleteRate, useGetNextSupervision, useGetDailySupervision } from "../../hooks/useSupervision.js";
import { useGetChangeRequest } from "../../hooks/useChange.js";
import { useGetStudentCount } from "../../hooks/useStudent.js";

export default function Main() {
    let navigate = useNavigate();
    let userName = localStorage.getItem('name');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChange, setSelectedChange] = useState(null);
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const { data: changeDay, isLoading: isLoadingChange, isError: isErrorChange } = useGetChangeRequest();
    const { data: todayTeacher, isLoading: isLoadingTeacher, isError: isErrorTeacher } = useGetDailySupervision(formattedDate);
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

    const formatDateForUI = (date) => {
        console.log(date);
        date = new Date(date);
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        return `${date.getMonth() + 1}월 ${date.getDate()}일 (${dayNames[date.getDay()]})`;
    };

    return (
        <S.MainContainer>
            <Header />
            <S.MainContent>
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

                <S.MainMiddle>
                    <S.NextSup>
                        <S.NexSupLeft>
                            <h3>다음 자습감독 기간</h3>
                            <S.NextSupDate>D - {nextDay === -1 ? "End" : nextDay === 0 ? "Day" : nextDay}</S.NextSupDate>
                            <h2>{day}</h2>
                            <h4>{period}</h4>
                        </S.NexSupLeft>
                        <S.GoToSupBtn onClick={() => { navigate('/supervision') }}>자습감독<img src={Arrow} /></S.GoToSupBtn>
                    </S.NextSup>

                    <S.StudentInfo>
                        <h2>학생 정보</h2>
                        <S.StudentInfoWrap>
                            <S.StudentInfoHeader>
                                <span>학년</span>
                                <span>자습 인원</span>
                                <span>이석 인원</span>
                                <span>조퇴/결석</span>
                            </S.StudentInfoHeader>
                            {studentCount && studentCount?.map((data) => (
                                <S.Row key={data.grade}>
                                    <div>{data.grade}학년</div>
                                    <div>{data.self_study_count}명</div>
                                    <div>{data.leaveseat_count}명</div>
                                    <div>{data.absent_count}명</div>
                                </S.Row>
                            ))}
                        </S.StudentInfoWrap>
                    </S.StudentInfo>
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

                                const leftName = data.toMe ? "(나)" : `(${recipientInfo[0]} 선생님)`;
                                const leftDay = data.toMe ? data.recipient.day : data.sender.day;
                                const leftPeriod = data.toMe ? data.recipient.period : data.sender.period;
                                const leftGrade = data.toMe ? data.recipient.grade : data.sender.grade;

                                const rightName = data.toMe ? `(${senderInfo[0]} 선생님)` : "(나)";
                                const rightDay = data.toMe ? data.sender.day : data.recipient.day;
                                const rightPeriod = data.toMe ? data.sender.period : data.recipient.period;
                                const rightGrade = data.toMe ? data.sender.grade : data.recipient.grade;

                                return (
                                    <S.ChangeCard key={data.changeId} style={{ backgroundColor: data.toMe ? "#C8DBFF" : data.result === "ACCEPTED" ? "#72FAAA" : data.result === "REJECTED" ? "#FF938C" : "" }}>
                                        <S.ChangeWrap>
                                            <S.ChangeSide>
                                                <p>{leftName}</p>
                                                <p>{leftDay} {leftPeriod} {leftGrade}학년</p>
                                            </S.ChangeSide>
                                            <S.RotateIcon src={Rotate} />
                                            <S.ChangeSide>
                                                <p>{rightName}</p>
                                                <p>{rightDay} {rightPeriod} {rightGrade}학년</p>
                                            </S.ChangeSide>
                                        </S.ChangeWrap>
                                        <S.DetailButton onClick={() => { setIsModalOpen(true); setSelectedChange(data) }}>자세히 보기</S.DetailButton>
                                    </S.ChangeCard>
                                );
                            })}
                        </S.BottomLeftContent>
                    </S.BottomLeft>
                    <S.BottomRight>
                        <h2>오늘의 자습감독 선생님</h2>
                        {!isLoadingTeacher ? (
                            <S.BottomRightContent>
                                <div>
                                    <S.TeacherListTop>
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
                        )}
                    </S.BottomRight>
                </S.MainBottom>
            </S.MainContent>
            {isModalOpen && (
                <S.ModalOverlay onClick={() => { setIsModalOpen(false) }}>
                    <S.Modal onClick={(e) => { e.stopPropagation() }}>
                        <RequestBox closeModal={() => { setIsModalOpen(false) }} changeData={selectedChange} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.MainContainer>
    )
}
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/progressBar";
import SquareBtn from "../../components/button/square";
import Header from "../../components/header";
import RequestBox from "../../components/modal/requestBox";
import * as S from './style.jsx'
import Arrow from '../../assets/Arrow.svg'
import Rotate from '../../assets/rotate.svg';
import { useState, useEffect } from "react";
import { useGetCompleteRate, useGetNextSupervision } from "../../hooks/useSupervision.js";
import { useGetChangeRequest } from "../../hooks/useChange.js";

export default function Main() {
    let navigate = useNavigate();
    let userName = '정유진';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChange, setSelectedChange] = useState(null);

    // const { data: changeDay, isLoading: isLoadingChange, isError: isErrorChange } = useGetChangeRequest();

    let studentInfo = [
        {
            "grade": 1,
            "selfstudy_count": 10,
            "leaveseat_count": 50,
            "absent_count": 15
        },
        {
            "grade": 2,
            "selfstudy_count": 40,
            "leaveseat_count": 23,
            "absent_count": 0
        },
        {
            "grade": 3,
            "selfstudy_count": 40,
            "leaveseat_count": 21,
            "absent_count": 0
        }
    ]
    let changeDay = [
        {
            "changeId": 10393,
            "sender": {
                "teacher": "최병준/1",
                "day": "11월 27일 (수)",
                "period": "7교시",
                "grade": 2,
            },
            "recipient": {
                "teacher": "정유진/2",
                "day": "11월 27일 (수)",
                "period": "7교시",
                "grade": 1,
            },
            "cause": "유진쌤 제가 이날 밤에 출장이 있어서 교체해야할 거 같아요",
            "result": "PENDING",
            "toMe": true,
        },
        {
            "changeId": 10394,
            "sender": {
                "teacher": "정유진/2",
                "day": "11월 27일 (수)",
                "period": "7교시",
                "grade": 1,
            },
            "recipient": {
                "teacher": "최병준/1",
                "day": "11월 27일 (수)",
                "period": "7교시",
                "grade": 2,
            },
            "cause": "유진쌤 제가 이날 밤에 출장이 있어서 교체해야할 거 같아요",
            "result": "PENDING",
            "toMe": false,
        },
    ]
    const pendingChangeRequests = changeDay?.filter(request => request.result === "PENDING") || [];

    let todayTeacher = [
        {
            "day": "11월 27일 (수)",
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
            }
        }
    ]

    const { data: nextData, isLoading: isLoadingNext, isError: isErrorNext } = useGetNextSupervision();
    const { data: completeRateData, isLoading: isLoadingRate, isError: IsErrorRate } = useGetCompleteRate();

    const [nextDay, setNextDay] = useState(-1);
    const [day, setDay] = useState("");
    const [period, setPeriod] = useState("");

    const [supRate, setSupRate] = useState(0);
    const [supCount, setSupCount] = useState(0);
    const [supTotal, setSupTotal] = useState(0);

    useEffect(() => {
        if (!isLoadingNext && nextData) {
            setNextDay(nextData.reminder ?? -1);
            setDay(nextData.reminder === -1 ? "더 이상 자습감독 일정이 없습니다." : nextData.day || "");
            setPeriod(nextData.reminder === -1 ? "" : nextData.period || "");
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
                            <S.NextSupDate>D - {nextDay === -1 ? 0 : nextDay}</S.NextSupDate>
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
                            {studentInfo.map((data) => (
                                <S.Row key={data.grade}>
                                    <div>{data.grade}학년</div>
                                    <div>{data.selfstudy_count}명</div>
                                    <div>{data.leaveseat_count}명</div>
                                    <div>{data.absent_count}명</div>
                                </S.Row>
                            ))}
                        </S.StudentInfoWrap>
                    </S.StudentInfo>
                </S.MainMiddle>
                <S.MainBottom>
                    <S.BottomLeft>
                        <h2>교체 요청 ({pendingChangeRequests.length})</h2>
                        <S.BottomLeftContent>
                            <S.BottomLeftHeader>
                                <span>받는 사람</span>
                                <span>보내는 사람</span>
                            </S.BottomLeftHeader>
                            {pendingChangeRequests.map((data) => {
                                const senderInfo = data.sender.teacher.split('/');
                                const recipientInfo = data.recipient.teacher.split('/');

                                const leftName = data.toMe ? "(나)" : `${recipientInfo[0]} 선생님`;
                                const leftDay = data.toMe ? data.recipient.day : data.sender.day;
                                const leftPeriod = data.toMe ? data.recipient.period : data.sender.period;
                                const leftGrade = data.toMe ? data.recipient.grade : data.sender.grade;

                                const rightName = data.toMe ? `(${senderInfo[0]} 선생님)` : "(나)";
                                const rightDay = data.toMe ? data.sender.day : data.recipient.day;
                                const rightPeriod = data.toMe ? data.sender.period : data.recipient.period;
                                const rightGrade = data.toMe ? data.sender.grade : data.recipient.grade;

                                return (
                                    <S.ChangeCard key={data.changeId} style={{ backgroundColor: data.toMe ? "#C8DBFF" : "" }}>
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
                        <S.BottomRightContent>
                            {todayTeacher.map((data) => (
                                <div key={data.day}>
                                    <S.TeacherListTop>
                                        <span>{data.day}</span>
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
                                </div>
                            ))}
                        </S.BottomRightContent>
                    </S.BottomRight>
                </S.MainBottom>
            </S.MainContent>
            {isModalOpen && (
                <S.ModalOverlay>
                    <S.Modal>
                        <RequestBox closeModal={() => { setIsModalOpen(false) }} changeData={selectedChange} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.MainContainer>
    )
}
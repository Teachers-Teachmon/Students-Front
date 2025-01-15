import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/progressBar";
import SquareBtn from "../../components/button/square";
import Header from "../../components/header";
import * as S from './style.jsx'
import Arrow from '../../assets/arrow.svg'
import retate from '../../assets/rotate.svg';
import { useState, useEffect } from "react";

export default function Main() {
    let navigate = useNavigate();
    let userName = '정유진';
    let supCount = 9;
    let supTotal = 10;
    let supRate = supTotal > 0 ? Math.round(supCount / supTotal * 100) : 0;

    // let [studentInfo, setStudentInfo] = useState([]);
    // let [changeDay, setChangDay] = useState([]);
    // let [todayTeacher, setTodayTeacher] = useState([]);

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
            "request_to_me": [
                {
                    "change_id": 10393,
                    "sender": "최병준/24.061.bssm.hs.kr",
                    "sender_day": "11월 27일 (수)",
                    "sender_period": "7교시",
                    "sender_grade": 2,
                    "recipient": "정유진/24.061.bssm.hs.kr",
                    "recipient_day": "11월 27일 (수)",
                    "recipient_period": "7교시",
                    "recipient_grade": 1,
                    "cause": "유진쌤 제가 이날 밤에 출장이 있어서 교체해야할 거 같아요",
                    "result": "hold",
                }
            ],
            "request_to_other": [
                {
                    "change_id": 34384883,
                    "sender": "정유진/24.061.bssm.hs.kr",
                    "sender_day": "11월 27일 (수)",
                    "sender_period": "7교시",
                    "sender_grade": 2,
                    "recipient": "최병준/24.061.bssm.hs.kr",
                    "recipient_day": "11월 27일 (수)",
                    "recipient_period": "7교시",
                    "recipient_grade": 1,
                    "cause": "병준쌤 제가 이날 밤에 출장이 있어서 교체해야할 거 같아요",
                    "result": "hold",
                }
            ]
        }
    ]
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

    // 학생 정보 요청 받기
    // useEffect(() => {
    //     axios.get("어딘가?")
    //     .then((res) => {
    //         setStudentInfo(res.data);
    //     })
    //     .catch((e) => {
    //         console.error(e);
    //     })
    // },[])

    // 교체 요청 받기
    // useEffect(() => {
    //     axios.get("어딘가?")
    //     .then((res) => {
    //         setChangeDay(res.data);
    //     })
    //     .catch((e) => {
    //         console.error(e);
    //     })
    // },[])

    // 오늘의 자습감독 선생님 요청 받기
    // useEffect(() => {
    //     axios.get("어딘가?")
    //     .then((res) => {
    //         setTodayTeacher(res.data);
    //     })
    //     .catch((e) => {
    //         console.error(e);
    //     })
    // },[])



    let nextDay = 2;
    let day = "11월 27일 (수)";
    let period = "8교시 ~ 9교시";
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
                            <S.NextSupDate>D - {nextDay}</S.NextSupDate>
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
                        <h2>교체 요청</h2>
                        <S.BottomLeftContent>
                            
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
        </S.MainContainer>
    )
}
import * as S from './style.jsx'
import Header from '../../components/header/index.jsx'
import CircleBtn from "../../components/button/circle"
import SquareBtn from "../../components/button/square/index.jsx";
import useDay from "../../zustand/day.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Record from "../../assets/record.svg";
import StudentGraph from '../../components/student-graph'
import {useGetNowStudent} from "../../hooks/useStudent.js";
import Loading from "../../components/loading/index.jsx";

export default function Manage(){
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const {today} = useDay();
    const [day, setDay] = useState(today);
    const navigate = useNavigate()
    const [grade, setGrade] = useState([
        true,false,false
    ]);
    const gradeIndex = () => {
        return grade
            .map((item, idx) => (item ? idx+1 : null))
            .filter((idx) => idx !== null);
    };
    const {data : student, isLoading, isFetching} = useGetNowStudent(gradeIndex()[0]);

    const [weekday, setWeekday] = useState(false);
    // 렌더링시 오늘의 날짜를 계산해서 보여줌
    useEffect(() => {
        const pattern = /(\d{4}-\d{2}-\d{2})\s(\w+)/;
        const match = today.match(pattern);
        switch (match[2]) {
            case 'Monday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (월)`);
                break;
            case 'Tuesday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (화)`);
                break;
            case 'Wednesday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (수)`);
                break;
            case 'Thursday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (목)`);
                break;
            case 'Friday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (금)`);
                setWeekday(true);
                break;
            case 'Saturday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (토)`);
                setWeekday(true);
                break;
            case 'Sunday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (일)`);
                setWeekday(true);
                break;
        }
    }, []);


    // 이함수가 실행될때마다 학년이 바뀌고 그 데이터가 바뀌어야함
    const changeGrade = (idx) => {
        const newGrade = [false, false, false];
        newGrade[idx] = true;
        setGrade(newGrade);
    }

    let period;
    const changeClass = () =>{
        const time = hour * 60 + minute;
        if(time >= 0 && time <= 16 * 60 + 29){
            period = "7교시";
        }else if(time >= 16 * 60 + 30 && time <= 18*60 + 59){
            period = "8~9교시"
        }else if(time >= 19*60 && time <= 24*60) {
            period = "10~11교시"
        }else {
            period = null
        }
    }
    changeClass();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <S.ManageContainer>
            {isLoading || isFetching && !weekday && period && <Loading />}
            <Header />
            <S.Wrap>
                <S.Info>
                    <h1>{day} {!weekday ? period : null}</h1>
                    <SquareBtn name={"학생위치"} status={true} On={()=>navigate('/manage/location')} />
                </S.Info>
                <S.Main>
                    <S.MainNav>
                        <S.MainBox>
                            <S.Grade>
                                <CircleBtn name={windowWidth > 400 ? "1학년" : "1"} status={grade[0]} On={()=>changeGrade(0)} />
                                <CircleBtn name={windowWidth > 400 ? "2학년" : "2"} status={grade[1]} On={()=>changeGrade(1)} />
                                <CircleBtn name={windowWidth > 400 ? "3학년" : "3"} status={grade[2]} On={()=>changeGrade(2)} />
                            </S.Grade>
                            <S.Color>
                                <S.Colors>
                                    <S.Status>방과후 : </S.Status>
                                    <S.ColorBox color={"white"}></S.ColorBox>
                                </S.Colors>
                                <S.Colors>
                                    <S.Status>이석 : </S.Status>
                                    <S.ColorBox color={"#CCBCFF"}></S.ColorBox>
                                </S.Colors>
                                <S.Colors>
                                    <S.Status>조퇴 : </S.Status>
                                    <S.ColorBox color={"#FFDC93"}></S.ColorBox>
                                </S.Colors>
                                <S.Colors>
                                    <S.Status>이탈 : </S.Status>
                                    <S.ColorBox color={"#FF938C"}></S.ColorBox>
                                </S.Colors>
                                <S.Colors>
                                    <S.Status>자습 : </S.Status>
                                    <S.ColorBox color={"#72FAAA"}></S.ColorBox>
                                </S.Colors>
                            </S.Color>
                        </S.MainBox>
                        <S.MainBox>
                            <S.Record onClick={()=>navigate('/manage/record', {state:1})}>
                                {windowWidth > 400 && <img src={Record} alt="" />}
                                <p>이석</p>
                            </S.Record>
                            <S.Record onClick={()=>navigate('/manage/record', {state: 2})}>
                                {windowWidth > 400 && <img src={Record} alt="" />}
                                <p>이탈</p>
                            </S.Record>
                            <S.Record onClick={()=>navigate('/manage/record', {state: 3})}>
                                {windowWidth > 400 && <img src={Record} alt="" />}
                                <p>학생</p>
                            </S.Record>
                        </S.MainBox>
                    </S.MainNav>
                    <S.Section>
                        {weekday ? <S.NoData>오늘은 방과후가 없습니다.</S.NoData> :
                             student['1반']?.length === 0 && student['2반']?.length === 0 && student['3반']?.length === 0 && student['4반']?.length === 0 ? <S.NoData>데이터가 없습니다</S.NoData> :
                                !isLoading && student ?
                                    <>
                                        <StudentGraph data={student['1반']} grade={gradeIndex()[0]} classNum = {1}/>
                                        <StudentGraph data={student['2반']} grade={gradeIndex()[0]} classNum = {2}/>
                                        <StudentGraph data={student['3반']} grade={gradeIndex()[0]}  classNum = {3}/>
                                        <StudentGraph data={student['4반']} grade={gradeIndex()[0]}  classNum = {4}/>
                                    </> :
                                    <>
                                        <StudentGraph grade={gradeIndex()[0]} classNum = {1}/>
                                        <StudentGraph grade={gradeIndex()[0]} classNum = {2}/>
                                        <StudentGraph grade={gradeIndex()[0]}  classNum = {3}/>
                                        <StudentGraph grade={gradeIndex()[0]}  classNum = {4}/>
                                    </>
                        }

                    </S.Section>
                </S.Main>
            </S.Wrap>
        </S.ManageContainer>
    )
}
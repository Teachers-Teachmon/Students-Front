import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import {useNavigate} from "react-router-dom";
import CircleBtn from "../../../components/button/circle/index.jsx";
import {useEffect, useState} from "react";
import Leave from "../../../components/record/leave/index.jsx";
import Movement from "../../../components/record/movement/index.jsx";
import Student from "../../../components/record/student/index.jsx";
import Search from "../../../assets/Search.svg";
import {useGetMovement, useGetStudent, useGetLeave} from "../../../hooks/useData.js";
import useDay from "../../../zustand/day";
import DateInput from "../../../components/dateInput/index.jsx";

export default function Record() {
    const navigate = useNavigate();
    const [isMovement, setIsMovement] = useState([
        true, false, false
    ]);
    const data = [
        {id : 1, name : "1410 윤도훈"},
        {id : 2, name : "1410 윤도훈"},
        {id : 3, name : "1410 윤도훈"},
        {id : 4, name : "1410 윤도훈"},
    ]
    const [searchStudent, setSearchStudent] = useState("");
    const {today, day:dayComponent} = useDay();
    const [day, setDay] = useState(today);
    const { data: movement, isLoading: movementLoading, isError: movementError } = useGetMovement(day);
    console.log(movement);
    const {data :leave, leaveLoading, leaveError} = useGetLeave(day);
    const {data :student, studentLoading, studentError} = useGetStudent(day);

    useEffect(() => {
        setDay(dayComponent);
    }, [dayComponent]);

    return (
        <S.ManageContainer>
            <Header/>
            <S.Wrap>
                <S.Info>
                    {isMovement[0] ? (
                        <h1>이석기록</h1>
                    ) : isMovement[1] ? (
                        <h1>이탈기록</h1>
                    ) : isMovement[2] ? (
                        <h1>학생기록</h1>
                    ) : null}
                    <SquareBtn name={"돌아가기"} status={true} On={() => navigate('/manage')} />
                </S.Info>
                <S.Main>
                    <S.MainNav>
                        <div>
                            <DateInput />
                            <CircleBtn name={"이석"} status={isMovement[0]}  On={()=>setIsMovement([true, false, false])}/>
                            <CircleBtn name={"이탈"} status={isMovement[1]} On={()=>setIsMovement([false, true, false])}/>
                            <CircleBtn name={"학생"} status={isMovement[2]} On={()=>setIsMovement([false, false, true])}/>
                        </div>

                        {isMovement[2] ?
                            <S.InputBox>
                                <img src={Search} alt={"검색아이콘"} width={20}></img>
                                <S.Input
                                    type={"text"}
                                    placeholder={"학번을 입력해주세요"}
                                    value={searchStudent}
                                    onChange={(e)=>setSearchStudent(e.target.value)}
                                />
                            </S.InputBox>
                            : null}
                    </S.MainNav>
                    {isMovement[0] ? (
                        <Movement data={movement}/>
                    ) : isMovement[1] ? (
                        <Leave data={[
                            {
                                studentID: 1401,
                                name: "김동욱",
                                day: "2024-12-25",
                                period: 10,
                                teacher_name: "이정하"
                            }
                        ]}/>
                    ) : isMovement[2] ? (
                        <Student data={data} search = {searchStudent} />
                    ) : null}
                </S.Main>
            </S.Wrap>
        </S.ManageContainer>
    )
}
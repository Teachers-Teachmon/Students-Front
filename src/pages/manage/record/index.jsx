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
import {useDebounce} from "../../../hooks/useDebounce.js";
import {searchStudent} from "../../../api/data.js";

export default function Record() {
    const navigate = useNavigate();
    const [isMovement, setIsMovement] = useState([
        true, false, false
    ]);

    const [search, setSearch] = useState("");
    const {today, day:dayComponent} = useDay();
    const [day, setDay] = useState(today);
    const { data: movement, isLoading: movementLoading, isError: movementError } = useGetMovement(day);
    const {data :leave, leaveLoading, leaveError} = useGetLeave(day);
    const {data :student, studentLoading, studentError} = useGetStudent(day);
    const debounce = useDebounce(search, 300);
    const [data, setData] = useState([]);

    useEffect(() => {
        setDay(dayComponent);
    }, [dayComponent]);

    useEffect( async ()=>{
        const students = await searchStudent(search);
        setData(students);
    }, [debounce])

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
                                    value={search}
                                    onChange={(e)=>setSearch(e.target.value)}
                                />
                            </S.InputBox>
                            : null}
                    </S.MainNav>
                    {isMovement[0] ? (
                        <Movement data={movement}/>
                    ) : isMovement[1] ? (
                        <Leave data={leave}/>
                    ) : isMovement[2] ? (
                        <Student data={student} search = {setSearch} searchValue = {data} />
                    ) : null}
                </S.Main>
            </S.Wrap>
        </S.ManageContainer>
    )
}
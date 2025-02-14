import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import CircleBtn from "../../../components/button/circle/index.jsx";
import {useEffect, useState} from "react";
import Leave from "../../../components/record/leave/index.jsx";
import Movement from "../../../components/record/movement/index.jsx";
import Student from "../../../components/record/student/index.jsx";
import Search from "../../../assets/Search.svg";
import useDay from "../../../zustand/day";
import DateInput from "../../../components/dateInput/index.jsx";
import {useDebounce} from "../../../hooks/useDebounce.js";
import {getStudent} from "../../../api/data.js";
import patchDay from "../../../utils/patchDay.js";
import Write from "../../../components/modal/write/index.jsx";

export default function Record() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)
    const [isFirst, setIsFirst] = useState(true);
    const [isMovement, setIsMovement] = useState([
        location.state === 1, location.state === 2, location.state === 3
    ]);
    const [search, setSearch] = useState("");
    const {today, day:dayComponent} = useDay();
    const [day, setDay] = useState(today);
    const debounce = useDebounce(search, 500);
    const [student, setStudent] = useState([]);
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        if(dayComponent){
            setIsFirst(false);
            setDay(dayComponent);
        }
    }, [dayComponent]);

    useEffect(() => {
        const fetchData = async () => {
            const students = await getStudent(isFirst ? patchDay(day) : day, search);
            setStudent(students);
        };

        fetchData();
    }, [debounce, day]);
    return (
        <S.ManageContainer>
            <Header/>
            <S.Wrap>
                <S.Info>
                    {isMovement[0] ? (
                        <h1>이석</h1>
                    ) : isMovement[1] ? (
                        <h1>이탈</h1>
                    ) : isMovement[2] ? (
                        <h1>학생</h1>
                    ) : null}
                    <S.InfoBtn>
                        <SquareBtn name={"돌아가기"} status={true} On={() => navigate('/manage')} />
                        {isMovement[0] && <SquareBtn name={"이석작성"} status={true} On={()=>setIsModal(!isModal)} />}
                    </S.InfoBtn>
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
                        <Movement day={day} isFirst={isFirst}/>
                    ) : isMovement[1] ? (
                        <Leave day={day} isFirst={isFirst}/>
                    ) : isMovement[2] ? (
                        <Student data={student} day={day}/>
                    ) : null}
                    {isModal ?
                        <S.Black onClick={()=>setIsModal(false)}>
                            <Write isModal={isModal} setIsModal={setIsModal}/>
                        </S.Black>
                        :
                        null
                    }
                </S.Main>
            </S.Wrap>
        </S.ManageContainer>
    )
}
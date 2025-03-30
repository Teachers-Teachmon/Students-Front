import * as S from './style.jsx'
import SquareBtn from "../../../components/button/square/index.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import CircleBtn from "../../../components/button/circle/index.jsx";
import {useEffect, useState} from "react";
import Leave from "../../../components/record/leave/index.jsx";
import Movement from "../../../components/record/movement/index.jsx";
import Student from "../../../components/record/student/index.jsx";
import useDay from "../../../zustand/day";
import DateInput from "../../../components/dateInput/index.jsx";
import {useDebounce} from "../../../hooks/useDebounce.js";
import {getStudent} from "../../../api/data.js";
import patchDay from "../../../utils/patchDay.js";
import Write from "../../../components/modal/write/index.jsx";
import {useStatusUpdate} from "../../../zustand/statusUpdate.js";
import SearchBox from "../../../components/searchBox/index.jsx";
import Layout from "../layout.jsx";
import MOBILE from "../../../utils/mobile.js";
import {useWidth} from "../../../zustand/width.js";

export default function Record() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isFirst, setIsFirst] = useState(true);
    const [isMovement, setIsMovement] = useState([
        location.state === 1, location.state === 2, location.state === 3
    ]);
    const [search, setSearch] = useState("");
    const {today, recordDay, setRecordDay, day : dayComponent, setDay : setDayComponent} = useDay();
    const [day, setDay] = useState(today);
    const debounce = useDebounce(search, 500);
    const [student, setStudent] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const {status} = useStatusUpdate();

    useEffect(() => {
        setRecordDay(patchDay(day));
        if(!isMovement.some(item=>item === true)) setIsMovement([true, false, false]);
    }, []);

    useEffect(() => {
        if(recordDay){
            setIsFirst(false);
            setDay(recordDay);
        }
    }, [recordDay]);


    useEffect(() => {
        const fetchData = async () => {
            const students = await getStudent(isFirst ? patchDay(day) : day, search);
            setStudent(students);
        };
        fetchData();
    }, [debounce, day, status]);

    const [isPeriod, setIsPeriod] = useState([false, false, false]);
    const periodHandler = (id) =>{
        const newIsPeriod = [...isPeriod];
        newIsPeriod[id] = !isPeriod[id];
        setIsPeriod(newIsPeriod);
    }
    const {width} = useWidth();
    return (
        <Layout>
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
                        {isMovement[0] && width > MOBILE && <SquareBtn name={"이석작성"} status={true} On={()=>setIsModal(!isModal)} />}
                    </S.InfoBtn>
                </S.Info>
                <S.Main>
                    <S.MainNav>
                        <div>
                            <DateInput onChange={setRecordDay} />
                            <CircleBtn name={"이석"} status={isMovement[0]}  On={()=>setIsMovement([true, false, false])}/>
                            <CircleBtn name={"이탈"} status={isMovement[1]} On={()=>setIsMovement([false, true, false])}/>
                            <CircleBtn name={"학생"} status={isMovement[2]} On={()=>setIsMovement([false, false, true])}/>
                        </div>

                        {isMovement[2] ?
                            <SearchBox value={search} change={setSearch} target={"학생"} />
                            : null}
                        {isMovement[0] &&
                            <S.CheckBox>
                                <div>
                                    <input
                                        type={'checkbox'}
                                        value={isPeriod[0]}
                                        onChange={()=>periodHandler(0)}
                                    />
                                    <label>{width > MOBILE ? "7교시" : "7"}</label>
                                </div>
                                <div>
                                    <input
                                        type={'checkbox'}
                                        value={isPeriod[1]}
                                        onChange={()=>periodHandler(1)}
                                    />
                                    <label>{width > MOBILE ? "8~9교시" : "8"}</label>
                                </div>
                                <div>
                                    <input
                                        type={'checkbox'}
                                        value={isPeriod[2]}
                                        onChange={()=>periodHandler(2)}
                                    />
                                    <label>{width > MOBILE ? "10~11교시" : "10"}</label>
                                </div>
                            </S.CheckBox>}
                    </S.MainNav>
                    {isMovement[0] ? (
                        <Movement isPeriod = {
                            isPeriod.reduce((acc, value, index) => {
                                if (value){
                                    if(index === 0) acc.push("7교시");
                                    else if(index === 1) acc.push("8~9교시");
                                    else if(index === 2) acc.push("10~11교시");
                                }
                                return acc;
                            }, [])
                        } day={day} isFirst={isFirst}/>
                    ) : isMovement[1] ? (
                        <Leave day={day} isFirst={isFirst}/>
                    ) : isMovement[2] ? (
                        <Student data={student} day={day}/>
                    ) : null}
                    {isModal ?
                        <S.Black>
                            <Write isModal={isModal} setIsModal={setIsModal}/>
                        </S.Black>
                        :
                        null
                    }
                </S.Main>
        </Layout>
    )
}
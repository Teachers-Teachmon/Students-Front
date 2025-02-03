import * as S from './style.jsx';
import CircleBtn from "../../button/circle";
import { useState, useEffect } from "react";
import Dropdown from "../../dropdown/nosearch";
import SquareBtn from "../../button/square";
import Search from '../../../assets/Search.svg'
import SearchDropdown from '../../dropdown/search';
import {usePostMovement} from '../../../hooks/useData.js';
import useDay from "../../../zustand/day.js";
import SchoolOut from "../confirm/schoolOut/index.jsx";
import {useDebounce} from "../../../hooks/useDebounce.js";
import {searchStudent, searchPlace} from "../../../api/search.js";

export default function Write({isModal, setIsModal}){
    const [time, setTime] = useState("시간");
    const [place, setPlace] = useState("장소");
    const [isMovement, setIsMovement] = useState([true, false]);
    const [isOpen, setIsOpen] = useState([false, false]);
    const [cause, setCause] = useState("");
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("학생");
    const changeMovement = (idx) => {
        const newMovement = [false, false];
        newMovement[idx] = !newMovement[idx];
        setIsMovement(newMovement);
    }
    const t = ["7교시", "8~9교시", "10~11교시"];

    const [student, setStudent] = useState([]);

    const [selectStudent, setSelectStudent] = useState([]);
    const {mutate : postMovement} = usePostMovement();
    const {today: day} = useDay();

    const debounceStudent = useDebounce(search, 300);

    useEffect(() => {
        const fetchStudents = async () => {
            const students = await searchStudent(search);
            console.log(students)
            setStudent(students);
        };
        fetchStudents();
    }, [debounceStudent]);

    return(
        <S.WriteContainer>
            {isMovement[2] ? (
                <SchoolOut name={search2} On={()=>{
                    setIsMovement([true, false, false]);
                    setIsModal(false);
                }}/>
            ) : (
                <>
                    <S.Info>
                        <CircleBtn name={"이석"} status={isMovement[0]} On={() => changeMovement(0)} />
                        <CircleBtn name={"자퇴"} status={isMovement[1]} On={() => changeMovement(1)} />
                    </S.Info>
                    <h1>{isMovement[0] ? "이석" : "자퇴"}</h1>
                    {isMovement[0] ? (
                        <>
                            {isOpen.some((status) => status === true) ?
                                <S.Black onClick={()=>setIsOpen([false, false])}/> : null
                            }
                            <S.Place>
                                <Dropdown
                                    name={time}
                                    item={t}
                                    change={(event) => setTime(event)}
                                    isOpen={isOpen[0]}
                                    click={() => setIsOpen([!isOpen[0], false])}
                                />
                                <SearchDropdown
                                    target={"장소"}
                                    name={place}
                                    axios={(event)=>searchPlace(event)}
                                    change={(event) => setPlace(event)}
                                    isOpen={isOpen[1]}
                                    click={() => setIsOpen([false, !isOpen[1]])}
                                    />
                            </S.Place>
                            <S.Reason
                                type={"text"}
                                value={cause}
                                onChange={(event) => setCause(event.target.value)}
                                placeholder={"사유를 입력해주세요"}
                            />
                            <S.InputBox>
                                <img src={Search} alt={"검색아이콘"} width={20} />
                                <S.Input
                                    type={"text"}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder={"학번을 입력해주세요"}
                                />
                                <S.StudentList>
                                    {search && student &&
                                        student.map((currentItem) => {
                                            if (selectStudent.includes(currentItem.number+ " " + currentItem.name)) return null;
                                            return (
                                                <S.StudentItem
                                                    onClick={() => {
                                                        setSelectStudent((prev) => [...prev, currentItem.number+ " " +currentItem.name]);
                                                        setSearch("");
                                                    }}
                                                    key={currentItem}
                                                    value={currentItem}
                                                >
                                                    {currentItem.number} {currentItem.name}
                                                </S.StudentItem>
                                            );
                                        })
                                    }
                                </S.StudentList>
                            </S.InputBox>
                            <S.StudentBox>
                                {selectStudent
                                    ? selectStudent.map((item, idx) => (
                                        <S.Student
                                            key={idx}
                                            onClick={() =>
                                                setSelectStudent(
                                                    selectStudent.filter(
                                                        (currentItem) => currentItem !== item
                                                    )
                                                )
                                            }
                                        >
                                            <p>{item}</p>
                                        </S.Student>
                                    ))
                                    : null}
                            </S.StudentBox>
                            <S.Submit>
                                <SquareBtn name={"취소"} status={false} On={() => setIsModal(false)} />
                                <SquareBtn
                                    name={"작성완료"}
                                    status={true}
                                    On={() => {
                                        postMovement({ selectStudent, day, time, place, cause });
                                    }}
                                />
                            </S.Submit>
                        </>
                    ) : (
                        <>
                            {isOpen.some((status) => status === true) ?
                                <S.Black onClick={()=>setIsOpen([false, false])}/> : null
                            }
                            <SearchDropdown
                                target={"학생"}
                                name={search2}
                                isOpen={isOpen[0]}
                                axios={(event)=>searchStudent(event)}
                                change={(event) => setSearch2(event)}
                                click={() => setIsOpen([!isOpen[0]])}
                            />
                            <S.Reason
                                type={"text"}
                                value={cause}
                                onChange={(event) => setCause(event.target.value)}
                                placeholder={"사유를 입력해주세요"}
                            />
                            <S.Submit>
                                <SquareBtn name={"취소"} status={false} On={() => setIsModal(false)} />
                                <SquareBtn
                                    name={"작성완료"}
                                    status={true}
                                    On={() => {
                                        setIsMovement([false, false, true]);
                                    }}
                                />
                            </S.Submit>
                        </>
                    )}
                </>
            )}
        </S.WriteContainer>
    )
}
import * as S from './style.jsx';
import CircleBtn from "../../button/circle";
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Dropdown from "../../dropdown/nosearch";
import SquareBtn from "../../button/square";
import Search from '../../../assets/Search.svg'
import SearchDropdown from '../../dropdown/search';
import {usePostMovement} from '../../../hooks/useStudent.js';
import useDay from "../../../zustand/day.js";
import {useDebounce} from "../../../hooks/useDebounce.js";
import {searchStudent, searchPlace} from "../../../api/search.js";
import DateInput from "../../dateInput/index.jsx";

export default function Write({isModal, setIsModal}){
    const queryClient = useQueryClient();
    const [time, setTime] = useState("시간");
    const [place, setPlace] = useState("장소");
    const [isOpen, setIsOpen] = useState([false, false]);
    const [cause, setCause] = useState("");
    const [search, setSearch] = useState("");

    const t = ["7교시", "8~9교시", "10~11교시"];

    const [student, setStudent] = useState([]);

    const [selectStudent, setSelectStudent] = useState([]);
    const [selectStudentShow, setSelectStudentShow] = useState([]);
    const {mutate : postMovement} = usePostMovement();
    const {day: dayComponent} = useDay();
    const debounceStudent = useDebounce(search, 150);

    useEffect(() => {
        const fetchStudents = async () => {
            const students = await searchStudent(search);
            setStudent(students);
        };
        fetchStudents();
    }, [debounceStudent]);

    return(
        <S.WriteContainer onClick={(e)=>e.stopPropagation()}>
                <>
                    <h1>이석작성</h1>
                        <>
                            {isOpen.some((status) => status === true) ?
                                <S.Black onClick={()=>setIsOpen([false, false])}/> : null
                            }
                            <DateInput />
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
                                    name={place.name || place}
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
                                            if (selectStudentShow.includes(currentItem.id)) {
                                                return null;
                                            }
                                            else {
                                                return (
                                                    <S.StudentItem
                                                        onClick={() => {
                                                            setSelectStudentShow((prev) => [...prev, currentItem.id]);
                                                            setSelectStudent((prev) => [...prev, currentItem]);
                                                            setSearch("");
                                                        }}
                                                        key={currentItem.id}
                                                        value={currentItem}
                                                    >
                                                        {currentItem.number} {currentItem.name}
                                                    </S.StudentItem>
                                                );
                                            }
                                        })
                                    }
                                </S.StudentList>
                            </S.InputBox>
                            <S.StudentBox>
                                {selectStudent
                                    ? selectStudent.map((item, idx) => {
                                        console.log(item)
                                        return(
                                            <S.Student
                                                key={idx}
                                                onClick={() =>{
                                                    setSelectStudentShow(
                                                        selectStudentShow.filter(
                                                            (currentItem) => currentItem !== item.id
                                                        )
                                                    )
                                                    setSelectStudent(
                                                        selectStudent.filter(
                                                            (currentItem) => currentItem !== item
                                                        )
                                                    )
                                                }}
                                            >
                                                <p> {item.number} {item.name}</p>
                                            </S.Student>
                                        )
                                    })
                                    : null}
                            </S.StudentBox>
                            <S.Submit>
                                <SquareBtn name={"취소"} status={false} On={() => setIsModal(false)} />
                                <SquareBtn
                                    name={"작성완료"}
                                    status={true}
                                    On={() => {
                                        postMovement({ selectStudentShow, dayComponent, time, place, cause, set : setIsModal(false) })}}
                                />
                            </S.Submit>
                        </>
                </>
        </S.WriteContainer>
    )
}
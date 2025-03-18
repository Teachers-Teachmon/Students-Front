import * as S from './style.jsx';
import { useState, useEffect } from "react";
import Dropdown from "../../dropdown/nosearch";
import SquareBtn from "../../button/square";
import Search from '../../../assets/Search.svg'
import SearchDropdown from '../../dropdown/search';
import  {usePostMovement} from '../../../hooks/useStudent.js';
import {usePatchMovement} from '../../../hooks/useData.js';
import useDay from "../../../zustand/day.js";
import {useDebounce} from "../../../hooks/useDebounce.js";
import {searchStudent, searchPlace} from "../../../api/search.js";
import DateInput from "../../dateInput/index.jsx";
import useAuth from "../../../zustand/auth.js";

export default function Write({ students, period, setIsModal ,isPatch, data}){
    const [time, setTime] = useState(isPatch ? period : "시간");
    const [place, setPlace] = useState( isPatch ? data?.place : "장소");
    const [isOpen, setIsOpen] = useState([false, false]);
    const [cause, setCause] = useState(isPatch ? data?.cause : "");
    const [search, setSearch] = useState("");
    const t = ["7교시", "8~9교시", "10~11교시", "8~11교시", "7~11교시"];

    const [student, setStudent] = useState([]);

    const [selectStudent, setSelectStudent] = useState(isPatch ? students.map((stu) => {return {number : stu.number, name : stu.name, id: stu.id}}) : []);
    const [selectStudentShow, setSelectStudentShow] = useState(isPatch ? students.map((stu) => stu.id) : []);
    const {mutate : postMovement} = usePostMovement();
    const { day, recordDay, setDay : setDayComponent} = useDay();
    const debounceStudent = useDebounce(search, 150);
    const {id, name} = useAuth();

    useEffect(() => {
        const fetchStudents = async () => {
            const students = await searchStudent(search);
            setStudent(students);
        };
        fetchStudents();
    }, [debounceStudent]);

    const {mutate : patchMovement} = usePatchMovement();
    if(isPatch){
        return data && (
            <S.WriteContainer onClick={(e)=>e.stopPropagation()}>
                <>
                    <h1>이석작성</h1>
                    <>
                        {isOpen.some((status) => status === true) ?
                            <S.Black onClick={()=>setIsOpen([false, false])}/> : null
                        }
                        <div onClick={()=>alert('해당 사항은 수정하실 수 없습니다.')}>
                            <DateInput />
                        </div>

                        <S.Place>
                            <div onClick={(e)=> {
                                alert('해당 사항은 수정하실 수 없습니다.')
                                e.preventDefault();
                            }}>
                                <Dropdown
                                    name={time}
                                    item={t}
                                    change={undefined}
                                    isOpen={isOpen[0]}
                                    click={undefined}
                                />
                            </div>
                            <div onClick={(e)=> {
                                alert('해당 사항은 수정하실 수 없습니다.')
                                e.preventDefault();
                            }}>
                            <SearchDropdown
                                target={"장소"}
                                name={place.name || place}
                                axios={(event)=>searchPlace(event)}
                                change={undefined}
                                isOpen={isOpen[1]}
                                click={undefined}
                            />
                            </div>
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
                                    return(
                                        <S.Student
                                            key={idx}
                                            onClick={() =>{
                                                console.log(selectStudentShow)
                                                setSelectStudentShow(
                                                    selectStudentShow.filter(
                                                        (currentItem) => {
                                                            console.log(currentItem, item)
                                                            return currentItem !== item.id
                                                        }
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
                                    patchMovement({ selectStudentShow, day, time, place, cause, recordDay,teacher_id : id, teacher_name : name,  set : setIsModal(false) })
                                    setDayComponent(recordDay);
                                }}
                            />
                        </S.Submit>
                    </>
                </>
            </S.WriteContainer>
        )
    }
    else return (
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
                                        postMovement({ selectStudentShow, day, time, place, cause, recordDay,teacher_id : id, teacher_name : name, selectStudent,  set : setIsModal(false) })
                                        setDayComponent(recordDay);
                                    }}
                                />
                            </S.Submit>
                        </>
                </>
        </S.WriteContainer>
    )
}
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
import {Organization} from './data.js'

export default function Write({ isWriter, students, period, setIsModal ,isPatch, data}){
    const [time, setTime] = useState(isPatch ? period : "시간");
    const [place, setPlace] = useState( isPatch ? data?.place : "장소");
    const [isOpen, setIsOpen] = useState([false, false]);
    const [cause, setCause] = useState(isPatch ? data?.cause : "");
    const [search, setSearch] = useState("");
    const t = ["7교시", "8~9교시", "10~11교시", "8~11교시", "7~11교시"];

    const [student, setStudent] = useState([]);

    const [isEnter, setIsEnter] = useState(false);
    const [selectStudent, setSelectStudent] = useState(isPatch ? students.map((stu) => {return {number : stu.number, name : stu.name, id: stu.id}}) : []);
    const [selectStudentShow, setSelectStudentShow] = useState(isPatch ? students.map((stu) => stu.id) : []);
    const {mutate : postMovement} = usePostMovement();
    const { day, recordDay, setDay : setDayComponent, setRecordDay} = useDay();
    const debounceStudent = useDebounce(search, 150);
    const [isLoading, setIsLoading] = useState(false);
    const {id, name} = useAuth();

    useEffect(() => {
        const fetchStudents = async () => {
            setIsLoading(true)
            const students = await searchStudent(search);
            setStudent(students);
            setIsLoading(false);
        };
        fetchStudents();
    }, [debounceStudent]);

    const {mutate : patchMovement} = usePatchMovement();
    const [isOrganization, setIsOrganization] = useState(false);
    const [selectOrganization, setSelectOrganization]= useState([]);
    const enterStudent = (e) =>{
        if (e.key === "Enter") {
            e.preventDefault();
            if(isLoading) return;
            if(selectStudentShow.includes(student[0].id)) return;
            if(isEnter) return;
            setIsEnter(true);
            setSelectStudentShow((prev) => [...prev, student[0].id]);
            setSelectStudent((prev) => [...prev, student[0]]);
            setTimeout(() => {
                setSearch("");
                setIsEnter(false)
            }, 100);
        }
    }
    const enterOrganization = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if(isEnter || !search || isLoading ) return;

            setIsEnter(true);
            for (const currentItem of Organization) {
                const isAlreadySelected = selectOrganization.map(item => item.name).includes(currentItem.name);
                const isMatchSearch = currentItem.name.includes(search);

                if (!isAlreadySelected && isMatchSearch) {
                    setSelectOrganization((prev) => [...prev, currentItem]);
                    break;
                }
            }
            setTimeout(() => {
                setSearch("");
                setIsEnter(false)
            }, 100);
        }
    }
    if(isPatch){
        return data && (
            <S.WriteContainer>
                <>
                    <h1>이석작성</h1>
                    <>
                        {isOpen.some((status) => status === true) ?
                            <S.Black onClick={()=>setIsOpen([false, false])}/> : null
                        }
                        <div onClick={()=>alert('해당 사항은 수정하실 수 없습니다.')}>
                            <DateInput  onChange = {setRecordDay} />
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
                                placeholder={"학번이나 이름을 입력하고 엔터를 눌러주세요"}
                                onKeyDown={(e) => enterStudent(e)}
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
                                                        (currentItem) => {
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
                                    patchMovement({ selectStudentShow, day : recordDay, time, place, cause, recordDay,teacher_id : isWriter, teacher_name : name,  set : setIsModal(false) })
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
        <S.WriteContainer>
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
                            <>
                                <S.ToggleContainer
                                    onClick={()=>setIsOrganization(!isOrganization)}
                                >
                                    <div className={`toggle-container ${isOrganization ? "toggle--checked" : null}`}/>
                                    <div className={`toggle-circle ${isOrganization ? "toggle--checked" : null}`}/>
                                    <p style={{ userSelect: 'none' }}>단체로 이동 시 눌러주세요(단체, 개인 동시에 가능해요)</p>
                                </S.ToggleContainer>

                            </>
                            {!isOrganization ?
                                <S.InputBox>
                                    <img src={Search} alt={"검색아이콘"} width={20} />
                                    <S.Input
                                        type={"text"}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder={"학번이나 이름을 입력하고 엔터를 눌러주세요"}
                                        onKeyDown={(e) => enterStudent(e) }
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
                                </S.InputBox> :
                                <S.Organization>
                                    <img src={Search} alt={"검색아이콘"} width={20} />
                                    <S.Input
                                        type={"text"}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder={"학년/반이나 전공동아리를 입력해주세요"}
                                        onKeyDown={(e) =>enterOrganization(e)}
                                    />
                                    <S.StudentList>
                                        {search &&
                                            Organization.map((currentItem) => {
                                                if (
                                                    selectOrganization.map(item=>item.name).includes(currentItem.name) ||
                                                    !currentItem.name.includes(search)
                                                ) {
                                                    return null;
                                                }
                                                else {
                                                    return (
                                                        <S.StudentItem
                                                            onClick={() => {
                                                                setSelectOrganization((prev) => [...prev, currentItem]);
                                                                setSearch("");
                                                            }}
                                                            key={currentItem.id}
                                                            value={currentItem}
                                                        >
                                                            {currentItem.name}
                                                        </S.StudentItem>
                                                    );
                                                }
                                            })
                                        }
                                    </S.StudentList>
                                </S.Organization>
                            }
                                <S.StudentBox>
                                    {!isOrganization ?
                                        selectStudent && selectStudent.map((item, idx) => {
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
                                                        <span>{item.number}</span><span>{item.name}</span>
                                                    </S.Student>
                                                )
                                            })
                                        : selectOrganization && selectOrganization.map((item, idx)=>{
                                            return(
                                                <S.Student
                                                    key={idx}
                                                    onClick={() =>{
                                                        setSelectOrganization(
                                                            selectOrganization.filter(
                                                                (currentItem) => currentItem.id !== item.id
                                                            )
                                                        )
                                                    }}
                                                >
                                                    <span>{item.name}</span>
                                                </S.Student>
                                            )
                                    })


                                    }
                                </S.StudentBox>



                            <S.Submit>
                                <SquareBtn name={"취소"} status={false} On={() => setIsModal(false)} />
                                <SquareBtn
                                    name={"작성완료"}
                                    status={true}
                                    On={() => {
                                        postMovement({ selectStudentShow, selectOrganization , day, time, place, cause, recordDay,teacher_id : id, teacher_name : name, selectStudent,  set : setIsModal(false) })
                                        setDayComponent(recordDay);
                                    }}
                                />
                            </S.Submit>
                        </>
                </>
        </S.WriteContainer>
    )
}
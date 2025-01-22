import * as S from './style.jsx';
import CircleBtn from "../../button/circle";
import { useState } from "react";
import Dropdown from "../../dropdown/nosearch";
import SquareBtn from "../../button/square";
import Search from '../../../assets/Search.svg'
import SearchDropdown from '../../dropdown/search';
import {usePostMovement} from '../../../hooks/useData.js';
import useDay from "../../../zustand/day.js";
import SchoolOut from "../confirm/schoolOut/index.jsx";

export default function Write({setIsModal}){
    const [time, setTime] = useState("시간");
    const [place, setPlace] = useState("장소");
    const [floor, setFloor] = useState("층");
    const [isMovement, setIsMovement] = useState([
        true, false
    ]);
    const [isOpen, setIsOpen] = useState([
        false, false, false
        ]);
    const [cause, setCause] = useState("");
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("학생");
    const changeMovement = (idx) => {
        const newMovement = [false, false];
        newMovement[idx] = !newMovement[idx];
        setIsMovement(newMovement);
    }
    const t = ["7교시", "8~9교시", "10~11교시"];
    const f = ["1층", "2층", "3층", "4층"];
    const p = (floor)=>{
        switch(floor){
            case "1층":
                return ["창의디자인실", "과학실", "프로그래밍실2", "인공지능개발실", "1-1", "1-2", "1-3", "1-4","데이터 네트워크실", "소프트웨어 공학실", "모바일웹 개발실"];
            case "2층":
                return ["IOT 자동제어실", "마이크로 프로세서실", "임베디드 시스템실", "공간 - AriSori", "프로그래밍실1", "객체지향프로그래밍실", "위클래스실", "2-1", "2-2", "2-3", "2-4", "글가람", "글누리"];
            case "3층":
                return ["베르실1", "베르실2", "베르실3", "베르실5", "베르실6", "창의공작실", "모둠학습실", "영어교과실", "3-1", "3-2", "3-3", "3-4", "진로활동실"];
            case "4층":
                return ["베르실7", "베르실8", "베르실9"];
            default:
                return [""];
        }
    }
    // 임시 데이터
    const student = [
        "1410 윤도훈",
        "1411 김현준",
        "1412 김현준",
        "1413 김현준",
        "1414 김현준",
        "1415 김현준",
        "1416 김현준",
    ]

    const [selectStudent, setSelectStudent] = useState([]);
    const {mutate : postMovement} = usePostMovement();
    const {day} = useDay();

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
                            <S.Place>
                                <Dropdown
                                    name={time}
                                    item={t}
                                    change={(event) => setTime(event)}
                                    isOpen={isOpen[0]}
                                    click={() => setIsOpen([!isOpen[0], false, false])}
                                />
                                <Dropdown
                                    name={floor}
                                    item={f}
                                    change={(event) => setFloor(event)}
                                    isOpen={isOpen[1]}
                                    click={() => setIsOpen([false, !isOpen[1], false])}
                                />
                                <Dropdown
                                    name={place}
                                    item={p(floor)}
                                    change={(event) => setPlace(event)}
                                    isOpen={isOpen[2]}
                                    click={() => setIsOpen([false, false, !isOpen[2]])}
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
                                    {search
                                        ? student.map((currentItem, index) => {
                                            if (
                                                currentItem.indexOf(search) > -1 &&
                                                !selectStudent.includes(currentItem)
                                            ) {
                                                return (
                                                    <S.StudentItem
                                                        onClick={() => {
                                                            setSelectStudent((prev) => [...prev, currentItem]);
                                                            setSearch("");
                                                        }}
                                                        key={index}
                                                        value={currentItem}
                                                    >
                                                        {currentItem}
                                                    </S.StudentItem>
                                                );
                                            }
                                            return null;
                                        })
                                        : null}
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
                            <SearchDropdown
                                name={search2}
                                isOpen={isOpen[0]}
                                item={student}
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
import * as S from './style.jsx'
import { useState } from "react";
import DetailMovement from "../../modal/detail-movement/index.jsx";
import {useDeleteMovement, useGetMovement} from "../../../hooks/useData.js";
import useAuth from "../../../zustand/auth.js"
import {getMovementDetail} from "../../../api/data.js";
import patchDay from "../../../utils/patchDay.js";
import Loading from "../../loading/index.jsx";
import Write from "../../modal/write/index.jsx";
import useDay from "../../../zustand/day.js";

export default function Movement({ isPeriod, day , isFirst}) {
    const { data, isFetching, isError: movementError } = useGetMovement(isFirst ? patchDay(day) : day);
    const [isModal, setIsModal] = useState(false);
    const {mutate : deleteMovement} = useDeleteMovement();
    const {name, role} = useAuth();
    const getDetail = async (day, teacher_id, periodName, place) =>{
        const res = await getMovementDetail(day, teacher_id, periodName, place);
        setDetail(res.data);
    }
    const {setDay :setDayComponent, recordDay} = useDay();
    const [detail , setDetail] = useState();
    const [isModal2, setIsModal2] = useState(false);
    const [period, setPeriod] = useState();
    const [students, setStudents] = useState();
    const [isWriter, setIsWriter] = useState("");
    return (
        <S.MovementContainer>
            {isFetching ? <Loading /> : null}
            <S.Standard>
                <S.UnBox></S.UnBox>
                <S.Box $length={110}>교시</S.Box>
                <S.Box $length={130}>담당교사</S.Box>
                <S.Box $length={110}>인원</S.Box>
                <S.Box $length={200}>장소</S.Box>
                <S.Box $length={240}>학생</S.Box>
            </S.Standard>
            <S.ContentBox>
                {data&& data.length === 0 ? <S.NoData>데이터가 없습니다</S.NoData> : null}
                {data && data.map((item) => {
                    if(isPeriod.includes(item.period) || isPeriod.length === 0){
                        return(
                            <>
                                <S.Content key={item} onClick={()=>{
                                    getDetail((day), item.teacher_id, item.period, item.place)
                                    setIsModal(!isModal);
                                }}>
                                    <S.UnBox></S.UnBox>
                                    <S.Box2 $length={110}>{item.period}</S.Box2>
                                    <S.Box2 $length={130}>{item.teacher_name}</S.Box2>
                                    <S.Box2 $length={110}>{item.personnel}명</S.Box2>
                                    <S.Box2 $length={200}>{item.place}</S.Box2>
                                    <S.Box2 $length={290}>{item.students
                                        .slice(0,5)
                                        .map((student, idx) =>`${student.number} ${student.name}`)
                                        .join(", ")} {item.students.length > 3 ? '...' : ''}</S.Box2>

                                    {name === item.teacher_name || role === "ADMIN" ?
                                        <>
                                            <S.PatchBox
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsModal2(true)
                                                    getDetail((day), item.teacher_id, item.period, item.place)
                                                    setDayComponent(recordDay)
                                                    setPeriod(item.period)
                                                    setStudents(item.students)
                                                    setIsWriter(item.teacher_id)
                                                }}
                                            >수정</S.PatchBox>
                                            <S.DeleteBox
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if(window.confirm('정말 삭제하시겠습니까?')){
                                                        deleteMovement({teacher_id : item.teacher_id, day, periodName : item.period, place: item.place});
                                                    }
                                                }}
                                            >삭제</S.DeleteBox>
                                        </>
                                        : <>
                                         <S.PatchBox
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsModal2(true)
                                                    getDetail((day), item.teacher_id, item.period, item.place)
                                                    setDayComponent(recordDay)
                                                    setPeriod(item.period)
                                                    setStudents(item.students)
                                                    setIsWriter(item.teacher_id)
                                                }}
                                            >수정</S.PatchBox>
                                        </>
                                    }
                                </S.Content>
                            </>
                        )
                    }
                })}
                {isModal ?<DetailMovement data={detail} setIsModal={setIsModal} /> : null}
                {isModal2 && detail?
                    <S.Black onClick={()=> {
                        setDayComponent(recordDay);
                        setIsModal2(false)
                    }}>
                        <Write isWriter={isWriter} students = {students} period = {period} data={detail} isPatch = {true} isModal={isModal2} setIsModal={setIsModal2}/>
                    </S.Black>
                    :
                    null
                }
            </S.ContentBox>
        </S.MovementContainer>
    )
}
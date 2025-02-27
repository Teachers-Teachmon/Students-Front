import * as S from './style.jsx'
import { useState } from "react";
import DetailMovement from "../../modal/detail-movement/index.jsx";
import {useDeleteMovement, useGetMovement} from "../../../hooks/useData.js";
import useAuth from "../../../zustand/auth.js"
import {getMovementDetail} from "../../../api/data.js";
import patchDay from "../../../utils/patchDay.js";
import Loading from "../../loading/index.jsx";

export default function Movement({ day , isFirst}) {
    const { data, isFetching, isError: movementError } = useGetMovement(isFirst ? patchDay(day) : day);
    const [isModal, setIsModal] = useState(false);
    const {mutate : deleteMovement} = useDeleteMovement();
    const {name, role} = useAuth();
    const getDetail = async (day, teacher_id, periodName, place) =>{
        const res = await getMovementDetail(day, teacher_id, periodName, place);
        setDetail(res.data);
        setIsModal(!isModal);
    }
    const [detail , setDetail] = useState();
    return (
        <S.MovementContainer>
            {isFetching ? <Loading /> : null}
            <S.Standard>
                <S.UnBox></S.UnBox>
                <S.Box $length={110}>교시</S.Box>
                <S.Box $length={130}>담당교사</S.Box>
                <S.Box $length={110}>인원</S.Box>
                <S.Box $length={200}>장소</S.Box>
                <S.Box $length={240}>사유</S.Box>
            </S.Standard>
            <S.ContentBox>
                {data&& data.length === 0 ? <S.NoData>데이터가 없습니다</S.NoData> : null}
                {data && data.map((item) => {
                    return(
                        <>
                            <S.Content key={item} onClick={()=>getDetail((day), item.teacher_id, item.period, item.place)}>
                                <S.UnBox></S.UnBox>
                                <S.Box2 $length={110}>{item.period}</S.Box2>
                                <S.Box2 $length={130}>{item.teacher_name}</S.Box2>
                                <S.Box2 $length={110}>{item.personnel}명</S.Box2>
                                <S.Box2 $length={200}>{item.place}</S.Box2>
                                <S.Box2 $length={290}>{item.cause.slice(0, 20)}{item.cause.length > 20 ? '...' : ''}</S.Box2>

                                {name === item.teacher_name || role === "ADMIN" ?
                                    <S.DeleteBox
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if(window.confirm('정말 삭제하시겠습니까?')){
                                                deleteMovement({teacher_id : item.teacher_id, day, periodName : item.period, place: item.place});
                                            }
                                        }}
                                    >삭제</S.DeleteBox>  : null
                                }
                            </S.Content>
                            {isModal ?<DetailMovement data={detail} setIsModal={setIsModal} /> : null}
                        </>
                    )
                })}
            </S.ContentBox>
        </S.MovementContainer>
    )
}
import * as S from './style.jsx'
import { useState } from "react";
import DetailMovement from "../../modal/detail-movement/index.jsx";
import {useDeleteMovement} from "../../../hooks/useData.js";
import useAuth from "../../../zustand/auth.js"

export default function Movement({data}) {
    const [isModal, setIsModal] = useState(false);
    const {mutate : deleteMovement} = useDeleteMovement();
    const {name, role} = useAuth();
    return (
        <S.MovementContainer>
            <S.Standard>
                <S.UnBox></S.UnBox>
                <S.Box $length={110}>교시</S.Box>
                <S.Box $length={110}>담당교사</S.Box>
                <S.Box $length={110}>인원</S.Box>
                <S.Box $length={200}>장소</S.Box>
                <S.Box $length={240}>사유</S.Box>
            </S.Standard>
            {data && data.map((item, index) => {
                return(
                    <>
                        <S.Content onClick={()=>setIsModal(!isModal)}>
                            <S.UnBox></S.UnBox>
                            <S.Box2 $length={110}>{item.period}</S.Box2>
                            <S.Box2 $length={110}>{item.teacher_name}</S.Box2>
                            <S.Box2 $length={110}>{item.students.length}명</S.Box2>
                            <S.Box2 $length={200}>{item.place}</S.Box2>
                            <S.Box2 $length={240}>{item.cause}</S.Box2>

                            {name === item.teacher_name || role === "admin" ?
                                <S.DeleteBox
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if(window.confirm('정말 삭제하시겠습니까?')) deleteMovement(item);
                                    }}
                                >삭제</S.DeleteBox>  : null
                            }
                        </S.Content>
                        {isModal ?<DetailMovement data={item} setIsModal={setIsModal} /> : null}
                    </>
                )
            })}

        </S.MovementContainer>
    )
}
import * as S from './style.jsx'
import { useState } from "react";
import DetailMovement from "../../modal/detail-movement/index.jsx";

export default function Movement({data}) {
    const [isModal, setIsModal] = useState(false);
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
            {data.map((item, index) => {
                return(
                    <S.Content onClick={()=>setIsModal(!isModal)}>
                        <S.UnBox></S.UnBox>
                        <S.Box2 $length={110}>8~9교시</S.Box2>
                        <S.Box2 $length={110}>이정하</S.Box2>
                        <S.Box2 $length={110}>7명</S.Box2>
                        <S.Box2 $length={200}>객체지향프로그래밍실</S.Box2>
                        <S.Box2 $length={240}>전공동아리</S.Box2>
                        {/*자신이 쓴 이석기록이라면 삭제해야함*/}
                        <S.DeleteBox onClick={()=>console.log(1)}>삭제</S.DeleteBox>
                    </S.Content>
                )
            })}
            {isModal ?<DetailMovement setIsModal={setIsModal} /> : null}
        </S.MovementContainer>
    )
}
import * as S from './style.jsx'
import {useDeleteLeave} from "../../../hooks/useData.js";

export default function Leave({data}) {
    const {mutate : deleteLeave} = useDeleteLeave()
    return (
        <S.LeaveContainer>
            <S.Standard>
                <S.UnBox></S.UnBox>
                <S.Box $length={110}>학번/이름</S.Box>
                <S.Box $length={110}>시간</S.Box>
                <S.Box $length={110}>처리 선생님</S.Box>
            </S.Standard>
            {/* map 함수 사용하기*/}
            {data.map((item, index)=>{
                return(
                    <S.Content key={index}>
                        <S.UnBox></S.UnBox>
                        <S.Box2 $length={110}>{item.name}</S.Box2>
                        <S.Box2 $length={110}>{item.period}교시</S.Box2>
                        <S.Box2 $length={110}>{item.teacher_name}</S.Box2>
                        <S.DeleteBox onClick={()=>{
                            if(window.confirm('정말 삭제하시겠습니까?')) deleteLeave({ day: item.day, teacher_name: item.teacher_name });
                        }}>삭제</S.DeleteBox>
                    </S.Content>
                )
            })}

        </S.LeaveContainer>
    )
}
import * as S from './style.jsx'
import {useDeleteLeave} from "../../../hooks/useData.js";
import useAuth from "../../../zustand/auth.js";

export default function Leave({data}) {
    const {mutate : deleteLeave} = useDeleteLeave()
    const {name, role} = useAuth();
    return (
        <S.LeaveContainer>
            <S.Standard>
                <S.UnBox></S.UnBox>
                <S.Box $length={110}>학번/이름</S.Box>
                <S.Box $length={110}>시간</S.Box>
                <S.Box $length={110}>처리 선생님</S.Box>
            </S.Standard>
            {data&& data.length === 0 ? <S.NoData>데이터가 없습니다</S.NoData> : null}
            {data && data.map((item)=>{
                return(
                    <S.Content key={item.leave_id}>
                        <S.UnBox></S.UnBox>
                        <S.Box2 $length={110}>{item.student}</S.Box2>
                        <S.Box2 $length={110}>{item.period}</S.Box2>
                        <S.Box2 $length={110}>{item.teacher_name}</S.Box2>
                        {name === item.teacher_name || role === "admin" ?
                            <S.DeleteBox onClick={()=>{
                                if(window.confirm('정말 삭제하시겠습니까?')) deleteLeave(item.leave_id);
                            }}>삭제</S.DeleteBox> : null
                        }
                    </S.Content>
                )
            })}

        </S.LeaveContainer>
    )
}
import * as S from './style.jsx'

export default function Leave({data}) {
    return (
        <S.LeaveContainer>
            <S.Standard>
                <S.UnBox></S.UnBox>
                <S.Box $length={110}>학번/이름</S.Box>
                <S.Box $length={110}>시간</S.Box>
                <S.Box $length={110}>처리 선생님</S.Box>
            </S.Standard>
            {/* map 함수 사용하기*/}
            <S.Content>
                <S.UnBox></S.UnBox>
                <S.Box2 $length={110}>1410 윤도훈</S.Box2>
                <S.Box2 $length={110}>8~9교시</S.Box2>
                <S.Box2 $length={110}>이정하</S.Box2>
                <S.DeleteBox onClick={()=>console.log(1)}>삭제</S.DeleteBox>
            </S.Content>
        </S.LeaveContainer>
    )
}
import * as S from './style.jsx'
import X from '../../../assets/X.svg'
import People from '../../../assets/User.svg'

export default function DetailMovement({setIsModal, data}) {
    return (
        <S.Black onClick={()=>setIsModal(false)}>
            <S.Content  onClick={(e) => e.stopPropagation()}>
                <S.Title>
                    <h1>data.place</h1>
                    <img src={X} alt={"엑스"} onClick={()=>setIsModal(false)}/>
                </S.Title>
                <S.Box>
                    <S.BlueText>담당교사</S.BlueText>
                    <S.Teacher>
                        <img src={People} alt={"people"} width={28}/>
                        <S.Name>이정하</S.Name>
                    </S.Teacher>
                </S.Box>
                <S.Box>
                    <S.BlueText>사유</S.BlueText>
                    <S.Reason>data.reason</S.Reason>
                </S.Box>
                <S.Box>
                    <S.BlueText>학생 data.length 명</S.BlueText>
                    <S.Students>
                        {/* map 함수 사용하기*/}
                        <S.Teacher>
                            <img src={People} alt={"people"} width={28}/>
                            <S.Name>1410 윤도훈</S.Name>
                        </S.Teacher>
                    </S.Students>
                </S.Box>
            </S.Content>
        </S.Black>
    )
}
import * as S from './style.jsx'
import X from '../../../assets/X.svg'
import People from '../../../assets/User.svg'

export default function DetailMovement({setIsModal, data}) {
    console.log(data)
    return (
        <S.Black onClick={()=>setIsModal(false)}>
            <S.Content  onClick={(e) => e.stopPropagation()}>
                <S.Title>
                    <h1>{data.place}</h1>
                    <img src={X} alt={"엑스"} onClick={()=>setIsModal(false)}/>
                </S.Title>
                <S.Box>
                    <S.BlueText>담당교사</S.BlueText>
                    <S.Teacher>
                        <img src={People} alt={"people"} width={28}/>
                        <S.Name>{data.teacher_name}</S.Name>
                    </S.Teacher>
                </S.Box>
                <S.Box>
                    <S.BlueText>사유</S.BlueText>
                    <S.Reason>{data.cause}</S.Reason>
                </S.Box>
                <S.Box>
                    <S.BlueText>학생 {data.students.length}명</S.BlueText>
                    <S.Students>
                        {data.students.map((item, index) => {
                            console.log(item)
                           return (
                               <S.Teacher key={index}>
                                   <img src={People} alt={"people"} width={28}/>
                                   <S.Name>{item.id + " " + item.name}</S.Name>
                               </S.Teacher>
                           )
                        })}
                    </S.Students>
                </S.Box>
            </S.Content>
        </S.Black>
    )
}
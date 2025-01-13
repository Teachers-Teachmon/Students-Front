import * as S from './style.jsx'

export default function Circle({name, On, status}){
    return(
        <S.CircleContainer onClick={On} $status = {status}>
            <S.Name>{name}</S.Name>
        </S.CircleContainer>
    )
}
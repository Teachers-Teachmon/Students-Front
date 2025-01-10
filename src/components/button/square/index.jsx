import * as S from './style.jsx'

export default function SquareBtn({name, On, status}){
    return(
        <S.SquareContainer onClick={On} status = {status}>
            <S.Name>{name}</S.Name>
        </S.SquareContainer>
    )
}
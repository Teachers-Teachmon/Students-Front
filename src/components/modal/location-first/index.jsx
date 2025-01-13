import * as S from './style.jsx'
import X from '../../../assets/X.svg';

export default function First({set}) {
    return (
        <S.Black onClick={()=>set(false)}>
            <S.Content  onClick={(e) => e.stopPropagation()}>
                <S.XIcon onClick={()=>set(false)} src={X} alt={"xicon"}></S.XIcon>
                <S.Table>
                    <S.Th>층</S.Th>
                    <S.Th>자습</S.Th>
                    <S.Th>이석</S.Th>
                    <S.Th>1층</S.Th>
                    <S.Th>x</S.Th>
                    <S.Th>X</S.Th>
                    <S.Th $color = {"#2E6FF2"}>2층</S.Th>
                    <S.Th>ssss</S.Th>
                    <S.Th>X</S.Th>
                    <S.Th $color = {"#2E6FF2"}>3층</S.Th>
                    <S.Th>ssss</S.Th>
                    <S.Th>X</S.Th>
                    <S.Th>4층</S.Th>
                    <S.Th>X</S.Th>
                    <S.Th>X</S.Th>
                </S.Table>
            </S.Content>
        </S.Black>
    )
}
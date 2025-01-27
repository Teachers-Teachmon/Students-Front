import * as S from './style.jsx'
import X from '../../../assets/X.svg';

export default function First({set, data}) {
    let Floor = [[0, 0], [0, 0], [0, 0], [0, 0]];
    if(data){
        data['1층'].map((item)=>{
            item.status === "자습" ? Floor[0][0]+=1 : Floor[0][1]+=1;
        });
        data['2층'].map((item)=>{
            item.status === "자습" ? Floor[1][0]+=1 : Floor[1][1]+=1;
        });
        data['3층'].map((item)=>{
            item.status === "자습" ? Floor[2][0]+=1 : Floor[2][1]+=1;
        });
        data['4층'].map((item)=>{
            item.status === "자습" ? Floor[3][0]+=1 : Floor[3][1]+=1;
        });
    }
    return (
        <S.Black onClick={()=>set(false)}>
            <S.Content  onClick={(e) => e.stopPropagation()}>
                <S.XIcon onClick={()=>set(false)} src={X} alt={"xicon"}></S.XIcon>
                <S.Table>
                    <S.Th>층</S.Th>
                    <S.Th>자습</S.Th>
                    <S.Th>이석</S.Th>
                    {Floor.map((item, index) => {
                        return(
                            <>
                                <S.Th $color = {item[0]||item[1] ? "#2E6FF2" : null}>{index+1}층</S.Th>
                                <S.Th>{item[0] ? item[0] : 'X'}</S.Th>
                                <S.Th>{item[1] ? item[1] : 'X'}</S.Th>
                            </>
                        )
                    })}
                </S.Table>
            </S.Content>
        </S.Black>
    )
}
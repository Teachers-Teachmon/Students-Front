import * as S from './style.jsx'
import X from '../../../assets/X.svg';

export default function First({set, data}) {
    let Floor = [[0, 0], [0, 0], [0, 0], [0, 0]];
    if(data){
        data.map((item, idx)=>{
            Object.values(item).map((value)=>{
                value === "자습" ? Floor[idx][0]+=1 : Floor[idx][1]+=1;
            })
        })
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
                            <div key={index}>
                                <S.Th $color = {item[0]||item[1] ? "#2E6FF2" : null}>{index+1}층</S.Th>
                                <S.Th>{item[0] ? item[0] : 'X'}</S.Th>
                                <S.Th>{item[1] ? item[1] : 'X'}</S.Th>
                            </div>
                        )
                    })}
                </S.Table>
            </S.Content>
        </S.Black>
    )
}
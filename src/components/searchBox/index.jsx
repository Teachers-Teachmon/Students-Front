import * as S from './style.jsx';
import Search from "../../assets/Search.svg";

export default function SearchBox({target, change, value}) {
    return (
        <S.InputBox>
            <img src={Search} alt={"검색아이콘"} width={20}></img>
            <S.Input value={value} onChange={(e)=>change(e.target.value)} type={"text"} placeholder={`${target}을 입력해주세요`} />
        </S.InputBox>
    )
}
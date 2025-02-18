import * as S from './style.jsx';
import Search from "../../assets/Search.svg";
// target = placeholder 대상 예 : 선생님, 학생
// change = 검색값을 바꾸는 함수 예 : setSearch
// value = 검색값
export default function SearchBox({target, change, value, up}) {
    return (
        <S.InputBox $up = {up}>
            <img src={Search} alt={"검색아이콘"} width={20}></img>
            <S.Input value={value} onChange={(e)=>change(e.target.value)} type={"text"} placeholder={`${target}을 입력해주세요`} />
        </S.InputBox>
    )
}
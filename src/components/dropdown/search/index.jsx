import * as S from './style.jsx'
import Down from '../../../assets/down.svg'
import {useEffect, useRef, useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce.js";

// target = 학생인지 선생님인지 구별
// name = 선택되어있는 요소
// axios = 디바운스를 이용하여 검색해올 axios문
// change = 선택된 요소로 name 을 바꾸는 함수
// isOpen = 메뉴를 보이게할지
// click = 드랍다운을 했다가 다시 누르면 닫히게 하는 함수
// 예 : <SearchDropdown name={search2} isOpen={isOpen[0]} item={student} change={(event) => setSearch2(event)} click={() => setIsOpen([!isOpen[0]])} />

export default function SearchDropdown({target, name, change, click, isOpen, axios}) {
    const [search, setSearch] = useState("");
    const debounce = useDebounce(search, 500);

    const [item, setItem] = useState([]);
    useEffect(() => {
        setSearch("");
    }, [isOpen]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios(search);
            setItem(data);
        }
        fetchData();
    }, [debounce]);
    const inputRef = useRef();

    console.log(item);
    return (
        <S.DropdownContainer onClick={() => {
            click();
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }}>
            <p>{name}</p>
            <img src={Down} alt={"down"}></img>
            {isOpen ?
                <S.DropdownMenu >
                    <S.Input
                        ref={inputRef}
                        onClick={(e) => e.stopPropagation()}
                        type={"text"}
                        value={search}
                        placeholder={`${target}을 입력해주세요`}
                        onChange={(e) => setSearch(e.target.value)}
                    ></S.Input>
                    {item.map((currentItem, index) => {
                        return (
                            <S.DropdownItem
                                onClick={() => {
                                    change(currentItem)
                                }}
                                key={index}
                                value={currentItem}
                            >{currentItem}
                            </S.DropdownItem>
                        );
                    })}
                </S.DropdownMenu>
                : null}
        </S.DropdownContainer>
    )
}


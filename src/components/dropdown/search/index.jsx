import * as S from './style.jsx'
import Down from '../../../assets/down.svg'
import {useState, useRef} from "react";

// name = 선택되어있는 요소
// item = 드랍다운했을때 나오는 요소들
// change = 선택된 요소로 name 을 바꾸는 함수
// isOpen = 메뉴를 보이게할지
// click = 드랍다운을 했다가 다시 누르면 닫히게 하는 함수
// 예 : <SearchDropdown name={search2} isOpen={isOpen[0]} item={student} change={(event) => setSearch2(event)} click={() => setIsOpen([!isOpen[0]])} />

export default function SearchDropdown({name, item, change, click, isOpen}) {
    const [value, setValue] = useState('');
    const inputRef = useRef();
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
                        value={value}
                        placeholder={"학생을 입력해주세요"}
                        onChange={(e) => setValue(e.target.value)}
                    ></S.Input>
                    {item.map((currentItem, index) => {
                        if (currentItem.indexOf(value) > -1){
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
                        }
                        return null;
                    })}
                </S.DropdownMenu>
                : null}
        </S.DropdownContainer>
    )
}


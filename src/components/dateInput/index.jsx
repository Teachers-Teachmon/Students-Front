import {useRef, useState} from 'react';
import * as S from './style.jsx';
import useDay from "../../zustand/day";
import {useLocation} from "react-router-dom";

export default function DateInput() {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const {setDay, day, setStart, setEnd} = useDay();
    const params = useLocation();
    const select = useRef(false);

    const handleDateChange = (e) => {
        const inputDate = new Date(e.target.value);
        if (!isNaN(inputDate)) {
            const formattedDate = `${inputDate.getFullYear()}년 ${
                String(inputDate.getMonth() + 1).padStart(2, '0')
            }월 ${
                String(inputDate.getDate()).padStart(2, '0')
            }일`;
            if(params.pathname === "/supervision/detail" && !select.current){
                setStart(e.target.value);
                select.current = true;
            }
            else if(params.pathname === "/supervision/detail" && select.current){
                setEnd(e.target.value);
            }
            else{
                setDay(e.target.value);
            }
            setInputValue(formattedDate);
        }
    };

    return (
        <S.DateInputContainer>
            <S.InputWrapper isFocused={isFocused || inputValue}>
                <S.Label isFocused={isFocused || inputValue}>Date</S.Label>
                <S.StyledInput
                    type="text"
                    value={inputValue}
                    readOnly
                    placeholder=""
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onClick={(e) => e.target.nextSibling.showPicker()}
                />
                <S.HiddenDateInput
                    type="date"
                    value={day}
                    onChange={handleDateChange}
                />
            </S.InputWrapper>
        </S.DateInputContainer>
    );
}

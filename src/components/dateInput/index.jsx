import {useEffect, useState} from 'react';
import * as S from './style.jsx';
import useDay from "../../zustand/day";
import patchDay from "../../utils/patchDay.js";

export default function DateInput({ onChange, isWrite }) {
    const { setDay, setStart, setEnd, day, today, setWriteDay } = useDay();
    const newToday = new Date(patchDay(today));
    const initialDate = `${newToday.getFullYear()}년 ${newToday.getMonth() + 1}월 ${newToday.getDate()}일`;
    const [inputValue, setInputValue] = useState(initialDate);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if(isWrite){
            setWriteDay(patchDay(today))
        }
        else{
            setDay(patchDay(today));
            setStart(patchDay(today));
            setEnd(patchDay(today));
        }
    }, []);

    const handleDateChange = (e) => {
        const inputDate = new Date(e.target.value);
        if (!isNaN(inputDate)) {
            const formattedDate = `${inputDate.getFullYear()}년 ${
                String(inputDate.getMonth() + 1).padStart(2, '0')
            }월 ${
                String(inputDate.getDate()).padStart(2, '0')
            }일`;

            if (onChange) onChange(e.target.value);
            else setDay(e.target.value);
            setInputValue(formattedDate);
        }
    };

    return (
        <S.DateInputContainer>
            <S.InputWrapper $isFocused={isFocused || inputValue}>
                <S.Label $isFocused={isFocused || inputValue}>Date</S.Label>
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
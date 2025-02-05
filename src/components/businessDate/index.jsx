import { useState} from 'react';
import * as S from './style.jsx';
import useDay from "../../zustand/day";

export default function DateInput({ onChange }) {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const { setDay, day } = useDay();


    const handleDateChange = (e) => {
        const inputDate = new Date(e.target.value);
        if (!isNaN(inputDate)) {
            const formattedDate = `${inputDate.getFullYear()}년 ${
                String(inputDate.getMonth() + 1).padStart(2, '0')
            }월 ${
                String(inputDate.getDate()).padStart(2, '0')
            }일`;
            
            setDay(e.target.value);
            setInputValue(formattedDate);
            if (onChange) onChange(e.target.value);
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
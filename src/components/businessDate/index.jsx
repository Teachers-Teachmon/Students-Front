import { useState } from 'react';
import * as S from './style.jsx';

export default function BusinessDate() {
    const [date, setDate] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleDateChange = (e) => {
        const inputDate = new Date(e.target.value);
        if (!isNaN(inputDate)) {
            const formattedDate = `${inputDate.getFullYear()}년 ${
                String(inputDate.getMonth() + 1).padStart(2, '0')
            }월 ${
                String(inputDate.getDate()).padStart(2, '0')
            }일`;

            setDate(e.target.value);
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
                    value={date}
                    onChange={handleDateChange}
                />
            </S.InputWrapper>
        </S.DateInputContainer>
    );
}
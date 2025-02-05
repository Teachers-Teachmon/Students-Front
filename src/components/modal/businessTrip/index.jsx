import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import DateInput from '../../dateInput/index.jsx';
import { useState } from 'react';
import { useBusinessTrip } from '../../../hooks/useAfterSchool.js';

export default function BusinessTrip({ closeModal, selectedClass }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const { mutate: createBusinessTrip } = useBusinessTrip();

    const handleCreate = () => {
        if (!selectedDate) {
            alert("출장 날짜를 입력해주세요.");
            return;
        }

        console.log(selectedDate, selectedClass);
        createBusinessTrip({
            day: selectedDate,
            period: selectedClass.period,
            afterSchoolId: selectedClass.id,
        });

        closeModal();
    };

    return (
        <S.Wrapper>
            <h2>출장 날짜를 입력해주세요</h2>
            <S.MainContent>
                <DateInput onChange={(d) => setSelectedDate(d)} />
            </S.MainContent>
            <S.Buttons>
                <Confirm text="취소" color="red" image="reject" onClick={closeModal} />
                <Confirm text="출장" color="blue" image="fly" onClick={handleCreate} />
            </S.Buttons>
        </S.Wrapper>
    );
}

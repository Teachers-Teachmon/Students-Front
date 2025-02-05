import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import ChangeDate from '../../dateInput/index.jsx';
import { useState } from 'react';
import { useBusinessTripMutation } from '../../../hooks/useBusinessTrip';

export default function BusinessTrip({ closeModal, selectedClass }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const { mutate: createBusinessTrip } = useBusinessTripMutation();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleCreate = () => {
        if (!selectedDate) return;

        const formattedDate = formatDate(selectedDate);

        createBusinessTrip({
            day: formattedDate,
            period: selectedClass.period,
            afterschoolId: selectedClass.afterschoolId,
        });

        closeModal();
    };

    return (
        <S.Wrapper>
            <h2>출장 날짜를 입력해주세요</h2>
            <S.MainContent>
                <ChangeDate onChange={handleDateChange} />
            </S.MainContent>
            <S.Buttons>
                <Confirm text="취소" color="red" image="reject" onClick={closeModal} />
                <Confirm text="출장" color="blue" image="fly" onClick={handleCreate} />
            </S.Buttons>
        </S.Wrapper>
    );
}

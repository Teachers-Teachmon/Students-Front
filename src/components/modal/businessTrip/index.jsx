import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import ChangeDate from '../../businessDate/index.jsx';
import { useState } from 'react';
import { useUpdateChangeRequest } from '../../../hooks/useChange.js';

export default function BusinessTrip({ closeModal, selectedClass }) {

    const { mutate } = useUpdateChangeRequest(closeModal);

    const handleUpdateStatus = (status) => {
        mutate({ id: changeData.changeId, status });
    };

    const [date, setDate] = useState("");

    const formatDate = (inputDate) => {
        const parts = inputDate.split("년 ").join("-").split("월 ").join("-").split("일").join("").trim();
        return parts;
    };

    const handleSubmit = async () => {
        if (!date) {
            alert("날짜를 선택해주세요.");
            return;
        }

        const formattedDate = formatDate(date);
        
        const requestData = {
            day: formattedDate,
            period: selectedClass.period,
            afterschoolId: selectedClass.id
        };

        try {
            await axios.post('/api/business-trip', requestData);
            closeModal();
        } catch (error) {
            console.error("출장 요청 실패:", error);
            alert("출장 요청에 실패했습니다.");
        }
    };

    return (
        <S.Wrapper>
            <h2>출장 날짜를 입력해주세요</h2>
            <S.MainContent>
                <ChangeDate onChange={setDate}/>
            </S.MainContent>
            <S.Buttons>
                <Confirm text="취소" color="red" image="reject" onClick={ closeModal } />
                <Confirm text="출장" color="blue" image="fly" />
            </S.Buttons>
        </S.Wrapper>
    );
}
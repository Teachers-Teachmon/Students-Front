import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import ChangeDate from '../../businessDate/index.jsx';
import { useState } from 'react';
import { useUpdateChangeRequest } from '../../../hooks/useChange.js';

export default function BusinessTrip({ closeModal, selectedClass }) {

    const [date, setDate] = useState(null);

    const handleCreate = async () => {
        if (!date) {
            alert("출장 날짜를 입력하세요!");
            return;
        }

        try {
            await BusinessTrip(selectedClass.id, date);
            alert("출장 요청이 완료되었습니다.");
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
                <Confirm text="출장" color="blue" image="fly" onClick={handleCreate} />
            </S.Buttons>
        </S.Wrapper>
    );
}
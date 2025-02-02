import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import DateInput from '../../dateInput/index.jsx';
import { useAutoAssignment } from '../../../hooks/useSupervision.js';
import useDay from '../../../zustand/day.js';

export default function SupervisionCreate({ closeModal }) {

    const { setStart, setEnd } = useDay();
    const { mutate: autoAssignment } = useAutoAssignment();

    const handleDateChange = (date, type) => {
        if (type === "start") {
            setLocalStart(date);
        } else {
            setLocalEnd(date);
        }
    };

    const handleCreate = () => {
        if (!localStart || !localEnd) {
            alert("시작 날짜와 종료 날짜를 입력하세요!");
            return;
        }

        setStart(localStart);
        setEnd(localEnd);

        autoAssignment({ start: localStart, end: localEnd });
        closeModal();
    };

    return (
        <S.Wrapper>
            <h2>자습 감독 일정을 생성하시겠습니까?</h2>
            <S.MainContent>
                <DateInput onChange={(date) => handleDateChange(date, "start")}/>
                <div>~</div>
                <DateInput onChange={(date) => handleDateChange(date, "end")}/>
            </S.MainContent>
            <S.Buttons>
                <Confirm text="취소" color="red" image="reject" onClick={ closeModal } />
                <Confirm text="생성" color="blue" image="fly" onClick={ handleCreate }/>
            </S.Buttons>
        </S.Wrapper>
    )
}
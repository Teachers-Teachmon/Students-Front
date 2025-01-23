import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import DateInput from '../../dateInput/index.jsx';

export default function SupervisionCreate({ closeModal }) {
    return (
        <S.Wrapper>
            <h2>자습 감독 일정을 생성하시겠습니까?</h2>
            <S.MainContent>
                <DateInput />
                <div>~</div>
                <DateInput />
            </S.MainContent>
            <S.Buttons>
                <Confirm text="취소" color="red" image="reject" onClick={ closeModal } />
                <Confirm text="생성" color="blue" image="fly" />
            </S.Buttons>
        </S.Wrapper>
    )
}
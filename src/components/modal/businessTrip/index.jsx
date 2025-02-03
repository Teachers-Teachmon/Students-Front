import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import ChangeDate from '../../businessDate/index.jsx';

export default function BusinessTrip({ closeModal }) {
    return (
        <S.Wrapper>
            <h2>출장 날짜를 입력해주세요</h2>
            <S.MainContent>
                <ChangeDate />
            </S.MainContent>
            <S.Buttons>
                <Confirm text="취소" color="red" image="reject" onClick={ closeModal } />
                <Confirm text="출장" color="blue" image="fly" />
            </S.Buttons>
        </S.Wrapper>
    );
}
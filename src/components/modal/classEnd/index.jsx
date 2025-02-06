import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import { useDeleteClass } from '../../../hooks/useAfterSchool.js';

export default function BusinessModal({ closeModal, selectedClass }) {

    const {mutate : out} = useDeleteClass()

    return (
        <S.Wrapper>
            <h2>정말로 {selectedClass?.name} 방과후를 종료하시겠습니까?</h2>
            <p>삭제된 방과후는 되돌릴 수 없습니다</p>
            <S.Buttons>
                <Confirm text="거절" color="red" image="reject" onClick={ closeModal } />
                <Confirm text="수락" color="blue" image="check" onClick={()=>out(selectedClass.id)}/>
            </S.Buttons>
        </S.Wrapper>
    );
}
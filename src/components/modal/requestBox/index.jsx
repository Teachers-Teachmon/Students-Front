import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import Rotate from '../../../assets/rotate.svg';

export default function RequestBox({ closeModal }) {

    let leftName = '최병준';
    let leftDay = '11월 27일 (수)';
    let leftPeriod = '10~11교시';
    let leftGrade = 2;
    let rightName = '정유진';
    let rightDay = '11월 27일 (수)';
    let rightPeriod = '7교시';
    let rightGrade = 2;
    let reason = '병준쌤 제가 이날에 이러쿵 저러쿵 해가지고 못하게됐는데 바꿔주실 수 있나요?? ㅠㅠ';

    return (
        <S.Wrapper>
            <h3>정보</h3>
            <S.MainContent>
                <S.ChangeWrap>
                    <S.ChangeSide>
                        <span>{leftDay}</span>
                        <p>{leftPeriod}</p>
                        <p>{leftGrade}학년</p>
                        <p>{leftName} 선생님</p>
                    </S.ChangeSide>
                    <S.RotateIcon src={Rotate} />
                    <S.ChangeSide>
                        <span>{rightDay}</span>
                        <p>{rightPeriod}</p>
                        <p>{rightGrade}학년</p>
                        <p>{rightName} 선생님</p>
                    </S.ChangeSide>
                </S.ChangeWrap>
                <S.Reason>{reason}</S.Reason>
            </S.MainContent>
            <S.Buttons>
                <Confirm text="거절" color="red" image="reject" onClick={closeModal} />
                <Confirm text="수락" color="blue" image="check" />
            </S.Buttons>
        </S.Wrapper>
    )
}
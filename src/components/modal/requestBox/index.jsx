import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import Rotate from '../../../assets/rotate.svg';
import { useUpateChangeRequest } from '../../../hooks/useChange.js';

export default function RequestBox({ closeModal, changeData }) {

    const { mutate } = useUpateChangeRequest();

    const handleUpdateStatus = (status) => {
        mutate({ id: changeData.changeId, status }, {
            onSuccess: () => {
                alert(status === "ACCEPTED" ? "요청을 수락했습니다." : 
                      status === "REJECTED" ? "요청을 거절했습니다." : 
                      "요청을 확인 완료했습니다.");
                closeModal();
            },
            onError: () => {
                alert("요청 처리에 실패했습니다.");
                closeModal();
            }
        });
    };

    return (
        <S.Wrapper>
            <h3>정보</h3>
            <S.MainContent>
                <S.ChangeWrap>
                    <S.ChangeSide>
                        <span>{changeData.sender.day}</span>
                        <p>{changeData.sender.period}</p>
                        <p>{changeData.sender.grade}학년</p>
                        <p>{changeData.sender.teacher.split('/')[0]} 선생님</p>
                    </S.ChangeSide>
                    <S.RotateIcon src={Rotate} />
                    <S.ChangeSide>
                        <span>{changeData.recipient.day}</span>
                        <p>{changeData.recipient.period}</p>
                        <p>{changeData.recipient.grade}학년</p>
                        <p>{changeData.recipient.teacher.split('/')[0]} 선생님</p>
                    </S.ChangeSide>
                </S.ChangeWrap>
                <S.Reason>{changeData.cause}</S.Reason>
            </S.MainContent>
            <S.Buttons>
                {/* 요청 받은 사람이면 ACCEPTED / REJECTED 버튼 */}
                {changeData.toMe ? (
                    <>
                        <Confirm text="거절" color="red" image="reject" onClick={() => handleUpdateStatus("REJECTED")} />
                        <Confirm text="수락" color="blue" image="check" onClick={() => handleUpdateStatus("ACCEPTED")} />
                    </>
                ) : (
                    // 요청 보낸 사람이면 확인 버튼
                    <Confirm text="확인" color="blue" image="check" onClick={() => handleUpdateStatus("COMPLETED")} />
                )}
            </S.Buttons>
        </S.Wrapper>
    )
}
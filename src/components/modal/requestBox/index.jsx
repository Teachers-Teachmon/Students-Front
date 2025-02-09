import * as S from './style.jsx';
import Confirm from "../../button/confirm/index.jsx";
import Rotate from '../../../assets/rotate.svg';
import { useUpdateChangeRequest } from '../../../hooks/useChange.js';
import Xmark from '../../../assets/redXmark.svg';
import Check from '../../../assets/greenCheck.svg';
import Clock from '../../../assets/clock.svg';

export default function RequestBox({ closeModal, changeData }) {

    const { mutate } = useUpdateChangeRequest(closeModal);

    const handleUpdateStatus = (status) => {
        if (status === "COMPLETED") {
            if (changeData.result == "PENDING") {
                alert("아직 상대방이 응답하지 않았습니다.");
                return;
            }
        }
        mutate({ id: changeData.changeId, status });
    };

    return (
        <S.Wrapper>
            <h1 style={{
                color: changeData.result === "PENDING" ? "black" : changeData.result === "ACCEPTED" ? "#14BA6D" : "#F87067"
            }}>
                {changeData.result === "PENDING" ? "대기 중" : changeData.result === "ACCEPTED" ? "수락" : "거절"}
                <img
                    src={{
                        "PENDING": Clock,
                        "ACCEPTED": Check,
                        "REJECTED": Xmark
                    }[changeData.result]}

                />
            </h1>
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
                {changeData.toMe ? (
                    <>
                        <Confirm text="거절" color="red" image="reject" onClick={() => handleUpdateStatus("REJECTED")} />
                        <Confirm text="수락" color="blue" image="check" onClick={() => handleUpdateStatus("ACCEPTED")} />
                    </>
                ) : (
                    <Confirm text="확인" color="blue" image="check" onClick={() => handleUpdateStatus("COMPLETED")} />
                )}
            </S.Buttons>
        </S.Wrapper>
    )
}
import * as S from './style.jsx'
import ConfirmBtn from "../../button/confirm";
export default function ConfirmModal({text, redText, click, cancel}){
    return(
        <S.ConfirmContainer>
            <S.Text>{text}</S.Text>
            <S.RedText>{redText}</S.RedText>
            <S.Submit>
                <ConfirmBtn text={"취소"} color={"red"} image={"reject"} click = {cancel}/>
                <ConfirmBtn text={"수락"} color={"blue"} image={"check"} click = {click} />
            </S.Submit>
        </S.ConfirmContainer>
    )
}
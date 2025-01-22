import styled from "styled-components";
import Confirm from "../../../button/confirm/index.jsx";

export default function SchoolOut({name, On}){
    return(
        <Content>
            <h2>정말로 {name} 님을 자퇴/전학 시키시겠습니까?</h2>
            <RedText>학생 데이터가 삭제되어 되돌릴 수 없습니다</RedText>
            <Submit>
                <Confirm text={"거절"} color={"red"} image={"reject"} onClick={On} />
                <Confirm text={"수락"} color={"blue"} image={"check"} onClick={()=>console.log(1)} />
            </Submit>
        </Content>
    )
}

const Content = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
`
const Submit = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 60px;
`
const RedText = styled.p`
    color: #F87067;
    font-size: 16px;
    font-weight: 600;
`
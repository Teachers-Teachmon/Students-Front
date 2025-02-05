import styled from "styled-components";
import Logo from '../../assets/teachmon.svg';
import SquareBtn from "../../components/button/square/index.jsx";
import {useNavigate} from "react-router-dom";

export default function AccessLimits(){
    const navigate = useNavigate()
    return(
        <Container>
            <Content>
                <Warn>
                    <p>!</p>
                </Warn>
                <img src={Logo} alt={'logo'} width={300} draggable={"false"}/>
                <h1>페이지에 접근할 수 없습니다</h1>
                <TextBox>
                    <SubText>해당 페이지는 관리자 권한의</SubText>
                    <SubText>선생님만 입장가능합니다</SubText>
                </TextBox>
                <SquareBtn status={true} On={() => navigate(-1, { replace: true })} name={"돌아가기"}/>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
`
const TextBox = styled.section`
    text-align: center;
`

const Warn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #F87067;
    border-radius: 100%;
    & > p{
        color: white;
        font-size: 30px;
    }
`

const SubText = styled.p`
    color: #626262;
    font-weight: 600;
    font-size: 20px;
`
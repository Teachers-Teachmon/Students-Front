import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/index.jsx";
import ErrorImg from '../../assets/Error.svg'
import SquareBtn from "../../components/button/square/index.jsx";

export default function Error() {
    const navigate = useNavigate();

    return (
        <Container>
            <Header />
            <Wrap>
                <img src={ErrorImg} width={'10%'} alt={'errorImg'} />
                <H1>404 ERROR</H1>
                <h1>해당 페이지를 찾을 수 없습니다</h1>
                <Gray>요청하신 페이지가 사라졌거나,<br />
                    잘못된 경로를 이용하셨습니다.</Gray>
                <SquareBtn name={"돌아가기"} status={true} On={()=>navigate(-1)} />
            </Wrap>
        </Container>
    )
}



export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
`
export const Wrap = styled.div`
    width : 87%;
    height: 100%;
    padding: 15% 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const H1 = styled.h1`
    color: #F87067;
    font-size: 4rem;
`
export const Gray = styled.h3`
    color: #999999
    
`
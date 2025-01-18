import styled from "styled-components";
import Logo from '../../../assets/teachmon.svg';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function LandingHeader({index, change}) {
    const [isSelection, setIsSelection] = useState([
        true, false, false, false, false
    ]);
    useEffect(()=>{
        const newNav = [false, false, false, false, false];
        newNav[index+1] = true;
        setIsSelection(newNav);
    }, [index]);
    const changeNav = (idx) => {
        const newNav = [false, false, false, false, false];
        newNav[idx] = true;
        setIsSelection(newNav);
        change(idx);
    };
    const navigate = useNavigate()
    return (
        <Container>
            <Box>
                <img src={Logo} alt={"logo"} width={210} />
                <NavVar>
                    <Nav onClick={() => changeNav(1)} $color={isSelection[1]}>메인</Nav>
                    <Nav onClick={() => changeNav(2)} $color={isSelection[2]}>소개</Nav>
                    <Nav onClick={() => changeNav(3)} $color={isSelection[3]}>역할</Nav>
                    <Nav onClick={() => changeNav(4)} $color={isSelection[4]}>기능</Nav>
                    <Nav onClick={() => changeNav(5)} $color={isSelection[5]}>사용방법</Nav>
                </NavVar>
            </Box>
            <Login onClick={()=>navigate('/login')}>로그인</Login>
        </Container>
    );
}

export const Container = styled.div`
    width: 100%;
    position: fixed;
    height: 10%;
    top: 0;
    left: 0;
    background: #EBF1FF;
    padding: 0 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`;

export const NavVar = styled.nav`
    display: flex;
    align-items: center;
    gap: 50px;
`;

export const Nav = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => (props.$color ? "#2E6FF2" : "black")};
    cursor: pointer;
    transition: border-bottom 0.3s ease;
    border-bottom: ${(props) => (props.$color ? "2px solid #2E6FF2" : "2px solid transparent")};
    padding: 8% 0;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    & > img {
        cursor: pointer;
    }
`;

export const Login = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 30px;
    background: #ffffff;
    border: 1.5px solid black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
`;
import styled from "styled-components";
import Logo from '../../assets/teachmon.svg';
import Google from '../../assets/google.svg';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useBackNavigation = () => {
    const location = useLocation();

    useEffect(() => {
        window.addEventListener("popstate", ()=>{
            window.location.reload()
        });

    }, [location]);

    return null;
};
export default function Login(){
    useBackNavigation();
    return(
        <LoginContainer>
            <Main>
                <img src={Logo} alt={"logo"} width={300} />
                <LoginBtn onClick={()=>window.location.href = "https://teachmon-test.kro.kr/oauth2/authorization/google"}>
                    Google로 로그인
                    <GoogleIcon src={Google} alt={"googleIcon"} width={24} />
                </LoginBtn>
            </Main>
        </LoginContainer>
    )
}

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F8F8F8;
`
export const Main = styled.main`
    width: 600px;
    height: 280px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
`
export const LoginBtn = styled.div`
    width: 65%;
    border: 1px solid #999999;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    color: #303030;
    position: relative;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #f5f5f5;
    }
`
export const GoogleIcon = styled.img`
    position: absolute;
    top: 14px;
    left: 15px;
`
import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`
export const InfoBtn = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 14px;
`
export const Main = styled.main`
    width: 100%;
    height: 90%;
    border: 2px solid #EAECF0;
    border-radius: 8px;
`
export const MainNav = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    padding: 30px 20px;
    justify-content: space-between;
    &>div:first-child{
        width: 70%;
        display: flex;
        gap: 15px;
        align-items: center;
    }
`
export const CheckBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    & > div{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

export const Black = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 0, 0.4);
    z-index: 3;
`
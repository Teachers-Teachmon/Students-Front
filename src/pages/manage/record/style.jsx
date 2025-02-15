import styled from "styled-components";

export const ManageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
`
export const Wrap = styled.div`
    width : 87%;
    height: 100%;
    padding: 40px 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
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
    height: 94%;
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
export const InputBox= styled.div`
    border: 1px solid #ccc;
    width: 30%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    position: relative;
    padding: 0 15px;
`
export const Input = styled.input`
    outline: none;
    border: none;
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    padding: 10px 15px;
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
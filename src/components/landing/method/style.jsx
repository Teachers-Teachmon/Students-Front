import styled from "styled-components";

export const UnBox = styled.div`
    width: 100%;
    height: 10vh;
`

export const Wrap = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6% 10%;
    gap: 20px;
    justify-content: space-around;
`
export const Main = styled.main`
    display: flex;
    align-items: center;
    gap: 50px;
`

export const NavVar = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
export const ArrowBox = styled.div`
    background: white;
    box-shadow: 0 0 1px 0.5px rgb(0,0,0,0.25);
    border-radius: 100px;
    padding: 12px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
    cursor: pointer;
    &:hover{
        background: #E0E4E6;
    }
`
export const Nav = styled.div`
    width: 50px;
    padding: 4px;
    transition: background-color 0.2s;
    background: ${(props)=>props.$isSelect ? '#2E6FF2' : '#DFE2E5'};
    border-radius: 100px;
`
export const Img = styled.img`
    width: 700px;
    box-shadow: 0 0 7.64px 0 rgba(0, 0, 0, 0.25);
`
export const TextBox = styled.section`
    &>h1{
        margin-bottom: 10px;
        font-size: 28px;
    }
    &>p{
        margin-bottom: 8px;
    }
`
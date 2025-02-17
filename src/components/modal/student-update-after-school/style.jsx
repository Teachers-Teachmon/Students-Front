import styled from "styled-components";

export const Black = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0,0,0,0.4);
`

export const Content = styled.div`
    width: 30%;
    background: white;
    border: 2px solid #A0A0A0;
    border-radius: 10px;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 4;
    padding: 40px;
    gap: 30px;
`
export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${(props)=>props.$justify};
    width: 100%;
    align-items: center;
    & > img{
        cursor: pointer;
    }
`
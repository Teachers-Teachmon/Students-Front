import styled from "styled-components";

export const Black = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0,0,0,0.4);
`
export const Content = styled.div`
    width: 30%;
    padding: 40px 0;
    border-radius: 8px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const XIcon = styled.img`
    width: 28px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`
export const Table= styled.div`
    width: 80%;
    display: flex;
    flex-flow: wrap row;
    &>div{
        width: 100%;
        display: flex;
        flex-flow: wrap row;
    }
`
export const Th = styled.article`
    width: 33%;
    display: flex;;
    font-size: 24px;
    justify-content: center;
    padding: 5px 10px;
    color: ${(props)=>props.$color};
`
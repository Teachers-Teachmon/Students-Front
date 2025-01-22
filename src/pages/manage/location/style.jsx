import styled from "styled-components";

export const LocationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
`
export const Wrap = styled.div`
    width : 87vw;
    z-index: 3;
    height: 100vh;
    padding: 40px 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`
export const FloorBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const Info = styled.div`
    position: fixed;
    top: 30px;
    left: 17%;
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
`
export const Element = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${(props)=>props.$top}px;
    left: ${(props)=>props.$left}px;
    width: ${(props)=>props.$width}px;
    height: ${(props)=>props.$height}px;
    color: ${(props)=>props.$color ? "white" : "black"};
    background: ${(props)=>props.$color ? "#F87067" : "#DDDDDD"};
    cursor: ${(props)=>props.$cursor ? "pointer" : null};
    font-weight: 550;
    font-size: 10px;
    border: 1px solid black;
    text-align: center;
`
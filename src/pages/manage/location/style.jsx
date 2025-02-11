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
export const BtnBox = styled.div`
    position: relative;
`
export const All = styled.div`
    position: absolute;
    font-size: 14px;
    top: -10px;
    right: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 24px;
    height: 24px;
    border-radius: 100px;
    border: 2px solid #2E6FF2;
    color: #2E6FF2;
    
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
    top: ${(props)=>props.$top}%;
    left: ${(props)=>props.$left}%;
    width: ${(props)=>props.$width}%;
    height: ${(props)=>props.$height}%;
    background: ${(props)=>props.$background};
    cursor: ${(props)=>props.$cursor ? "pointer" : null};
    font-weight: 550;
    font-size: 10px;
    border: 1px solid black;
    text-align: center;
`
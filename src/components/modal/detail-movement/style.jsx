import styled from "styled-components";

export const Black = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0,0,0,0.4);
`
export const Content = styled.div`
    width: 43%;
    padding: 30px;
    border-radius: 8px;
    background: white;
    display: flex;
    flex-direction: column;
    gap:25px;
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const BlueText = styled.h2`
    font-size: 22px;
    font-weight: 550;
    color: #2E6FF2;
`

export const Teacher = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
`
export const Reason = styled.p`
    font-size: 16px;
    font-weight: 500;
`
export const Students = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-start;
`


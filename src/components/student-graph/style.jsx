import styled from "styled-components";
import { darken } from 'polished';

export const StudentContainer = styled.div`
    width: 50%;
    height: 50%;
    border: 2px solid #F2F3F6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Class = styled.h2`
`
export const Graph = styled.div`
    ${(props)=>props.$seven ? "margin-top: 6%;" : null};
    width: 100%;
    height: 60%;
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-content: center;
`
export const Student = styled.div`
    width: 12%;
    height: 40%;
    border: 2px solid #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ $color }) => $color};
    position: relative;
    cursor: ${({ $color }) => $color === "#ffffff" ? "default" : "pointer"};
    transition: 0.1s;
    &:hover {
        background-color: ${({ $color }) => darken(0.1, $color || '#ffffff')};
    }
`

export const Black = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
`
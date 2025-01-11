import styled from "styled-components";
import { darken } from 'polished';

export const StudentContainer = styled.div`
    width: 50%;
    height: 50%;
    border: 2px solid #F2F3F6;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Class = styled.h2`
    margin-top: 20px;
`
export const Graph = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    margin-top: 20px;
`

export const Student = styled.div`
    width: 12%;
    height: 50%;
    border: 2px solid #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ color }) => color};
    position: relative;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        background-color: ${({ color }) => darken(0.1, color || '#ffffff')};
    }
`

export const StatusBox = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    position: absolute;
    border: 2px solid #F5F5F5;
    border-radius: 8px;
    top: -60px;
    color: white;
    font-size: 12px;
    font-weight: 500;
    background: white;
    padding: 10px;
    z-index: 2;
`
export const Status = styled.div`
    display: flex;
    align-items: center;
    background: ${(props)=> props.color};
    gap: 8px;
    border-radius: 22px;
    padding: 2px 5px;
`

export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${(props)=> props.color};
`
export const StatusText = styled.p`
    color: ${props=>props.color};
    font-size: 16px;
    
`
export const Black = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
`
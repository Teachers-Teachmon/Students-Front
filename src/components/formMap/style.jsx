import styled from "styled-components";
import { darken } from "polished";

export const Element = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${(props) => props.$top}%;
    left: ${(props) => props.$left}%;
    width: ${(props) => props.$width}%;
    height: ${(props) => props.$height}%;
    background: ${(props) => props.$background};
    cursor: ${(props) => (props.$cursor ? "pointer" : "default")};
    font-weight: 550;
    font-size: 10px;
    border: 1px solid black;
    text-align: center;
    transition: 0.3s;

    @media (max-width: 400px) {
        font-size: 4px;
        height: ${(props) => props.$height / 2}%;
        top: ${(props) => props.$top / 2}%;
        border: 0.5px solid black;
    }

    &:hover {
        background: ${(props) =>
  props.$cursor && props.$background
    ? darken(0.1, props.$background)
    : undefined};
        cursor: ${(props) => (props.$cursor ? "pointer" : "default")};
    }
`;

export const LocationContainer = styled.div`
    width: 100%;
    height: 100%;
  position: relative;
    display: flex;
    justify-content: flex-start;
`
export const Wrap = styled.div`
    width : 75vw;
    z-index: 3;
    height: 90vh;
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    @media (max-width: 400px) {
        width: 100vw;
    }
`
export const Box = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 400px) {
        width: 110%;
        top: 75%;
    }
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
    @media (max-width: 400px) {
        font-size: 10px;
        width: 18px;
        height: 18px;
    }
    
`
export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 2%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    @media (max-width: 400px) {
        left: 0;
        width: 100%;
        justify-content: space-around;
    }
`
export const Footer = styled.div`
    position: fixed;
    bottom: 30px;
    left: 17%;
    display: flex;
    align-items: center;
    z-index: 5;
    gap: 10px;
    @media (max-width: 400px) {
        left: 10%;
    }
`
export const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    background-color: white;
    @media (max-width: 400px) {
        width: 40px;
        font-size: 10px;
    }
`

export const CircleContainer = styled.div`
    max-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.$status ? "white" : "#2E6FF2"};
    color: ${(props) => props.$status ? "#2E6FF2" : "white"};
    padding: 6px 25px;
    border-radius: 40px;
    border: 2px solid #2E6FF2;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        background: ${(props)=>props.$status ?"white" : "#2a65dd"};
        color: ${(props)=>props.$status ? "#2E6FF2" : "white"};
    }
    @media (max-width: 400px) {
        width: 30px;
        padding: 0;
    }
`
export const Name = styled.p`
    font-weight: 500;
`
export const SquareContainer = styled.div`
    width: 120px;
    display: flex;   
    align-items: center;
    justify-content: center;
    background: ${(props)=> props.$status ? "#2E6FF2" : "white"};
    color: ${(props)=> props.$status ? "white" : "#999999"};
    padding: 8px 15px;
    border-radius: 10px;
    border: 2px solid ${(props)=> props.$status ? "#2E6FF2" : "#999999"};
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        background: ${(props)=> props.$status ? "#2a65dd" : "#fbfbfb"};
    }
    @media (max-width: 400px) {
        width: 80px;
        padding: 6px 10px;
    }
`
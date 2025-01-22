import styled, {css, keyframes} from "styled-components";
import {animation} from "polished";

export const UnBox = styled.div`
    width: 100%;
    height: 10vh;
`

export const Wrap = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    padding: 3% 6%;
    justify-content: space-between;
`
export const Img = styled.img`
    width: 620px;
`
export const Main = styled.main`
    width: 40%;
    border-radius: 8px;
    font-size: 16px;
    color: #55585F;
    font-weight: 550;
`
export const Section = styled.section`
    background: #F8FAFB;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
    border-bottom: 2px solid #EAEEEF;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        background: #f0f5f6;
    }
`
const show = keyframes`
    0%{
        opacity: 0;
        height: 10px;
    }
    100%{
        opacity: 1;
        height: 150px;
    }
`
const hide = keyframes`
    0%{
        opacity: 1;
        height: 150px;
    }
    100%{
        opacity: 0;
        height: 60px;
    }
`
export const Dis = styled.div`
    width: 100%;
    background: white;
    border-top: 2px solid #E9E9E9;
    padding: 14px 20px;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 12px;
    overflow: hidden;
    cursor: pointer;
    ${(props) =>
            props.$skill &&
            css`
            animation: ${show} ease-in-out 0.4s;
        `}
    ${(props) =>
            props.$hide &&
            css`
            animation: ${hide} ease-in-out 0.4s;
        `}
`
export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 550;
`
export const BlueText = styled.p`
    color: #2E6FF2;
    font-size: 16px;
    transition: 0.2s;
    &:hover{
        text-decoration-line: underline;
    }
`
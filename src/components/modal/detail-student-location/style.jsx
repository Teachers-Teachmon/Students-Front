import styled from "styled-components";
import {Black as ModalBlack, CancelBlack} from '../../../styles/style.jsx';

export const Black = styled(ModalBlack)`
    z-index: 10;
`
export const Content = styled.div`
    @media (max-width: 400px) {
        width: 80%;
    }
        width: 48%;
    max-height: 90%;
    overflow: auto;
    padding: 40px 50px;
    border-radius: 8px;
    background: white;
    display: flex;
    flex-direction: column;
    gap:25px;
`

export const TitleBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 400px) {
        & > h1{
            font-size: 24px;
        }
    }
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`
export const Close = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
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
    cursor: pointer;
    position: relative;
    @media (max-width: 400px) {
        & > img{
            display: none;
        }
    }
`
export const Name = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: ${(props)=>props.$color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 105px;
    & > span:first-child{
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const RedText = styled.p`
    font-size: 16px;
    color: #F87067;
    font-weight: 500;
`
export const Students = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
`
export const UnBox = styled(CancelBlack)``
import styled from "styled-components";
import * as S from '../style.jsx';
import {Black as ModalBlack} from '../../../styles/style.jsx';

export const Info = styled(S.Info)``
export const InfoBtn = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 14px;
`
export const Main = styled(S.Main)``
export const MainNav = styled(S.MainNav)`
    &>div:first-child{
        width: 70%;
        display: flex;
        gap: 10px;
        align-items: center;
    }
`
export const CheckBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    & > div{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

export const Black = styled(ModalBlack)`
    z-index: 3;
`
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 90%;
`
export const Standard = styled.div`
    width: 100%;
    background: #f0f0f0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #EAECF0;
    padding: 10px;
`
export const ContentBox = styled.div`
    height: 100%;
    overflow-y: auto;
`
export const UnBox = styled.div`
    width: 80px;
    height: 25px;
`
export const Box = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #667085;
    width: ${(props)=>props.$length}px;
`

export const Box2 = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #667085;
    width: ${(props)=>props.$length}px;
`
export const NoData = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`
import styled from "styled-components";
import {Black as ModalBlack} from '../../../styles/style.jsx';
import * as S from '../../../pages/manage/record/style.jsx'

export const MovementContainer = styled(S.Container)``
export const Standard = styled(S.Standard)``
export const ContentBox = styled(S.ContentBox)``
export const UnBox = styled(S.UnBox)``
export const Box = styled(S.Box)``
export const Box2 = styled(S.Box2)``
export const NoData = styled(S.NoData)``
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #EAECF0;
    padding: 15px 10px;
    cursor: pointer;
    transition: 0.1s;
    position: relative;
    &:hover {
        background: #fafafa;
    }
`
export const Black = styled(ModalBlack)`
    z-index: 3;
`
export const DeleteBox = styled.div`
    padding: 6px 20px;
    background: #F87067;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    position: absolute;
    right: 15px;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background: #ff4d4f;
    }
`
export const PatchBox = styled.div`
    padding: 6px 20px;
    background: #2E6FF2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    position: absolute;
    ${props=>props.$disabled ? "right: 15px" : "right: 8.5%"};
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background: #225acb;
    }
`
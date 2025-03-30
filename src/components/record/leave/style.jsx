import styled from "styled-components";
import * as S from '../../../pages/manage/record/style.jsx'

export const LeaveContainer = styled(S.Container)``
export const Standard = styled(S.Standard)``
export const ContentBox = styled(S.ContentBox)``
export const UnBox = styled(S.UnBox)``
export const Box = styled(S.Box)``
export const NoData = styled(S.NoData)``
export const Box2 = styled(S.Box2)``
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #EAECF0;
    padding: 15px 10px;
    transition: 0.1s;
    position: relative;
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
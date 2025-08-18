import styled from "styled-components";
import * as S from '../../../pages/manage/record/style.jsx'
import {mq} from "../../../styles/media.js";

export const StudentContainer = styled(S.Container)``
export const Standard = styled(S.Standard)`
    justify-content: space-between;
    z-index: 10;
    & > div{
        display: flex;
        align-items: center;
        justify-content: flex-end;
      width: 50%;
    }
`
export const ContentBox = styled(S.ContentBox)`
    scrollbar-width: none;
`
export const UnBox = styled.div`
    width: 70px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mq.mobile}{
      margin-right: 10px;
    }
`
export const Black = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    width: 18px;
    height: 18px;
    border: 1px solid #D0D5DD;
    cursor: pointer;
`;
export const Box = styled(S.Box)``
export const NoData = styled(S.NoData)``
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #EAECF0;
    padding: 15px 10px;
    transition: 0.1s;
    position: relative;
    & > div{
        display: flex;
        align-items: center;
      justify-content: flex-end;
      width: 50%;
    }
  ${mq.mobile}{
    justify-content: flex-end;
  }
`
export const Box2 = styled(S.Box2)`
    position: relative;
    margin-right: 65px;
  ${mq.mobile}{
    margin-right: 0;
  }
    & > p{
        width: 40px;
    }
`
export const Status = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    background: ${(props)=> props.color};
    gap: 8px;
    border-radius: 22px;
    padding: 4px 10px;
    cursor: pointer;
`
export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${(props)=> props.color};
    ${mq.mobile}{
      display: none;
    }
`
export const StatusText = styled.p`
    color: ${props=>props.color};
    font-weight: 500;
    font-size: 14px;
    
`
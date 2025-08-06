import styled from "styled-components";
import {Black as ModalBlack} from '../../../styles/style.jsx';
import {mq} from "../../../styles/media.js";

export const Black = styled(ModalBlack)``
export const Content = styled.div`
    width: 45%;
    ${mq.mobile}{
        width: 80%;
    }
    padding: 30px;
    border-radius: 8px;
    background: white;
    display: flex;
    flex-direction: column;
    gap:25px;
    max-height: 82%;
    overflow: auto;
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
    & > img{
        ${mq.mobile}{
          display: none;
        }
    }
`
export const Name = styled.p`
    font-size: 20px;
    width: max-content;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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


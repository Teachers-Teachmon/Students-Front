import styled from "styled-components";
import { darken } from 'polished';
import {CancelBlack} from "../../styles/style.jsx";
import {mq} from "../../styles/media.js";

export const StudentContainer = styled.div`
    width: 50%;
    height: 50%;
    border: 2px solid #F2F3F6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mq.mobile}{
      width: 100%;
    }
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
        background-color: ${(props) =>
                props.$color === "#ffffff" ? null : darken(0.1, props.$color || "#ffffff")};
    }
    ${mq.mobile}{
      font-size: 12px;
    }
`
export const Black = styled(CancelBlack)`
    z-index: 1;
`
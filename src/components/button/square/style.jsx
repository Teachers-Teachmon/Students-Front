import styled from "styled-components";
import {mq} from "../../../styles/media.js";

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
    ${mq.mobile}{
      width: 80px;
      padding: 6px 10px;
    }
`
export const Name = styled.p`
    font-weight: 500;
`
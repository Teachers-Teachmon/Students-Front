import styled, { keyframes } from "styled-components";

const progressAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${props => props.rate}%;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: #E2E2E2;
  overflow: hidden;
`

export const ProgressBar = styled.div`
  width: ${props => props.rate}%;
  height: 100%;
  background-color: #2E6FF2;
  animation: ${progressAnimation} 1.5s cubic-bezier(0.1, 0, 0.05, 1) forwards;
  border-radius: 10px;
`
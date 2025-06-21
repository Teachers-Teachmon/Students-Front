import styled, {css, keyframes} from "styled-components";

export const UnBox = styled.div`
    width: 100%;
    height: 10vh;
`

export const Wrap = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3% 10%;
    gap: 20px;
    overflow: hidden;
    max-height: 90vh;
    justify-content: flex-start;
`

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const show = keyframes`
  from {
      opacity: 0;
      transform: translateX(60px);
  }
  to {
      opacity: 1;
      transform: rotateX(0);
  }
`;
export const Img = styled.img`
    width: 40%;
    ${(props) =>
            props.$isAnimation &&
            css`
            animation: ${show} 1s ease-in-out;
        `}
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 24px;
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
`
export const BlueText = styled.p`
    color: #2E6FF2;
    cursor: pointer;
    font-size: 20px;
`
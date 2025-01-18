import styled, {css, keyframes} from "styled-components";

export const UnBox = styled.div`
    width: 100%;
    height: 10vh;
`

export const Wrap = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    gap: 130px;
    align-items: center;
`

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const TagBox = styled.div`
    background: #C8DBFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: max-content;
    padding: 8px 10px;
    border-radius: 30px;
    gap: 6px;
`
export const Tag = styled.div`
    padding: 4px 20px;
    font-size: 16px;
    font-weight: 500;
    color: #2E6FF2;
    border: 2px solid #2E6FF2;
    border-radius: 30px;
    background: white;
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
    width: 700px;
    ${(props) =>
            props.$isAnimation &&
            css`
            animation: ${show} 1s ease-in-out;
        `}
`;
export const BlueText = styled.span`
    color: #2E6FF2;
`
export const Text = styled.p`
    font-size: 18px;
`
export const TextBox = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`
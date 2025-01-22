import styled from "styled-components";
import flyIcon from '../../../assets/paper-plane.svg';
import rejectIcon from '../../../assets/xmark.svg';
import checkIcon from '../../../assets/check.svg';

export const ConfirmContainer = styled.div`
  width: 120px;
  height: 42px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.color === 'red' ? '#F87067' : props.color === 'blue' ? '#2E6FF2' : '')};
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
`;

export const Icon = styled.img.attrs(({ image }) => ({
  src:
    image === "check" ? checkIcon : image === "fly" ? flyIcon : image === "reject" ? rejectIcon : ''
}))
  `
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

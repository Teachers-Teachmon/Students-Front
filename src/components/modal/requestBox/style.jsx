import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    align-items: center;
    text-align: center;
    background: white;
    padding: 3rem 5rem;
    border-radius: 10px;
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const Buttons = styled.div`
    display: flex;
    margin: 1rem 0;
    padding: 0 2rem;
    gap: 4rem;
`

export const ChangeWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
`;

export const ChangeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
`;

export const ChangeSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 1.5rem;
  gap: 8px;

  p:first-child {
    text-align: center;
    font-weight: 400;
  }
  p:not(:first-child) {
    font-size: 1.1rem;
    color: #444;
  }
`;

export const RotateIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0 0.6rem;
`;

export const DetailButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  &:hover {
    text-decoration: underline;
  }
`;

export const Reason = styled.p`
    margin-top: 2rem;
    font-size: 1.4rem;
`;
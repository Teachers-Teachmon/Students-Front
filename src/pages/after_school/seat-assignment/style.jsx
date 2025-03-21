import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%;
  padding: 2rem 2rem 0 2rem;
  gap: 2.5rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: #2E6FF2;
  }
`;

export const NotAssignedStudent = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Student = styled.div`
  color: #2E6FF2;
  border: 2px solid #2E6FF2;
  height: 40px;
  border-radius: 2.5rem;
  padding: 0.51rem;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.7;
  }
`;

export const ClassDivision = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

export const ClassDivisionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 1.4rem;
  }
`;

export const ClassDivisionBox = styled.div`
  display: flex;
  width: 18vw;
  height: 55vh;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  flex-wrap: wrap;
  border: 2px solid #CCC;
  border: 2px solid ${({ $enabled }) => ($enabled ? "#CCC" : "#AAA")};
  background: ${({ $enabled }) => ($enabled ? "inherit" : "#f0f0f0")};
  overflow-y: auto;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    width: 60vw;
    border-radius: 10px;
    padding: 2rem;
`
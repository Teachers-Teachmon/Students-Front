import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 90%;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`;

export const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
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
    width: 50%;
    border-radius: 10px;
    padding: 2rem;
`;
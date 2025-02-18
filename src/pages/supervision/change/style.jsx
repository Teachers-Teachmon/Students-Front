import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`;

export const MainWrap = styled.div`
    padding: 1rem 1rem;
    width: 87%;
    display: flex;
    align-items: center;
`;

export const MainContent = styled.div`
    margin: 0 auto;
    width: 90%;
`;

export const NavButton = styled.button`
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    border-radius: 50%;
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
`;

export const MainHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        display: flex;
        align-items: baseline;
        gap: 12px;
    }
`;

export const Warning = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: #F87067;
`;


export const TableWrap = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    max-height: 80vh;
`;

export const TableContent = styled.div`
    display: flex;
`;

export const Table = styled.div`
    padding: 1rem;
    border: 1px solid #C4C4C4;
    border-radius: 10px;

    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }
`;

export const TableLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 13%;
    gap: 1rem;

    div {
        border-radius: 10px;
        padding: 0.5rem;
        background-color: #EBF1FF;
    }
`;

export const TableRight = styled.div`
    display: flex;
    margin: 0 auto;

    h3 {
        text-align: center;
        margin-bottom: 0.5rem;
    }
`;

export const TableRightHeader = styled.div`
    display: flex;
    margin-top: 1.7rem;
    justify-content: center;
    gap: 1rem;
    div {
        background-color: #EBF1FF;
        padding: 0.6rem 1.5rem;
        border-radius: 10px;
        white-space: nowrap;
    }
`;

export const TableRightContent = styled.div`
    border-left: 2px solid #C4C4C4;
    padding-left: 2rem;
    padding-right: 2rem;
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
    background: #fff;
    border-radius: 10px;
    padding: 2rem;
    width: 40%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-align: center;
        margin-bottom: 1.5rem;
    }

    textarea {
        width: 80%;
        height: 100px;
        margin: 1rem 0;
        border-radius: 5px;
        padding: 0.8rem;
        border: 1px solid #ccc;
        outline: none;
        resize: none;
    }
`;

export const ExchangeInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1.5rem;

    div {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    span {
        font-size: 1.4rem;
    }
`;

export const Arrow = styled.div`
    font-size: 2rem;
    color: #2E6FF2;
`;

export const ModalButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-top: 1rem;
`;

export const TeacherList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;
    text-align: center;
    font-size: 1.1rem;

    div {
        margin-top: 0.8rem;
        border: 1px solid #CCCCCC;
        padding: 0.3rem;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
`;
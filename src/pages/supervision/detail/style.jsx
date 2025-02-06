import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const MainWrap = styled.div`
    padding: 1.5rem 2rem;
    width: 85%;
    margin: 0 auto;
`

export const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
`;

export const Months = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 10px;
    height: 2.3rem;
`;

export const TableWrap = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    height: 80vh;
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
    gap: 10px;
    margin-top: 1.7rem;

    div {
        background-color: #EBF1FF;
        padding: 0.6rem 1rem;
        border-radius: 10px;
    }
`;

export const TableRightContent = styled.div`
    border-left: 1px solid #C4C4C4;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

export const TeacherList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    font-size: 1.1rem;

    div {
        margin-top: 0.5rem;
    }
`;

export const TeacherName = styled.div`
    padding: 0.4rem;
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
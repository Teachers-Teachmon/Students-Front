import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 10px;
    width: 60vw;
    padding: 2rem;
    display: flex;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    div:first-child {
        display: flex;
        justify-content: space-between;
    }
    
    div:last-child {
        display: flex;
        gap: 1rem;
        white-space: nowrap;
    }
`;

export const DivisionText = styled.div`
    margin-top: 0.3rem;
    font-size: 1.15rem;
    font-weight: 600;
    color: ${({ $tab }) => $tab ? "#2E6FF2" : ""};
    text-decoration: ${({ $tab }) => $tab ? "underline" : ""};
    text-underline-offset: 0.4rem;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    background: white;
    padding: 1rem 4rem;
    border-radius: 10px;
    width: 80%;
    max-width: 900px;
    margin: 0 auto;
`

export const HandleButton = styled.button`
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    border-radius: 50%;
`

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
`;

export const MainText = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const Table = styled.div`
`

export const Content = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    display: flex;

    div {
        width: 100%;
    }
`;

export const TeacherListTop = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: ${({ $tab }) => !$tab ? "#BFFEBB" : "#C8DBFF"};
    padding: 1rem;
`;

export const TeacherListContent = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-rows: 1fr 1fr 1fr;
`;

export const TeacherTable = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: white;
    border-bottom: 1px solid #E2E2E2;
    padding: 1rem;
    justify-items: center;

    p {
        margin: 0;
        padding: 0.5rem 0;
    }
    p:first-child {
        justify-self: start;
    }
`;
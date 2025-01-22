import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 10px;
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
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
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
    border-radius: 10px;
    overflow: hidden;
    display: flex;

    div {
        width: 100%;
    }
`;

export const TeacherListTop = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #C8DBFF;
    padding: 1rem;
`;

export const TeacherListContent = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: center;
    background: #FAFAFB;
`;

export const TeacherTable = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    background-color: white;
    border-bottom: 1px solid #E2E2E2;
    padding: 1rem;

    p {
        margin: 0;
        padding: 0.5rem 0;
    }
`;
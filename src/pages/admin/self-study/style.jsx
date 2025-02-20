import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 87%;
    overflow-y: auto;
    max-height: 95vh;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    align-items: start;
`;

export const MainHeader = styled.div`
    display: flex;
    gap: 20px;

    div {
        display: flex;
        gap: 1rem;
    }
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
    z-index: 100;
`;

export const Modal = styled.div`
    width: 50%;
    border-radius: 10px;
    padding: 2rem;
`;

export const EditRow = styled.div`
    display:  flex;
    border: 1px solid #cccccc;
    border-top: none;
    padding: 4% 8%;
    align-items: center;

    &:first-child{
        border-top: 1px solid #cccccc;
    }
`

export const P = styled.p`
    font-size: 23px;
    color: gray;
    cursor: pointer;
    margin-left: 80px;
`

export const RowData = styled.div`
    display:  flex;
    align-items: center;
    width: ${(props)=>props.$length}vw;
`

export const EditMainTop = styled.div`
    display: flex;
    width: 18vw;
    height: 6vh;
    gap: 10px;
    //border-bottom: 1px solid #cccccc;
    background-color: #c9dbff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    align-items: center;
    padding: 8%;
    color: gray;
    font-size: 13px;
`

export const TopData = styled.span`
    width: ${(props)=>props.$length}vw;
`

export const EditMainData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const GradeBtn = styled.div`
    display: flex;
    gap: 10px;
`

export const TopDate = styled.div`
    display: flex;
    margin-left: 20px;
    height: 4.9vh;
    width: ${(props)=>props.$length}vw;
`

export const PlusBtn = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0 1.5% 0;
    width: 1.8vw;
    height: 3.1vh;
    font-size: 25px;
    color: #2E6FF2;
    align-items: center;
    border: 1px solid #2E6FF2;
    border-radius: 4px;
    margin-left: 46%;
    margin-top: 5%;
    cursor: pointer;

`


export const Black = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
`

export const SquareBtn = styled.div`
    display: flex;
    margin-left: 350px;
`
import styled from "styled-components";

export const CircleContainer = styled.div`
    max-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.$status ? "white" : "#2E6FF2"};
    color: ${(props) => props.$status ? "#2E6FF2" : "white"};
    padding: 6px 25px;
    border-radius: 40px;
    border: 2px solid #2E6FF2;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        background: ${(props)=>props.$status ?"white" : "#2a65dd"};
        color: ${(props)=>props.$status ? "#2E6FF2" : "white"};
    }
    @media (max-width: 400px) {
        width: 30px;
        padding: 0;
    }
`
export const Name = styled.p`
    font-weight: 500;
`
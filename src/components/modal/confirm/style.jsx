import styled from "styled-components";

export const ConfirmContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${(props) => props.color ? "white" : "#2E6FF2"};
    color: ${(props) => props.color ? "#2E6FF2" : "white"};
    padding: 30px 40px;
    background: white;
    gap: 10px;
    border-radius: 10px;
`

export const Text = styled.h2`
    font-weight: 600;
    font-size: 24px;
    color: black;
`
export const RedText = styled.p`
    color: #F87067;
    font-weight: 500;
    margin-left: 5px;
`

export const Submit= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
`
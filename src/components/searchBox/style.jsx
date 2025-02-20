import styled from "styled-components";

export const InputBox= styled.div`
    border: 1px solid #ccc;
    width: ${(props)=>props.$up ? `${props.$up}%` : "35%"};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    position: relative;
    padding: 0 15px;
    @media  (max-width: 400px) {
        padding: 0 2px;
    }
    & > img{
        @media  (max-width: 400px) {
            display: none;
        }
    }
`
export const Input = styled.input`
    outline: none;
    border: none;
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    padding: 10px 15px;
`

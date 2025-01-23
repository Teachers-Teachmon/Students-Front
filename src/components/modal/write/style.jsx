import styled from "styled-components";

export const WriteContainer = styled.div`
    width: 45%;
    background: white;
    border: 2px solid #A0A0A0;
    border-radius: 10px;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 4;
    padding: 40px;
    gap: 30px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const Place = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const Reason= styled.textarea`
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 14px;
    outline: none;
    resize: none;
    height: 40%;
`

export const InputBox= styled.div`
    border: 1px solid #ccc;
    width: 250px;
    border-radius: 8px;
    padding: 10px 15px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    font-size: 14px;
    position: relative;
`
export const Input = styled.input`
    border: none;
    width: 100%;
    outline: none;
`
export const Submit = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`
export const StudentBox = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 5px;
    height: 90px;
`
export const Student = styled.div`
    border: 2px solid #2E6FF2;
    color: #2E6FF2;
    background: white;
    padding: 7px 12px;
    border-radius: 30px;
    font-weight: 550;
    cursor: pointer;
    height: max-content;
`

export const StudentList = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    max-height: 180px;
    z-index: 3;
    overflow-y: scroll;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #B0BEC5 #F5F5F5; /* 스크롤바 색상 (Foreground/Background) */

    /* Chrome, Safari, Edge */

    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: #F5F5F5; /* 트랙 색상 */
        border-radius: 8px; /* 트랙 둥글게 */
    }

    &::-webkit-scrollbar-thumb {
        background: #B0BEC5; /* 스크롤바 색상 */
        border-radius: 8px; /* 스크롤바 둥글게 */
        border: 2px solid #F5F5F5; /* 스크롤바와 트랙 간 간격 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #90A4AE; /* Hover 시 스크롤바 색상 */
    }
    
`
export const StudentItem = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 10px 20px;
    &:hover {
        background: #F2F3F6;
    }
`
export const Black = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
`
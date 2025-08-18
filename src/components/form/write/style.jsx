import styled from "styled-components";
import {CancelBlack} from "../../../styles/style.jsx";

export const WriteContainer = styled.div`
    width: 100%;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    z-index: 4;
    padding: 3rem 10rem;
    gap: 30px;
  height: 100%;
`
export const Wrap = styled.div`
  width: 100%;
  position: relative;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  z-index: 4;
  gap: 30px;
  height: 100%;
`

export const Reason= styled.textarea`
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 14px;
    outline: none;
    resize: none;
    height: 12%;
`

export const InputBox= styled.div`
    border: 1px solid #ccc;
    width: 300px;
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
    position: absolute;
  bottom: 0;
  left: 0;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`
export const StudentBox = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 5px;
    overflow: auto;
`
export const Student = styled.div`
    border: 2px solid #2E6FF2;
    color: #2E6FF2;
    background: white;
    padding: 7px 20px;
    border-radius: 30px;
    font-weight: 550;
    cursor: pointer;
    height: max-content;
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
export const Organization = styled(InputBox)``
export const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233,233,234);}
  > .toggle--checked {
    background-color: #2E6FF2;
    transition : 0.5s
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255,254,255);
    transition : 0.5s
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  } >.toggle--checked {
    left: 27px;
    transition : 0.5s
  }
`;
export const Desc = styled.div`
  //설명 부분의 CSS를 구현
  text-align: center;
  margin: 20px;
`;

export const StudentItem = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 10px 20px;
    &:hover {
        background: #F2F3F6;
    }
`
export const Black = styled(CancelBlack)``
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

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $open }) => ($open ? '0' : '-300px')}; 
  width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0,0,0,0.2);
  transition: left 0.3s ease;
  z-index: 999;
`;

export const DrawerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  button {
    background: none;
    border: none;
    cursor: pointer;
    align-self: flex-end;
  }
`;

export const DrawerHeaderTop = styled.div`
`;

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

export const DrawerContent = styled.div`
  padding: 1rem;
`;

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
        white-space: nowrap;
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

export const Black = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
`
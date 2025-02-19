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
  left: ${({ $open }) => ($open ? '0' : '-393px')}; 
  width: 393px;
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
  padding: 1.5rem;
  border-bottom: 2px solid #919191;
  & > div > img {
      width: 8%;
    cursor: pointer;
    align-self: flex-end;
      margin-bottom: 10px;
  }
`;
export const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const DrawerHeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    & > div > p{
        margin-bottom: 8px;
    }
    & > div > p:hover{
        cursor: pointer;
        text-decoration-line: underline;
    }
`;
export const Order = styled.p`
    color: ${(props)=>props.$order ? "#2E6FF2" : "#999999"};
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    width: 98%;
`
export const MenuBox = styled.p`
    width: ${(props)=>props.$width}px;
    text-align: center;
`
export const DrawerContent = styled.div`
    width: 100%;
    padding: 1rem 0.5rem;
    height: 75%;
    overflow-y: auto;
`;
export const TeacherBox = styled.div`
    display: flex;
    padding: 1rem;
    border: 3px solid #F2F3F6;
    border-radius: 8px;
    margin-bottom: 10px;
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
    margin-top: 1.7rem;
    justify-content: center;
    gap: 1rem;

    div {
        background-color: #EBF1FF;
        padding: 0.6rem 1.5rem;
        border-radius: 10px;
        white-space: nowrap;
    }
`;

export const TableRightContent = styled.div`
    border-left: 2px solid #C4C4C4;
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const TeacherList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
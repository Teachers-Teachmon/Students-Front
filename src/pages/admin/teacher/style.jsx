import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
`
export const Wrap = styled.div`
    width : 87%;
    height: 100%;
    padding: 40px 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`
export const InfoBtn = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 14px;
`
export const Main = styled.main`
    width: 100%;
    height: 90%;
    border: 2px solid #EAECF0;
    border-radius: 8px;
`
export const MainNav = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    padding: 30px 20px;
    justify-content: space-between;
    &>div:first-child{
        width: 70%;
        display: flex;
        gap: 15px;
        align-items: center;
    }
`
export const Array = styled.div`
    color: #2E6FF2;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 530;
    gap: 5px;
    width: 120px;
    user-select: none;
`

export const Table = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 90%;
`
export const Standard = styled.div`
    width: 100%;
    background: #f0f0f0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #EAECF0;
    padding: 10px;
    z-index: 9;
    & > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const ContentBox = styled.div`
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none;
`
export const UnBox = styled.div`
    width: 80px;
    height: 25px;
`
export const Box = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #667085;
    width: ${(props)=>props.$length}px;
`
export const Box2 = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #667085;
    width: ${(props)=>props.$length}px;
`
export const NoData = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #EAECF0;
    padding: 15px 10px;
    transition: 0.1s;
    position: relative;
    & > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    & > div:last-child{
        gap: 30px;
    }
`
export const Black = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
`
export const Btn = styled.button`
    all: unset;
    cursor: pointer;
    font-weight: 500;
    background-color: ${(props)=>props.$color};
    border-radius: 8px;
    padding: 8px 20px;
    margin-left:  ${(props)=> props.$color === "#2E6FF2" ? " 10px" : "0"};
    color: ${props=>props.$color === "#2E6FF2" ? "white" : "#999999"};
    border: 2px solid ${props=>props.$color === "#2E6FF2" ? "#2E6FF2" : "#999999"};
    transition: 0.1s;
    & :hover{
        opacity: 0.8;
    }
`
export const Status = styled.div`
    display: flex;
    align-items: center;
    background: ${(props)=> props.$color};
    gap: 8px;
    border-radius: 22px;
    padding: 2px 5px;
    cursor: pointer;
    width: max-content;
    z-index: 8;
`
export const InputTeacher = styled.input`
    width: ${(props)=>props.$length}px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    padding: 8px 16px;
    font-size: 16px;
    margin-right: 20px;
`
export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${(props)=> props.$color};
`
export const StatusText = styled.p`
    color: ${props=>props.$color};
    font-size: 16px;
    
`
export const Option = styled.img`
    width: 14px;
    margin-left: 10px;
    margin-right: 30px;
    cursor: pointer;
`
export const Options = styled.div`
    position: absolute;
    top: ${(props)=>props.$up}px;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    border: 1px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    
    button {
        border: 1px;
        padding: 10%;
        width: 6.5vw;
        background-color: #fff;
        cursor: pointer;
        border-right: 1px solid #cccccc;

    }

    button:hover {
        background-color: #f0f0f0;
    }

    button{
        border-right: none; 
    }
    
`
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
export const InputBox= styled.div`
    border: 1px solid #ccc;
    width: 30%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    position: relative;
    padding: 0 15px;
`
export const Input = styled.input`
    outline: none;
    border: none;
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    padding: 10px 15px;
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
    justify-content: flex-start;
    border: 1px solid #EAECF0;
    padding: 10px;
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
    & > p{
        width: 40px;
    }
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
    justify-content: flex-start;
    border: 1px solid #EAECF0;
    padding: 15px 10px;
    transition: 0.1s;
    position: relative;
    & > span{
        color: #F87067;
    }
`
export const InputStudent = styled.input`
    width: ${(props)=>props.$length}px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    padding: 8px 16px;
    font-size: 16px;
    margin-right: 20px;
`
export const PatchBox = styled.div`
    padding: 6px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    position: absolute;
    right: 30px;
    cursor: pointer;
`
export const Black = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
`
export const Btn = styled.button`
    all: unset;
    cursor: pointer;
    font-weight: 500;
    background-color: ${(props)=>props.$color};
    border-radius: 8px;
    padding: 8px 20px;
    margin-left: 20px;
    color: white;
    &:hover {
        background: ${(props)=> props.$color === "#2E6FF2" ? "#2a65dd" : "#fbfbfb"};
    }
`
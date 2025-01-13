import styled from "styled-components";

export const MovementContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #EAECF0;
    padding: 15px 10px;
    cursor: pointer;
    transition: 0.1s;
    position: relative;
    &:hover {
        background: #fafafa;
    }
`
export const DeleteBox = styled.div`
    padding: 6px 20px;
    background: #F87067;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    position: absolute;
    right: 15px;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background: #ff4d4f;
    }
`
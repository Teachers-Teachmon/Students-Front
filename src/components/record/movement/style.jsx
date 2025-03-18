import styled from "styled-components";

export const MovementContainer = styled.div`
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
export const Black = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 0, 0.4);
    z-index: 3;
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
export const PatchBox = styled.div`
    padding: 6px 20px;
    background: #bdbdbd;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    position: absolute;
    right: 8.5%;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background: #b3b3b3;
    }
`
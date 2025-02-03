import styled from "styled-components";

export const StudentContainer = styled.div`
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
    justify-content: space-between;
    border: 1px solid #EAECF0;
    padding: 10px;
    & > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
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
`
export const Box2 = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #667085;
    width: ${(props)=>props.$length}px;
`

export const Status = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    background: ${(props)=> props.color};
    gap: 8px;
    border-radius: 22px;
    padding: 4px 10px;
`
export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${(props)=> props.color};
`
export const StatusText = styled.p`
    color: ${props=>props.color};
    font-weight: 500;
    font-size: 14px;
    
`
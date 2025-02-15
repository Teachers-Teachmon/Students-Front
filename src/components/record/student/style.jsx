import styled from "styled-components";

export const StudentContainer = styled.div`
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
    z-index: 10;
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
    width: 70px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Black = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    width: 18px;
    height: 18px;
    border: 1px solid #D0D5DD;
    cursor: pointer;
`;
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
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: #667085;
    width: ${(props)=>props.$length}px;
    margin-right: 65px;
    & > p{
        width: 40px;
    }
`

export const Status = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    background: ${(props)=> props.color};
    gap: 8px;
    border-radius: 22px;
    padding: 4px 10px;
    cursor: pointer;
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
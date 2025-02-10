import styled from 'styled-components';

export const EditContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const EditMain = styled.div`
    display:  flex;
    flex-direction: column;
    gap: 50px;
    overflow-y: auto;
    max-height: 800vh;
    width: 100%;
    position: relative;
`

export const EditRow = styled.div`
    display:  flex;
    border: 1px solid #cccccc;
    padding: 5% 8%;
    align-items: center;
`

export const RowData = styled.div`
    display:  flex;
    align-items: center;
    width: ${(props)=>props.$length}vw;
`

export const EditMainTop = styled.div`
    display: flex;
    width: 100%;
    height: 4vh;
    gap: 10px;
    background-color: #c9dbff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    align-items: center;
    padding: 8%;
    color: gray;
    font-size: 13px;
`

export const TopData = styled.span`
    width: ${(props)=>props.$length}vw;
`

export const EditMainData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PlusBtn = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0 0.3% 0;
    width: 1.8vw;
    height: 3.1vh;
    font-size: 25px;
    color: #2E6FF2;
    align-items: center;
    border: 1px solid #2E6FF2;
    border-radius: 4px;
    margin-left: 45%;
    margin-top: 5%;
    cursor: pointer;
`
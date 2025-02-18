import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;

`

export const Content = styled.div`
    width: 87%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 5% 3%;
`

export const AdminTop = styled.div`
    display: flex;
    width: 100%;
`

export const TodaySupervision = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
`

export const TodaySupervisionTop = styled.div`
    display: flex;
    gap: 67px;
    cursor: pointer;

    p{
        color: gray;
        font-size: 15px;
        margin-top: 20px;
    }

    img{
        width: 8px;
        margin-left: 5px;
    }
    
`

export const TodaySupervisionMain = styled.div`
    display: flex;
    width: 32vw;
    height: 33vh;
    background-color: #EBF1FF;
    border-radius: 3%;
    flex-direction: column;
`

export const TodaySupervisionMainTop = styled.div`
    display: flex;
    padding: 18px 40px;
`

export const Top = styled.span`
    width: ${(props) => props.$length}vw;
    font-size: 18px;
`
export const SupervisionData = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0% 3%;
    gap: 10px;
`

export const Row = styled.div`
    width: 30vw;
    height: 5vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 0% 5%;
`

export const DataCell = styled.div`
    width: ${(props) => props.$length}vw;
`

export const DataCellSelf = styled.div`
    width: ${(props) => props.$length}vw;
    color: #2E6FF2;
`
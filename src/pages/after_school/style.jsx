import styled from "styled-components";

export const AfterSchoolContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    width: 85%;
    height: 100%;
    gap: 50px;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 50%;
    padding: 3%;
    margin-top: 30px;
`

export const TodayClasses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 5% 0% 0% 0%;
    width: 50%;
`

export const ClassCard = styled.div`
    display: flex;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 6px;
    background-color: #fff;
    width: 550px;
    height: 60px;
    align-items: center;
    gap: 20px;
`

export const CardTime = styled.div`
    background-color: #ECF3FD;
    color: #2E6FF2;
    display: flex;
    width: 70px;
    height: 30px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`

export const CardData = styled.div`
    width: ${(props) => props.$length}px;
`

export const MyClasses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const ClassTableContent = styled.div`
`

export const ClassTableTop = styled.div`
    display: flex;
    width: 600px;
    height: 60px;
    gap: 20px;
    border: 1px solid #cccccc;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    align-items: center;
    padding: 20px;
    background-color: #EBF1FF;

`

export const ClassTableMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    overflow-y: auto;
    max-height: 290px;
`


export const TopName = styled.span`
    padding-left: 40px;
`

export const TopLocation = styled.span`
    padding-left: 140px;
`

export const ClassTable = styled.div`
    display: flex;
    padding: 15px 20px;
    border: 1px solid #cccccc;
    align-items: center;
    padding-left: 24px;
    

    &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`

export const TableData = styled.div`
    width: ${(props)=>props.$length}px;
`

export const OptionButton = styled.img`
    width: 15px;
`

export const Options = styled.div`
    position: absolute;
    display: flex;
    border: 1px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    margin-top: 65px;
    margin-left: 430px;
    
    button {
        border: 1px;
        padding: 10px 20px;
        width: 80px;
        background-color: #fff;
        cursor: pointer;
        border-right: 1px solid #cccccc;

    }

    button:hover {
        background-color: #f0f0f0;
    }

    button:last-child {
        border-right: none; 
    }
    
`

export const BusinessTripModal = styled.div`
    position: fixed;
    width:100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BusinessModal = styled.div`
    width: 50%;
    border-radius: 10px;
    padding: 2rem;
`

export const ClassEndModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EndModal = styled.div`
    width: 50%;
    border-radius: 10px;
    padding: 2rem;
`

export const ClassPrepModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PrepModal = styled.div`
    width: 50%;
    border-radius: 10px;
    padding: 2rem;
`
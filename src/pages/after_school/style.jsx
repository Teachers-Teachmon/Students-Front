import styled from "styled-components";

export const AfterSchoolContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    width: 87%;
    height: 100%;
    gap: 80px;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 50%;
    padding: 0% 3%;
    margin-top: 30px;
`

export const TodayClasses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 7% 0% 0% 0%;
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
    margin-top: 150px;
`

export const ClassTableContent = styled.div`
    width: 100%;
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
    max-height: 350px;
    height: 300px;
`

export const TableName = styled.div`
    display: flex;
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
    position: relative;

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
    cursor: pointer;
    
`

export const Options = styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    border: 1px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    margin-top: 135px;
    margin-left: 510px;
    
    button {
        border: 1px;
        padding: 10px 10px;
        width: 61px;
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
    margin-left: 150px;
`

export const ClassBtn = styled.div`
    display: flex;
    margin-left: 400px;
`
export const SquareBtn = styled.button`
    width: 120px;
    height: 40px;
    background-color: #2E6FF2;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
`

export const ClassList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;
    margin-top: 20px;
`

export const ClassListTop = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

export const GradeBtn = styled.div`
    display: flex;
    gap: 10px;
`

export const ClassListContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
`

export const ClassListMain = styled.div`
    width: 470px;
    height: 620px;
    border: 1px solid #cccccc;
    border-radius: 30px;
    max-width: 1200px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DayP = styled.p`
    font-size: 20px;
`

export const CaretLeft = styled.button`
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1.5px solid #2E6FF2;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
`

export const CaretRight = styled.button`
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1.5px solid #2E6FF2;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
`

export const ClassListWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ClassList1 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EBF1FF;
    height: 230px;
    width: 430px;
    border-radius: 10px;
    padding: 15px;
    align-items: center;
    gap: 10px;
    overflow-y: auto;
    max-height: 400px;
`

export const ClassList2 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EBF1FF;
    height: 230px;
    width: 430px;
    border-radius: 10px;
    padding-top: 15px;
    align-items: center;
    gap: 10px;
    overflow-y: auto;
    max-height: 400px;

`

export const List1 = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    padding: 1rem 0;
    width: 410px;
    align-items: center;
    padding-left: 6px;
    gap: 10px;

    div {
        font-size: 14px;
    }

`

export const List2 = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    padding: 1rem 0;
    width: 410px;
    align-items: center;
    padding-left: 6px;
    gap: 10px;

    div {
        font-size: 14px;
    }
`

export const ClassListMainTop = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
`

export const ClassListMainContent1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const ClassListMainContent2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const List1Data = styled.div`
    width: ${(props)=>props.$length}px;
`

export const List2Data = styled.div`
    width: ${(props)=>props.$length}px;
`
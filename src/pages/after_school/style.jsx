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
    gap: 5%;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0% 3%;
    margin-top: 0.5%;
`

export const TodayClasses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 7% 0% 0% 0%;
    width: 50%;
    min-height: 45%;
`

export const ClassCard = styled.div`
    display: flex;
    padding: 3%;
    border: 1px solid #cccccc;
    border-radius: 6px;
    background-color: #fff;
    width: 45vw;
    height: 8vh;
    align-items: center;
    gap: 20px;
`

export const CardTime = styled.div`
    background-color: #ECF3FD;
    color: #2E6FF2;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    padding: 1.5%;
`

export const CardData = styled.div`
    width: ${(props) => props.$length}vw;
`

export const MyClasses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const ClassTableContent = styled.div`
    width: 45.2vw;
    border: 1px solid #cccccc;
    border-radius: 6px;
`

export const ClassTableTop = styled.div`
    background-color: #EBF1FF;
    display: flex;
    width: 45.05vw;
    height: 7vh;
    gap: 20px;
    align-items: center;
    padding: 3%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: 1px solid #cccccc;

`

export const ClassTableMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 45.2vw;
    overflow-y: auto;
    max-height: 40vh;
    height: 34vh;
`

export const TableName = styled.div`
    display: flex;
    align-items: center;
`

export const TopName = styled.span`
    padding-left: 6.5%;
`

export const TopLocation = styled.span`
    padding-left: 25%;
`

export const ClassTable = styled.div`
    display: flex;
    padding: 2%;
    border-bottom: 1px solid #cccccc;
    align-items: center;
    padding-left: 3.5%;
    position: relative;
    width: 45vw;
    height: 7vh;
`

export const TableData = styled.div`
    width: ${(props)=>props.$length}vw;
`

export const OptionButton = styled.img`
    width: 1vw;
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
    margin-top: 19%;
    margin-left:87%;
    
    button {
        border: 1px;
        padding: 12%;
        width: 4vw;
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
    margin-left: 15vw;
`

export const ClassBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 4em 0 0;
`


export const ClassList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;
    margin-top: 3%;
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
    //margin-left: 9%;
`

export const ClassTopMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 8.5%;
`

export const ClassListMain = styled.div`
    width: 32.5vw;
    height: 76vh;
    border: 1px solid #cccccc;
    border-radius: 30px;
    max-width: 120vw;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 9%;
`

export const DayP = styled.p`
    font-size: 20px;
`

export const CaretLeft = styled.button`
    display: flex;
    width: 17%;
    height: 98%;
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
    width: 17%;
    height: 98%;
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
    height: 28vh;
    width: 30vw;
    border-radius: 10px;
    padding: 2.5%;
    align-items: center;
    gap: 10px;
    overflow-y: auto;
    max-height: 50vh;
`

export const ClassList2 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EBF1FF;
    height: 28vh;
    width: 30vw;
    border-radius: 10px;
    padding-top: 2.5%;
    align-items: center;
    gap: 10px;
    overflow-y: auto;
    max-height: 50vh;

`

export const List1 = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    padding: 1rem 0;
    width: 28.5vw;
    align-items: center;
    padding-left: 1.3%;
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
    width: 28.5vw;
    align-items: center;
    padding-left: 1.3%;
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
    width: ${(props)=>props.$length}vw;
`

export const List2Data = styled.div`
    width: ${(props)=>props.$length}vw;
`
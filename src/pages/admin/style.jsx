import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;

`

export const Content = styled.div`
    width: 87%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 4% 2%;
`

export const AdminTop = styled.div`
    display: flex;
    width: 100%;
    gap: 50px;
`


export const AdminBottom = styled.div`
    display: flex;
    width: 100%;
    gap: 45px;
`

export const TodaySupervision = styled.div`
    display: flex;
    width: 38%;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
`

export const TodaySupervisionTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;

    h1 {
        flex-grow: 1;
    }

    p {
        color: gray;
        font-size: 15px;
        margin-top: 20px;
        display: flex;
        align-items: center;
    }

    img {
        width: 8px;
        margin-left: 5px;
    }
`;

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

export const AdminButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const AdminButtonsTop = styled.div`
    display: flex;
    gap: 20px;
    width: 40%;
`
export const Left2Img = styled.img`
    width: 7px;
`

export const SelfStudySupervision = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 15px;
    width: 15vw;
    height: 20vh;
    padding: 10% 15% 13% 7%;
    justify-content: center;
    cursor: pointer;

    button {
        width: 20px;
        background-color: #fff;
        border: 1.5px solid #2E6FF2;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        margin-left: 160px;
        height: 20px;
        margin-top: -33px;
    }

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    h3 {
        color: #2E6FF2;
        margin-top: 10px;
    }

    p {
        color: #5D5D5D;
        font-size: 13px;
    }
`


export const SelfStudyTime = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 15px;
    width: 15vw;
    height: 20vh;
    padding: 10% 15% 13% 7%;
    justify-content: center;
    cursor: pointer;

    button{
        width: 20px;
        background-color: #fff;
        border: 1.5px solid #2E6FF2;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        margin-left: 160px;
        height: 20px;
        margin-top: -33px;
    }

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease;
  
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }


    h3{
        color: #2E6FF2;
        margin-top: 10px;
    }

    p{
        color: #5D5D5D;
        font-size: 13px;
    }
`

export const ClassEdit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 15px;
    width: 15vw;
    height: 20vh;
    padding: 10% 15% 13% 7%;
    justify-content: center;
    cursor: pointer;

    button{
        width: 20px;
        background-color: #fff;
        border: 1.5px solid #2E6FF2;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        margin-left: 160px;
        height: 20px;
        margin-top: -33px;
    }

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease;
  
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }


    h3{
        color: #2E6FF2;
        margin-top: 10px;
    }

    p{
        color: #5D5D5D;
        font-size: 13px;
    }
`

export const StudentManage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 15px;
    width: 15vw;
    height: 20vh;
    padding: 10% 15% 13% 7%;
    justify-content: center;
    cursor: pointer;

    button{
        width: 20px;
        background-color: #fff;
        border: 1.5px solid #2E6FF2;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        margin-left: 160px;
        height: 20px;
        margin-top: -33px;
    }

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease;
  
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }


    h3{
        color: #2E6FF2;
        margin-top: 10px;
    }

    p{
        color: #5D5D5D;
        font-size: 13px;
    }
`

export const TeacherManage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 15px;
    width: 15vw;
    height: 20vh;
    padding: 10% 15% 13% 7%;
    justify-content: center;
    cursor: pointer;

    button{
        width: 20px;
        background-color: #fff;
        border: 1.5px solid #2E6FF2;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        margin-left: 160px;
        height: 20px;
        margin-top: -33px;
    }

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease;
  
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }


    h3{
        color: #2E6FF2;
        margin-top: 10px;
    }

    p{
        color: #5D5D5D;
        font-size: 13px;
    }
`

export const AdminButtonsBottom = styled.div`
    display: flex;
    gap: 20px;
    width: 40%;
`

export const SelfStudy = styled.img`
    width: 40px;
`

export const AfterSchoolClass = styled.img`
    width: 40px;
`

export const Supervision = styled.img`
    width: 40px;
`

export const Teacher = styled.img`
    width: 40px;
`

export const Student = styled.img`
    width: 40px;
`

export const SupervisionTotal = styled.div`
    display: flex;
    border: 2.5px solid #F2F3F6;
    border-radius: 15px;
    width: 45vw;
    height: 35vh;
    flex-direction: column;
`

export const SupervisionTotalTop = styled.div`
    display: flex;
    height: 8vh;
    justify-content: space-between; 
    padding: 3%;
    align-items: center;
    border-bottom: 2.5px solid #F2F3F6;

    p {
        cursor: pointer;
    }
`

export const SupervisionTotalMain = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-auto-flow: column;
    width: 100%;
    position: relative;
    
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 2px;
        background-color: #F2F3F6;
        transform: translateX(-50%);
    }
`

export const SupervisionTotalRow = styled.div`
    height: 6.6vh;
    align-items: center;
    padding: 0% 6.5%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: ${({ $isLast }) => ($isLast ? 'none' : '2px solid #F2F3F6')};
`

export const SupervisionRank = styled.div`
    width: 3vw;
`

export const SupervisionTeacher = styled.div`
    width: 15vw;
`

export const SupervisionCount = styled.div`
    text-align: center;
    width: 3.5vw;
`

export const LeaveStudentTop = styled.div`
    display: flex;
    height: 8vh;
    align-items: center;
    padding: 3% 5%;
    border-bottom: 2.5px solid #F2F3F6;
    justify-content: space-between;
`

export const LeaveStudent = styled.div`
    display: flex;
    flex-direction: column;
    border: 2.5px solid #F2F3F6;
    border-radius: 15px;
    width: 35vw;
    height: 35vh;
`

export const LeaveStudentMain = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 1000vh;
    overflow-y: auto;
`
export const LeaveStudentRow = styled.div`
    display: flex;
    padding: 5%;
    width: 34.5vw;
    height: 6.5vh;
    align-items: center;
    border-bottom: ${({ $isLast }) => ($isLast ? 'none' : '2px solid #F2F3F6')};
    gap: 20px;
    justify-content: space-between;
`;

export const LeaveStudentDate = styled.div`
    display: flex;
`;

export const LeaveStudentData = styled.div`
    display: flex;
`;

export const Confirm = styled.button`
    width: 4.5vw;
    height: 3vh;
    background-color: #F87067;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
`;
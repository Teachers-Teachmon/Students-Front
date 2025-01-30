import styled from "styled-components";

export const AfterSchoolContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    width: 85%;
    height: 100%;
    gap: 50px;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 50%;
    padding: 3%;
    margin-top: 30px;
`;

export const TodayClasses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 5% 0% 0% 0%;
    width: 50%;
`;

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
`;

export const CardTime = styled.div`
    background-color: #ECF3FD;
    color: #2E6FF2;
    display: flex;
    width: 70px;
    height: 30px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const CardData = styled.div`
    width: ${(props) => props.$length}px;
`;

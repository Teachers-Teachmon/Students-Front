import styled from "styled-components";
import SchoolSky from '../../assets/SchoolSky.png'

export const MainContainer = styled.div`
    display: flex;
`

export const MainContent = styled.div`
    width: 87%;
    padding: 2% 2% 0 2%;
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.$isFullscreen ? "1rem" : "0")};
    @media (max-width: 400px) {
        width: 100%;
        gap: 0.4rem;
    }
`

export const MainTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SelfStudySupCnt = styled.div`
    margin-top: 5px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    width: 70%;
`

export const ProgressBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #6F6F6F;

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`

export const MainMiddle = styled.div`
    margin-top: 0.5%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;

    @media (max-width: 400px) {
        flex-direction: column;
        gap: 1rem;
    }
`

export const NextSup = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2%;
    color: white;
    width: ${(props) => (props.$isFullscreen ? "30%" : "28%")};
    background-image: url(${SchoolSky});
    background-color: rgba(4, 4, 4, 0.7);
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    padding-left: 2%;
    overflow: hidden;

    h3 {
        white-space: nowrap;
    }

    @media (max-width: 400px) {
        width: 90%;
    }
`

export const NexSupLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media screen and (min-width: 1920px) {
        font-size: 1.5rem;
    }

    @media (max-width: 400px) {
        padding: 1rem;
    }
`

export const NextSupDate = styled.div`
    font-size: 3.4rem;
    font-weight: 700;
    font-style: italic;
    white-space: nowrap;

    @media screen and (min-width: 1920px) {
        font-size: 5.5rem;
    }
`

export const GoToSupBtn = styled.button`
    padding: 8.5%;
    margin-top: ${(props) => (props.$isFullscreen ? "70%" : "59%")};
    color: white;
    display: flex;
    gap: 7px;
    font-size: 20px;
    font-weight: 600;
    align-items: center;
    border: none;
    border-radius: 40px 0px 0px 0px;
    background-color: #2E6FF2;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
        background-color: #1E5BD1;
    }

    @media (max-width: 400px) {
        display: none;
    }
`

export const StudentInfoWrap = styled.div`
    padding: 0 1%;
    border-radius: 30px;
`

export const StudentInfoHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr repeat(3, 1fr);
    justify-items: center;
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 5%;
    margin-bottom: 3%;
    border-radius: 10px;

    &:not(:first-child) {
        text-align: center;
    }
`

export const StudentInfoContent = styled.div`
    background-color: #F9F9F9;
    padding: 3% 3%;
    border-radius: 27px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr repeat(3, 1fr);
    padding: ${(props) => (props.$isFullscreen ? "0.9rem" : "0.8rem")};
    background-color: white;
    border-radius: 10px;
    justify-items: center;

    div {
        font-size: 1.0rem;
        color: #333;
        &:not(:first-child) {
            text-align: center;
        }
    }

    &:not(:last-child) {
        margin-bottom: 0.95rem;
    }
`

export const MainBottom = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1%;

    @media (max-width: 400px) {
        margin-top: 6%;
        flex-direction: column;
        gap: 2rem;
    }
`

export const BottomLeft = styled.div`
    width: 50%;
    margin-right: 2%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 400px) {
        width: 100%;
    }
`

export const BottomLeftHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
    position: sticky;
    top: 0;
`;

export const BottomRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 400px) {
        width: 100%;
    }
`

export const BottomLeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #F9F9F9;
    border-radius: 20px;
    padding: 2%;
    overflow-y: auto;
    height: 90%;
`

export const NoChange = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    font-weight: 500;
    font-size: 1.2rem;
`;

export const ChangeWrap = styled.div`
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ChangeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
`;

export const ChangeSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    text-align: center;

    p:first-child {
        text-align: center;
        font-weight: 500;
    }
    p:not(:first-child) {
        font-size: 14px;
        color: #444;
    }
`;

export const RotateIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0 0.6rem;
`;

export const DetailButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  &:hover {
    text-decoration: underline;
  }
`;

export const BottomRightContent = styled.div`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
`

export const TeacherListTop = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #C8DBFF;
    padding: ${(props) => (props.$isFullscreen ? "1rem" : "0.36rem")};
`

export const TeacherListContent = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: center;
    background: #FAFAFB;
`

export const TeacherTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    background-color: white;
    border-bottom: 1px solid #E2E2E2;
    padding: 0.5rem;

    p {
        margin: 0;
        padding: 0.5rem;
    }
`

export const CalendarWrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    max-height: 35.95vh;
    overflow-y: auto;
    padding-right: 0.5rem;

    @media (max-width: 400px) {
        width: 100%;
        max-height: 100%;
    }
`

export const CalendarHeader = styled.div`
    display: flex;
    margin-bottom: 0.3rem;
    position: relative;
`;

export const Control = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7%;
    color: #667289;
    font-size: 1.4rem;
    font-weight: 600;
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    div {
        text-align: center;
        white-space: nowrap;
    }
    
    @media (max-width: 400px) {
        transform: translateX(-5%);
    }
`;

export const Division = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 0.8rem;
    color: black;
    font-weight: normal;
    
    div {
        display: flex;
        align-items: center;
    }
`;

export const Weekdays = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 0.5rem;
`;

export const Weekday = styled.div`
    text-align: center;
    font-weight: bold;
    color: #6c757d;
`;

export const Calendar = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const CalendarDay = styled.div`
    background: ${(props) => props.$supervision && props.$afterSchool ? 'linear-gradient(to right, #DAFFD7 50%, #C8DBFF 50%)' : props.$supervision ? '#DAFFD7' : props.$afterSchool ? '#C8DBFF' : ''};
    border: 1px solid #e2e2e2;
    padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    height: 6vh;
    display: flex;
    justify-content: space-between;
    align-items: start;

    span {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.1rem;
    }
    
    @media (max-width: 400px) {
        padding: 0;
    }
`

export const Day = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.$isCurrentMonth ? '#333' : '#999'};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`

export const ScheduleMarker = styled.div`
  width: 20px;
  height: 20px;
  font-size: 0.9rem;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    width: 12px;
    height: 12px;
  }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    width: 60vw;
    border-radius: 10px;
    padding: ${(props) => props.$padding}rem;

    @media (max-width: 400px) {
        width: 100vw;
    }
`
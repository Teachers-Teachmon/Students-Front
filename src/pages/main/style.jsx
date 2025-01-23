import styled from "styled-components";
import SchoolSky from '../../assets/SchoolSky.png'

export const MainContainer = styled.div`
    display: flex;
`

export const MainContent = styled.div`
    width: 85%;
    padding: 2%;
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
`

export const MainMiddle = styled.div`
    margin-top: 1%;
    display: flex;
    gap: 20px;
    align-items: center;
`

export const NextSup = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2%;
    color: white;
    width: 30%;
    background-image: url(${SchoolSky});
    background-color: rgba(4, 4, 4, 0.7);
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    padding-left: 2%;
    overflow: hidden;
`

export const NexSupLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const NextSupDate = styled.div`
    font-size: 4rem;
    font-weight: 700;
    font-style: italic;
`

export const GoToSupBtn = styled.button`
    padding: 8.5%;
    margin-top: 70%;
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
    &:hover {
        background-color: #1E5BD1;
    }
`

export const StudentInfo = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const StudentInfoWrap = styled.div`
    padding: 0 3% 2% 3%;
    background-color: #EBF1FF;
    border-radius: 30px;
`

export const StudentInfoHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr repeat(3, 1fr);
    background-color: #eaf2ff;
    font-weight: 600;
    font-size: 1.3rem;
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr repeat(3, 1fr);
    text-align: center;
    padding: 1rem;
    background-color: white;
    margin-bottom: 1rem;
    border-radius: 10px;

    div {
        font-size: 1rem;
        color: #333;
    }
`

export const MainBottom = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1%;
`

export const BottomLeft = styled.div`
    width: 50%;
    margin-right: 2%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BottomRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BottomLeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #F9F9F9;
    border-radius: 30px;
    padding: 2%;
    overflow-y: auto;
`

export const ChangeWrap = styled.div`
    display: flex;
    gap: 4rem;
`;

export const ChangeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
`;

export const ChangeSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

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
    border-radius: 30px;
    overflow: hidden;
`

export const TeacherListTop = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #C8DBFF;
    padding: 1rem;

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
    width: 50%;
    border-radius: 10px;
    padding: 2rem;
`
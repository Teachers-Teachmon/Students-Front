import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

`

export const MainContent = styled.div`
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-around;
    width: 85%;
`;

export const CalendarWrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    max-height: 760px;
    overflow-y: auto;
    padding-right: 0.5rem;
`

export const CalendarHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.3rem;
    gap: 7%;
    margin-bottom: 1rem;
    color: #667289;
    font-size: 1.5rem;
    font-weight: 600;

    button {
        width: 2.7rem;
        height: 2.7rem;
        color: #667289;
        background: none;
        border: none; 
        font-size: 2rem;
        cursor: pointer;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
`;

export const Weekdays = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 1rem;
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
    // background-color: ${(props) => (props.isCurrentMonth ? '#fff' : '#f1f1f1')};
    background-color: ${(props) => props.isSupervised ? '#E3EFFF' : props.isCurrentMonth ? '#fff' : '#f1f1f1'};
    border: 1px solid #e2e2e2;
    padding: 0.5rem;
    aspect-ratio: 1; // 이거 정사각형으로 해주는거임
    display: flex;
    flex-direction: column;
    align-items: end;
`

export const ScheduleItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    border-radius: 5px;
    border: 1px solid ${(props) => 
        props.period === '7교시' ? '#F87067' :
        props.period === '8~9교시' ? '#2D931B' :
        props.period === '10~11교시' ? '#2E6FF2' : '#000'};
    background-color: ${(props) => 
        props.period === '7교시' ? '#F9E4E2' :
        props.period === '8~9교시' ? '#DAFFD7' :
        props.period === '10~11교시' ? '#C8DBFF' : '#fff'};

    span {
        color: ${(props) => 
            props.period === '7교시' ? '#F87067' :
            props.period === '8~9교시' ? '#2D931B' :
            props.period === '10~11교시' ? '#2E6FF2' : '#000'};
        text-align: center;
    }
`

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Day = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    text-align: center;
    line-height: 1.5rem;
    font-weight: 600;
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
`;
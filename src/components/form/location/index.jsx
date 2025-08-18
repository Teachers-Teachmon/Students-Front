import styled from "styled-components";
import Map from "../../formMap/index.jsx";
import {useGetMovement} from "../../../hooks/useData.js";
import Layout from "../../../pages/manage/layout.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import useDay from "../../../zustand/day.js";

export default function Location() {
  const location = useLocation();
  const navigate = useNavigate();
  const {day} = useDay();
  const {data : leaveSeat, isLoading} = useGetMovement(day);
  if(!location?.state?.period){
    navigate("/manage/form/time")
    return null
  }
  if(isLoading) return <div>Loading...</div>
  return (
    <Layout none={true}>
      <LeaveSeatContainer>
        <Map LeaveData={leaveSeat} period={location.state.period}/>
      </LeaveSeatContainer>
    </Layout>
  )
}

const LeaveSeatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F7F7F9;
  padding: 1.5rem 3rem;
    overflow: hidden;
  height: 100vh;
`;

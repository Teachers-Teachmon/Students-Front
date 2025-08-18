import * as S from "./style.jsx";
import DateInput from "../../../components/dateInput";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import BackArrow from "../../../assets/Arrow.svg"
import Layout from "../../../pages/manage/layout.jsx";
import SquareBtn from "../../button/square/index.jsx";

export default function Time() {
  const [isTime,  setTime] = useState([
    false, false, false, false, false
  ]);
  const handleChangeTime = (value) => {
    let newTime = [false, false, false, false, false];
    newTime[value] = true;
    setTime(newTime);
  }
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

  const handleTime = () => {
    let period = "";
    const time = isTime.findIndex((value) => value);
    if (time === -1) {
      alert("시간을 선택해주세요")
      return
    }
    else if(time === 0) period = "SEVEN";
    else if(time === 1) period = "EIGHT_NINE";
    else if(time === 2) period = "TEN_ELEVEN";
    else if(time === 3) period = "EIGHT_ELEVEN";
    else if(time === 4) period = "SEVEN_ELEVEN";

    navigate("/manage/form/location", {state: {period: period}})
  }

  return (
    <Layout none={true}>
    <S.TimeContainer>
      <S.ImgBox onClick={handleBack}>
        <img src={BackArrow}  alt="backIcon" />
      </S.ImgBox>
      <S.Content>
        <S.Head>
        <h2>시간을 설정해주세요</h2>
        <SquareBtn name={"돌아가기"} On={()=>navigate('/manage/record', {state: 1})} status={true} />
        </S.Head>
        <S.DateBox>
          <S.DateTitle>날짜</S.DateTitle>
          <DateInput  />
        </S.DateBox>
        <S.DateBox>
          <S.DateTitle>시간</S.DateTitle>
          <S.DateTitle style={{fontSize: "1.2rem"}}>단일</S.DateTitle>
          <S.TimeBox>
            <S.TimeBtn
              onClick={()=> {
                handleChangeTime(0)
              }}
              $status={isTime[0]}
            >7교시</S.TimeBtn>
            <S.TimeBtn
              onClick={()=> {
                handleChangeTime(1)
              }}
              $status={isTime[1]}
            >8~9교시</S.TimeBtn>
            <S.TimeBtn

              onClick={()=> {
                handleChangeTime(2)
              }}
              $status={isTime[2]}
            >10~11교시</S.TimeBtn>
          </S.TimeBox>
          <S.DateTitle style={{fontSize: "1.2rem"}}>모음</S.DateTitle>
          <S.TimeBox>
            <S.TimeBtn
              onClick={()=> {
                handleChangeTime(3)
              }}
              $status={isTime[3]}
            >8~11교시</S.TimeBtn>
            <S.TimeBtn
              onClick={()=> {
                handleChangeTime(4)
              }}
              $status={isTime[4]}
            >7~11교시</S.TimeBtn>
          </S.TimeBox>
        </S.DateBox>
      </S.Content>
      <S.Btn onClick={handleTime}>
        다음으로
      </S.Btn>
    </S.TimeContainer>
    </Layout>
  )
}
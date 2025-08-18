import * as S from '../style.jsx';
import {useNavigate} from "react-router-dom";

export default function Second({LeaveData, period}) {
  const elements = [
    { id: 1, name: "공간-Arisori", x: 23, y: 13, width: 5, height: 6, whether : true},
    { id: 2, name: "취업상담실", x: 28, y: 13, width: 3, height: 6, whether : true},
    { id: 3, name: "학생지도실", x: 31, y: 13, width: 3, height: 6, whether : true},
    { id: 4, name: "전문교무실", x: 34, y: 13, width: 8, height: 6, whether : true},
    { id: 5, name: "전산관리실", x: 42, y: 13, width: 2, height: 6, whether : true},
    { id: 6, name: "계단", x: 44, y: 13, width: 2, height: 6},
    { id: 7, name: "프로그래밍실1", x: 46, y: 13, width: 8, height: 6, whether : true},
    { id: 8, name: "학습자료실(2층)", x: 54, y: 13, width: 3, height: 6, whether : true},
    { id: 9, name: "응용프로그래밍개발실", x: 57, y: 13, width: 8, height: 6, whether : true},
    { id: 10, name: "위클래스실", x: 65, y: 13, width: 6, height: 6, whether : true},
    { id: 11, name: "일반회의실", x: 71, y: 13, width: 6, height: 6, whether : true},
    { id: 12, name: "계단", x: 77, y: 13, width: 2, height: 6},
    { id: 13, name: "크리에이티브존(2층)", x: 79, y: 10.5, width: 9, height: 5,  whether:true},
    { id: 14, name: "여교사휴게실", x: 81, y: 15.5, width: 5, height:4,  whether:true},
    { id: 15, name: "sw카페", x: 81, y: 19, width: 5, height: 4, whether : true},
    { id: 16, name: "남교사휴게실", x: 81, y: 23, width: 5, height: 4,  whether:true},
    { id: 17, name: "일반교무실", x: 81, y: 27, width: 5, height: 16, whether : true},
    { id: 18, name: "성적처리실", x: 81, y: 43, width: 5, height: 4,  whether:true},
    { id: 19, name: "방송실", x: 81, y: 46.5, width: 5, height: 5, whether : true},
    { id: 20, name: "스튜디오", x: 81, y: 51.5, width: 5, height: 4.5, whether : true},
    { id: 21, name: "학년지원실(2학년)", x: 81, y: 55.5, width: 5, height: 4.5, whether : true},
    { id: 22, name: "2-1", x: 81, y: 60, width: 5, height: 7,  whether:true},
    { id: 23, name: "2-2", x: 81, y: 67, width: 5, height: 7,  whether:true},
    { id: 24, name: "계단", x: 81, y: 74, width: 5, height: 3.5},
    { id: 25, name: "2-3", x: 81, y: 77.5, width: 5, height: 7,  whether:true},
    { id: 26, name: "2-4", x: 81, y: 84.5, width: 5, height: 7,  whether:true},
    { id: 27, name: "복도", x: 23, y: 10.5, width: 56, height: 2.5},
    { id: 28, name: "복도", x: 86, y: 15.5, width: 2, height: 76},
    { id: 29, name: "", x: 12, y: 10.5, width: 11, height: 60},
    { id: 30, name: "BSSM GYM", x: 12, y: 46, width: 4, height: 16.5, whether : true},
    { id: 31, name: "임베디드소프트웨어개발과연구실", x: 12, y: 62.5, width: 4, height: 5, whether : true},
    { id: 32, name: "계단", x: 12, y: 67.5, width: 4, height: 3},
    { id: 33, name: "계단", x: 12, y: 43, width: 4, height: 3},
    { id: 34, name: "로봇소프트웨어개발실", x: 18, y: 46.5, width: 5, height: 8, whether : true},
    { id: 35, name: "시스템프로그래밍실", x: 18, y: 54.5, width: 5, height: 8, whether : true},
    { id: 36, name: "정보통신기기소프트웨어개발실", x: 18, y: 62.5, width: 5, height: 8, whether : true},
    { id: 37, name: "글누리", x: 12, y: 26, width: 5, height: 13, whether : true},
    { id: 38, name: "방풍실", x: 23, y: 21, width: 5, height: 6},
    { id: 39, name: "글가람", x: 12, y: 14, width: 5, height: 7, whether : true},
    { id: 40, name: "방풍실", x: 12, y: 21, width: 5, height: 5},

  ];
  const filterPeriod = (period) => {
    if(period==="SEVEN"){
      return ["7교시"]
    }
    if(period==="EIGHT_NINE"){
      return ["8~9교시"]
    }
    if(period==="TEN_ELEVEN"){
      return ["10~11교시"]
    }
    if(period==="EIGHT_ELEVEN"){
      return ["8~9교시", "10~11교시"]
    }
    if(period==="SEVEN_ELEVEN"){
      return ["7교시", "8~9교시", "10~11교시"]
    }
    return [];
  }
  const setLength = (period) => {
    if(period==="SEVEN" || period==="EIGHT_NINE" || period==="TEN_ELEVEN"){
      return 1
    }
    if(period==="EIGHT_ELEVEN" ){
      return 2
    }
    if(period==="SEVEN_ELEVEN"){
      return 3
    }
  }
  const leaveList = LeaveData.map(elem => (elem.place));
  const periodList = LeaveData.map(elem => (elem.period));
  const len = setLength(period);
  const selectPeriod = filterPeriod(period);
  const navigate = useNavigate()
  const handleClick = (place )=>{
    navigate("/manage/form/write", {state: {place, period}})
  }

  const filterLeave = (place, selectPeriod) => {
    let isPass = false;

    if(len === 1){
      leaveList.forEach((item, idx) => {
        if(item === place && periodList[idx] === selectPeriod[0]) isPass = true;
      });
    }

    if(len === 2){
      leaveList.forEach((item, idx) => {
        if(item === place && (periodList[idx] === selectPeriod[0] || periodList[idx] === selectPeriod[1])) {
          isPass = true;
        }
      });
    }

    if(len === 3){
      leaveList.forEach((item, idx) => {
        if(item === place && (
          periodList[idx] === selectPeriod[0] ||
          periodList[idx] === selectPeriod[1] ||
          periodList[idx] === selectPeriod[2]
        )) {
          isPass = true;
        }
      });
    }

    return isPass;
  };
  return (
    elements.map((el) => {
      const whether = filterLeave(el.name, selectPeriod);
      console.log(selectPeriod)
      return(<S.Element
        onClick={()=>{
          if(whether){
            return alert("이미 이석이 되어있는 자리입니다. 이석수정을 이용해 주세요")
          }
          if(el.whether){
            handleClick(el.name)
          }
        }}
        key={el.id}
        $left={el.x}
        $top={el.y}
        $width={el.width}
        $height={el.height}
        $cursor={el.whether}
        $background={whether? "#F87067" : el.whether ? "#84FFC7" : "#DDDDDD"}
      >
        {el.name}
      </S.Element>)
    })
  )
}




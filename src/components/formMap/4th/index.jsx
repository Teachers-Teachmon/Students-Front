import * as S from '../style.jsx';
import {useNavigate} from "react-router-dom";

export default function Fourth({LeaveData, period} ){
  const elements = [
    { id: 1, name: "", x: 12, y: 10.5, width: 16, height: 12.5 },
    { id: 2, name: "X", x: 12, y: 10.5, width: 11, height:8.5},
    { id: 3, name: "X", x: 25, y: 10.5, width: 54, height: 8.5},
    { id: 4, name: "X", x: 4, y: 10.5, width: 8, height: 12.5},
    { id: 5, name: "X", x: 81, y: 15.5, width: 7, height: 76},
    { id: 6, name: "X", x: 79, y: 10.5, width: 9, height: 5},
    { id: 7, name: "기숙사(4층)", x: 12, y: 23, width: 16, height: 47.5,  whether:true},
    { id: 8, name: "베르실7", x: 12, y: 19, width: 5.5, height: 4, whether:true},
    { id: 9, name: "베르실8", x: 17.5, y: 19, width: 5.5, height: 4, whether:true },
    { id: 10, name: "베르실9", x: 25, y: 19, width: 3, height: 4 , whether:true},

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

import * as S from '../style.jsx';
import {useNavigate} from "react-router-dom";

export default function First({LeaveData, period} ) {
  const elements = [
    { id: 1, name: "응용프로그래밍화면구현실", x: 23, y: 13, width: 7, height: 6, whether:true},
    { id: 2, name: "학습준비실", x: 30, y: 13, width: 3, height: 6 , whether:true},
    { id: 3, name: "과학실", x: 33, y: 13, width: 8, height: 6 , whether:true},
    { id: 4, name: "과학준비실", x: 41, y: 13, width: 3, height: 6 , whether:true},
    { id: 5, name: "계단", x: 44, y: 13, width: 2, height: 6 },
    { id: 6, name: "프로그래밍실2", x: 46, y: 13, width: 8, height: 6 , whether:true},
    { id: 7, name: "학습자료실(1층)", x: 54, y: 13, width: 3, height: 6 , whether:true},
    { id: 8, name: "인공지능모델링실2", x: 57, y: 13, width: 8, height: 6 , whether:true},
    { id: 9, name: "학생자치회실", x: 65, y: 13, width: 3, height: 6 , whether:true},
    { id: 10, name: "학부모회실", x: 68, y: 13, width: 3, height: 6 , whether:true},
    { id: 11, name: "보건실", x: 71, y: 13, width: 6, height: 6  , whether:true},
    { id: 12, name: "계단", x: 77, y: 13, width: 2, height: 6 },
    { id: 13, name: "크리에이티브존(1층)", x: 79, y: 10.5, width: 9, height: 5},
    { id: 14, name: "기획회의실", x: 81, y: 15.5, width: 5, height: 12 , whether:true},
    { id: 15, name: "교장실", x: 81, y: 27.5, width: 5, height: 8 , whether:true},
    { id: 16, name: "행정지원실", x: 81, y: 35.5, width: 5, height: 8, whether:true},
    { id: 17, name: "방풍실", x: 81, y: 43.5, width: 5, height: 8 },
    { id: 18, name: "문서관리실", x: 81, y: 51.5, width: 5, height: 4.5 , whether:true},
    { id: 19, name: "학년지원실(1학년)", x: 81, y: 56, width: 5, height: 4 , whether:true},
    { id: 20, name: "1-1", x: 81, y: 60, width: 5, height: 7 ,  whether:true},
    { id: 21, name: "1-2", x: 81, y: 67, width: 5, height: 7 ,  whether:true },
    { id: 22, name: "계단", x: 81, y: 74, width: 5, height: 3.5 },
    { id: 23, name: "1-3", x: 81, y: 77.5, width: 5, height: 7 ,  whether:true},
    { id: 24, name: "1-4", x: 81, y: 84.5, width: 5, height: 7 ,  whether:true},
    { id: 25, name: "복도", x: 23, y: 10.5, width: 56, height: 2.5 },
    { id: 26, name: "복도", x: 86, y: 15.5, width: 2, height: 76  },
    { id: 27, name: "운동장", x: 37, y: 35.5, width: 35, height: 28 , whether:true},
    { id: 28, name: "주차장", x: 56, y: 70, width: 20, height: 25 },
    { id: 29, name: "", x: 30, y: 77.5, width: 23, height: 10.5 },
    { id: 30, name: "", x: 10.5, y: 37, width: 17, height: 36 },
    { id: 31, name: "빅데이터분석실", x: 33.7, y: 80.5, width: 5.5, height: 7.5, whether:true},
    { id: 32, name: "인공지능모델링실1", x: 39.2, y: 80.5, width: 5.5, height: 7.5 , whether:true},
    { id: 33, name: "네트워크프로그래밍실", x: 44.7, y: 80.5, width: 5.5, height: 7.5 , whether:true},
    { id: 34, name: "소프트웨어개발과연구실", x: 50.2, y: 80.5, width: 2.8, height: 7.5 , whether:true},
    { id: 35, name: "다목적홀", x: 10.5, y: 47, width: 7.5, height: 22 , whether:true},
    { id: 36, name: "계단", x: 10.5, y: 44, width: 5, height: 3 },
    { id: 37, name: "계단", x: 10.5, y: 69, width: 5, height: 4 },
    { id: 38, name: "강사대기실", x: 18, y: 50, width: 2.5, height: 5 , whether:true},
    { id: 39, name: "음악실", x: 18, y: 55, width: 2.5, height: 5 , whether:true},
    { id: 40, name: "음악준비실", x: 18, y: 60, width: 2.5, height: 5, whether:true},
    { id: 41, name: "외부", x: 90, y: 10, width: 8, height: 80 , whether:true},
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




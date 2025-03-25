import * as S from '../../../pages/manage/location/style.jsx'
import useLocation from "../../../zustand/locationDetail.js";

export default function First({width, set, data, fake}) {
    const elements = [
        { id: 1, name: "창의디자인실", x: 23, y: 13, width: 7, height: 6},
        { id: 2, name: "학습준비실", x: 30, y: 13, width: 3, height: 6 },
        { id: 3, name: "과학실", x: 33, y: 13, width: 8, height: 6 },
        { id: 4, name: "과학준비실", x: 41, y: 13, width: 3, height: 6 },
        { id: 5, name: "계단", x: 44, y: 13, width: 2, height: 6 },
        { id: 6, name: "프로그래밍실2", x: 46, y: 13, width: 8, height: 6 },
        { id: 7, name: "학습자료실(1층)", x: 54, y: 13, width: 3, height: 6 },
        { id: 8, name: "인공지능개발실", x: 57, y: 13, width: 8, height: 6 },
        { id: 9, name: "학생자치회실", x: 65, y: 13, width: 3, height: 6 },
        { id: 10, name: "학부모회실", x: 68, y: 13, width: 3, height: 6 },
        { id: 11, name: "보건실", x: 71, y: 13, width: 6, height: 6  },
        { id: 12, name: "계단", x: 77, y: 13, width: 2, height: 6 },
        { id: 13, name: "크리에이티브존(1층)", x: 79, y: 10.5, width: 9, height: 5 },
        { id: 14, name: "기획회의실", x: 81, y: 15.5, width: 5, height: 12 },
        { id: 15, name: "교장실", x: 81, y: 27.5, width: 5, height: 8 },
        { id: 16, name: "행정지원실", x: 81, y: 35.5, width: 5, height: 8},
        { id: 17, name: "방풍실", x: 81, y: 43.5, width: 5, height: 8 },
        { id: 18, name: "문서관리실", x: 81, y: 51.5, width: 5, height: 4.5 },
        { id: 19, name: "학년지원실(1학년)", x: 81, y: 56, width: 5, height: 4 },
        { id: 20, name: "1-1", x: 81, y: 60, width: 5, height: 7 },
        { id: 21, name: "1-2", x: 81, y: 67, width: 5, height: 7 },
        { id: 22, name: "계단", x: 81, y: 74, width: 5, height: 3.5 },
        { id: 23, name: "1-3", x: 81, y: 77.5, width: 5, height: 7 },
        { id: 24, name: "1-4", x: 81, y: 84.5, width: 5, height: 7 },
        { id: 25, name: "복도", x: 23, y: 10.5, width: 56, height: 2.5 },
        { id: 26, name: "복도", x: 86, y: 15.5, width: 2, height: 76  },
        { id: 27, name: "운동장", x: 37, y: 35.5, width: 35, height: 28 },
        { id: 28, name: "주차장", x: 56, y: 70, width: 20, height: 25 },
        { id: 29, name: "", x: 30, y: 77.5, width: 23, height: 10.5 },
        { id: 30, name: "", x: 10.5, y: 37, width: 17, height: 36 },
        { id: 31, name: "모바일웹개발실", x: 33.7, y: 80.5, width: 5.5, height: 7.5},
        { id: 32, name: "소프트웨어공학실", x: 39.2, y: 80.5, width: 5.5, height: 7.5 },
        { id: 33, name: "데이터네트워크실", x: 44.7, y: 80.5, width: 5.5, height: 7.5 },
        { id: 34, name: "소프트웨어개발과연구실", x: 50.2, y: 80.5, width: 2.8, height: 7.5 },
        { id: 35, name: "다목적홀", x: 10.5, y: 47, width: 7.5, height: 22 },
        { id: 36, name: "계단", x: 10.5, y: 44, width: 5, height: 3 },
        { id: 37, name: "계단", x: 10.5, y: 69, width: 5, height: 4 },
        { id: 38, name: "강사대기실", x: 18, y: 52, width: 2.5, height: 4 },
        { id: 39, name: "음악실", x: 18, y: 56, width: 2.5, height: 5 },
        { id: 40, name: "음악준비실", x: 18, y: 61, width: 2.5, height: 4},
        { id: 41, name: "외부", x: 90, y: 10, width: 8, height: 80 },
    ];

    const setPlace = useLocation((state) => state.setPlace);
    if(fake){
        return(
            elements.map((el) => (
                    <S.Element
                        key={el.id}
                        $left={el.x}
                        $top={width > 400 ? el.y : el.y * 2}
                        $width={el.width}
                        $height={el.height}
                        $background={"#DDDDDD"}
                    >
                        {el.name}
                    </S.Element>
                )
            )
        )
    }
    return(
        elements.map((el) => {
            const status = data[el.name]
            return(
                <S.Element
                    onClick={()=>{
                        if(status) {
                            set(true)
                            setPlace(el.name)
                        }
                    }}
                    key={el.id}
                    $left={el.x}
                    $top={el.y}
                    $width={el.width}
                    $height={el.height}
                    $background={status && status.status === "이석" ? "#CCBCFF" : status && status.status === "자습" ? "#72FAAA" : "#DDDDDD" }
                    $cursor={status}
                >
                    {el.name}
                </S.Element>
            )
        })
    )
}




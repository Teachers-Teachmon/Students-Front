import * as S from '../../../pages/manage/location/style.jsx'
import useLocation from "../../../zustand/locationDetail.js";

export default function First({set, data}) {
    const elements = [
        { id: 1, name: "창의디자인실", x: 280, y: 100, width: 90, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 3, name: "학습준비실", x: 370, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 4, name: "과학실", x: 410, y: 100, width: 100, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 5, name: "과학준비실", x: 510, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 6, name: "계단", x: 550, y: 100, width: 30, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 7, name: "프로그래밍실2", x: 580, y: 100, width: 100, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 8, name: "학습자료실", x: 680, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 9, name: "인공지능개발실", x: 720, y: 100, width: 100, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 10, name: "학생자치회실", x: 820, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 11, name: "학부모회실", x: 860, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 12, name: "보건실", x: 900, y: 100, width: 80, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 13, name: "계단", x: 980, y: 100, width: 30, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 14, name: "크리에이티브존", x: 1010, y: 80, width: 110, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 15, name: "기획회의실", x: 1040, y: 120, width: 60, height: 90, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 16, name: "교장실", x: 1040, y: 210, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 17, name: "행정지원실", x: 1040, y: 270, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 18, name: "방풍실", x: 1040, y: 330, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 19, name: "문서관리실", x: 1040, y: 390, width: 60, height: 35, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 20, name: "학년지원실(1학년)", x: 1040, y: 425, width: 60, height: 35, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 21, name: "1-1", x: 1040, y: 460, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 22, name: "1-2", x: 1040, y: 520, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 23, name: "계단", x: 1040, y: 580, width: 60, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 24, name: "1-3", x: 1040, y: 610, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 25, name: "1-4", x: 1040, y: 670, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 26, name: "복도", x: 280, y: 80, width: 730, height: 20, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 27, name: "복도", x: 1100, y: 120, width: 20, height: 610, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 28, name: "운동장", x: 470, y: 270, width: 440, height: 230, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 29, name: "주차장", x: 710, y: 560, width: 250, height: 210, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 30, name: "", x: 150, y: 300, width: 200, height: 280, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 31, name: "", x: 370, y: 620, width: 300, height: 90, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 32, name: "모바일웹개발실", x: 425, y: 640, width: 70, height: 70, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 33, name: "소프트웨어 공학실", x: 495, y: 640, width: 70, height: 70, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 34, name: "데이터 네트워크실", x: 565, y: 640, width: 70, height: 70, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 35, name: "소프트웨어개발과연구실", x: 635, y: 640, width: 35, height: 70, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "다목적홀", x: 150, y: 390, width: 80, height: 160, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 37, name: "계단", x: 150, y: 550, width: 50, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 38, name: "계단", x: 150, y: 360, width: 50, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 39, name: "강사대기실", x: 230, y: 420, width: 35, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 40, name: "음악실", x: 230, y: 450, width: 35, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 41, name: "음악준비실", x: 230, y: 490, width: 35, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
    ];

    const setPlace = useLocation((state) => state.setPlace);
    const selectPlace = (data.map((item)=>{return item.place;}))

    return(
        elements.map((el) => (
                <S.Element
                    onClick={()=>{
                        if(selectPlace.includes(el.name)) {
                            set(true)
                            setPlace(el.name)
                        }
                    }}
                    key={el.id}
                    $left={el.x}
                    $top={el.y}
                    $width={el.width}
                    $height={el.height}
                    $color={selectPlace.includes(el.name)}
                    $cursor={selectPlace.includes(el.name)}
                >
                    {el.name}
                </S.Element>
            ))
    )
}




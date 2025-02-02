import * as S from '../../../pages/manage/location/style.jsx'
import useLocation from "../../../zustand/locationDetail.js";

export default function First({set, data}) {
    const elements = [
        { id: 1, name: "창의디자인실", x: 23, y: 13, width: 7, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 3, name: "학습준비실", x: 30, y: 13, width: 3, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 4, name: "과학실", x: 33, y: 13, width: 8, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 5, name: "과학준비실", x: 41, y: 13, width: 3, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 6, name: "계단", x: 44, y: 13, width: 2, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 7, name: "프로그래밍실2", x: 46, y: 13, width: 8, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 8, name: "학습자료실", x: 54, y: 13, width: 3, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 9, name: "인공지능개발실", x: 57, y: 13, width: 8, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 10, name: "학생자치회실", x: 65, y: 13, width: 3, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 11, name: "학부모회실", x: 68, y: 13, width: 3, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 12, name: "보건실", x: 71, y: 13, width: 6, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 13, name: "계단", x: 77, y: 13, width: 2, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 14, name: "크리에이티브존", x: 79, y: 10.5, width: 9, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 15, name: "기획회의실", x: 81, y: 15.5, width: 5, height: 12, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 16, name: "교장실", x: 81, y: 27.5, width: 5, height: 8, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 17, name: "행정지원실", x: 81, y: 35.5, width: 5, height: 8, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 18, name: "방풍실", x: 81, y: 43.5, width: 5, height: 8, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 19, name: "문서관리실", x: 81, y: 51.5, width: 5, height: 4.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 20, name: "학년지원실(1학년)", x: 81, y: 56, width: 5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 21, name: "1-1", x: 81, y: 60, width: 5, height: 7, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 22, name: "1-2", x: 81, y: 67, width: 5, height: 7, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 23, name: "계단", x: 81, y: 74, width: 5, height: 3.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 24, name: "1-3", x: 81, y: 77.5, width: 5, height: 7, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 25, name: "1-4", x: 81, y: 84.5, width: 5, height: 7, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 26, name: "복도", x: 23, y: 10.5, width: 56, height: 2.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 27, name: "복도", x: 86, y: 15.5, width: 2, height: 76, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 28, name: "운동장", x: 37, y: 35.5, width: 35, height: 28, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 29, name: "주차장", x: 56, y: 70, width: 20, height: 25, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 30, name: "", x: 30, y: 77.5, width: 23, height: 10.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 31, name: "", x: 10.5, y: 37, width: 17, height: 36, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 32, name: "모바일웹개발실", x: 33.7, y: 80.5, width: 5.5, height: 7.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 33, name: "소프트웨어 공학실", x: 39.2, y: 80.5, width: 5.5, height: 7.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 34, name: "데이터 네트워크실", x: 44.7, y: 80.5, width: 5.5, height: 7.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 35, name: "소프트웨어개발과연구실", x: 50.2, y: 80.5, width: 2.8, height: 7.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "다목적홀", x: 10.5, y: 47, width: 7.5, height: 22, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 37, name: "계단", x: 10.5, y: 44, width: 5, height: 3, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 38, name: "계단", x: 10.5, y: 69, width: 5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 39, name: "강사대기실", x: 18, y: 52, width: 2.5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 40, name: "음악실", x: 18, y: 56, width: 2.5, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 41, name: "음악준비실", x: 18, y: 61, width: 2.5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
    ];

    const setPlace = useLocation((state) => state.setPlace);

    return(
        elements.map((el) => (
                <S.Element
                    onClick={()=>{
                        if(Object.keys(data).includes(el.name)) {
                            set(true)
                            setPlace(el.name)
                        }
                    }}
                    key={el.id}
                    $left={el.x}
                    $top={el.y}
                    $width={el.width}
                    $height={el.height}
                    $color={Object.keys(data).includes(el.name)}
                    $cursor={Object.keys(data).includes(el.name)}
                >
                    {el.name}
                </S.Element>
            ))
    )
}




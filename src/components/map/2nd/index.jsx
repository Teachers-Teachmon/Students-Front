import * as S from '../../../pages/manage/location/style.jsx'
import useLocation from "../../../zustand/locationDetail.js";

export default function Second({set, data, fake}) {
    const elements = [
        { id: 1, name: "공간-Arisori", x: 23, y: 13, width: 5, height: 6},
        { id: 2, name: "취업상담실", x: 28, y: 13, width: 3, height: 6},
        { id: 3, name: "학생지도실", x: 31, y: 13, width: 3, height: 6},
        { id: 4, name: "전문교무실", x: 34, y: 13, width: 8, height: 6},
        { id: 5, name: "전산관리실", x: 42, y: 13, width: 2, height: 6},
        { id: 6, name: "계단", x: 44, y: 13, width: 2, height: 6},
        { id: 7, name: "프로그래밍실1", x: 46, y: 13, width: 8, height: 6},
        { id: 8, name: "학습자료실", x: 54, y: 13, width: 3, height: 6},
        { id: 9, name: "객체지향프로그래밍실", x: 57, y: 13, width: 8, height: 6},
        { id: 10, name: "위클래스실", x: 65, y: 13, width: 6, height: 6},
        { id: 11, name: "일반회의실", x: 71, y: 13, width: 6, height: 6},
        { id: 12, name: "계단", x: 77, y: 13, width: 2, height: 6},
        { id: 13, name: "크리에이티브존", x: 79, y: 10.5, width: 9, height: 5},
        { id: 14, name: "여교사휴게실", x: 81, y: 15.5, width: 5, height:4},
        { id: 15, name: "sw카페", x: 81, y: 19, width: 5, height: 4},
        { id: 16, name: "남교사휴게실", x: 81, y: 23, width: 5, height: 4},
        { id: 17, name: "일반교무실", x: 81, y: 27, width: 5, height: 16},
        { id: 18, name: "성적처리실", x: 81, y: 43, width: 5, height: 4},
        { id: 19, name: "방송실", x: 81, y: 46.5, width: 5, height: 5},
        { id: 20, name: "스튜디오", x: 81, y: 51.5, width: 5, height: 4.5},
        { id: 21, name: "학년지원실(2학년)", x: 81, y: 55.5, width: 5, height: 4.5},
        { id: 22, name: "2-1", x: 81, y: 60, width: 5, height: 7},
        { id: 23, name: "2-2", x: 81, y: 67, width: 5, height: 7},
        { id: 24, name: "계단", x: 81, y: 74, width: 5, height: 3.5},
        { id: 25, name: "2-3", x: 81, y: 77.5, width: 5, height: 7},
        { id: 26, name: "2-4", x: 81, y: 84.5, width: 5, height: 7},
        { id: 27, name: "복도", x: 23, y: 10.5, width: 56, height: 2.5},
        { id: 28, name: "복도", x: 86, y: 15.5, width: 2, height: 76},
        { id: 29, name: "", x: 12, y: 10.5, width: 11, height: 60},
        { id: 30, name: "BSSM GYM", x: 12, y: 46, width: 4, height: 16.5},
        { id: 31, name: "임베디드소프트웨어개발과연구실", x: 12, y: 62.5, width: 4, height: 5},
        { id: 32, name: "계단", x: 12, y: 67.5, width: 4, height: 3},
        { id: 33, name: "계단", x: 12, y: 43, width: 4, height: 3},
        { id: 34, name: "IOT자동제어실", x: 18, y: 46.5, width: 5, height: 8},
        { id: 35, name: "마이크로프로세서실", x: 18, y: 54.5, width: 5, height: 8},
        { id: 36, name: "임베디드시스템실", x: 18, y: 62.5, width: 5, height: 8},
        { id: 37, name: "글누리", x: 12, y: 26, width: 5, height: 13},
        { id: 38, name: "방풍실", x: 23, y: 21, width: 5, height: 6},
        { id: 39, name: "글가람", x: 12, y: 14, width: 5, height: 7},
        { id: 40, name: "방풍실", x: 12, y: 21, width: 5, height: 5},

    ];
    const setPlace = useLocation((state) => state.setPlace);
    if(fake){
        return(
            elements.map((el) => {
                return(
                    <S.Element
                        key={el.id}
                        $left={el.x}
                        $top={el.y}
                        $width={el.width}
                        $height={el.height}
                        $background={"#DDDDDD"}
                    >
                        {el.name}
                    </S.Element>
                )
            })
        )
    }
    return(
        data && elements.map((el) => {
            const status = data[el.name]
            return (<S.Element
                onClick={() => {
                    if (status) {
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
            </S.Element>)
        })
    )
}




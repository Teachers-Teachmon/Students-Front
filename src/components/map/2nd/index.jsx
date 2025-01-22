import * as S from '../../../pages/manage/location/style.jsx'
import useLocation from "../../../zustand/locationDetail.js";

export default function Second({set, data}) {
    const elements = [
        { id: 1, name: "공간-Arisori", x: 280, y: 100, width: 60, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 3, name: "취업상담실", x: 340, y: 100, width: 35, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 3, name: "학생지도실", x: 375, y: 100, width: 35, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 4, name: "전문교무실", x: 410, y: 100, width: 100, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 5, name: "전산관리실", x: 510, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 6, name: "계단", x: 550, y: 100, width: 30, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 7, name: "프로그래밍실1", x: 580, y: 100, width: 100, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 8, name: "학습자료실", x: 680, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 9, name: "객체지향프로그래밍실", x: 720, y: 100, width: 100, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 10, name: "위클래스실", x: 820, y: 100, width: 80, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 12, name: "일반회의실", x: 900, y: 100, width: 80, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 13, name: "계단", x: 980, y: 100, width: 30, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 14, name: "크리에이티브존", x: 1010, y: 80, width: 110, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 15, name: "기획회의실", x: 1040, y: 120, width: 60, height: 90, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 17, name: "여교사휴게실", x: 1040, y: 120, width: 60, height:30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 17, name: "sw카페", x: 1040, y: 150, width: 60, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 17, name: "남교사휴게실", x: 1040, y: 180, width: 60, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 16, name: "일반교무실", x: 1040, y: 210, width: 60, height: 110, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 17, name: "성적처리실", x: 1040, y: 320, width: 60, height: 35, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 18, name: "방송실", x: 1040, y: 355, width: 60, height: 35, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 19, name: "스튜디오", x: 1040, y: 390, width: 60, height: 35, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 20, name: "학년지원실(2학년)", x: 1040, y: 425, width: 60, height: 35, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 21, name: "2-1", x: 1040, y: 460, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 22, name: "2-2", x: 1040, y: 520, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 23, name: "계단", x: 1040, y: 580, width: 60, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 24, name: "2-3", x: 1040, y: 610, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 25, name: "2-4", x: 1040, y: 670, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 26, name: "복도", x: 280, y: 80, width: 730, height: 20, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 27, name: "복도", x: 1100, y: 120, width: 20, height: 610, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 30, name: "", x: 150, y: 80, width: 130, height: 500, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 31, name: "X", x: 370, y: 620, width: 300, height: 90, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "BSSM GYM", x: 150, y: 390, width: 50, height: 120, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 37, name: "임베디드 소프트웨어개발과 연구실", x: 150, y: 500, width: 50, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 37, name: "계단", x: 150, y: 550, width: 50, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 38, name: "계단", x: 150, y: 360, width: 50, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 39, name: "IOT 자동제어실", x: 220, y: 390, width: 60, height: 65, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 40, name: "마이크로 프로세서실", x: 220, y: 455, width: 60, height: 65, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 41, name: "임베디드 시스템실", x: 220, y: 520, width: 60, height: 60, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 42, name: "글누리", x: 150, y: 220, width: 60, height: 120, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 42, name: "방풍실", x: 150, y: 165, width: 60, height: 55, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 42, name: "글가람", x: 150, y: 110, width: 60, height: 55, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 42, name: "방풍실", x: 280, y: 165, width: 45, height: 55, backgroundColor: "#DDDDDD", cursor: "pointer" },

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




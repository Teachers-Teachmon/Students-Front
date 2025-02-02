import * as S from '../../../pages/manage/location/style.jsx'
import useLocation from "../../../zustand/locationDetail.js";

export default function Third({set, data}) {
    const elements = [
        { id: 30, name: "", x: 4, y: 10.5, width: 8, height: 12.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 30, name: "", x: 12, y: 19, width: 16, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "커뮤니티홀", x: 12, y: 10.5, width: 11, height:8.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 1, name: "창의공작실", x: 23, y: 13, width: 7, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 3, name: "모둠학습실", x: 30, y: 13, width: 5, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 4, name: "영어교과실", x: 35, y: 13, width: 5.5, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 5, name: "기숙사운영부", x: 40.5, y: 13, width: 3.5, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 6, name: "계단", x: 44, y: 13, width: 2, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 7, name: "3-1", x: 46, y: 13, width: 5.5, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 8, name: "3-2", x: 51.5, y: 13, width: 5.5, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 9, name: "3-3", x: 57, y: 13, width: 5.5, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 10, name: "3-4", x: 62.5, y: 13, width: 5.5, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 11, name: "학습지원실(3학년)", x: 68, y: 13, width: 3, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 12, name: "진로활동실", x: 71, y: 13, width: 6, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 13, name: "계단", x: 77, y: 13, width: 2, height: 6, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 27, name: "X", x: 81, y: 15.5, width: 7, height: 76, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 26, name: "복도", x: 23, y: 10.5, width: 56, height: 2.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 14, name: "X", x: 79, y: 10.5, width: 9, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실1", x: 4, y: 15, width: 3.5, height: 3, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실2", x: 4, y: 18, width: 3.5, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실3", x: 8.5, y: 18, width: 3.5, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실5", x: 12, y: 18, width: 3.5, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실6", x: 15.5, y: 18, width: 3.5, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "산화협력부", x: 8.5, y: 13, width: 3.5, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "생활지원실", x: 19, y: 19, width: 2.5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "기숙사", x: 12, y: 23, width: 16, height: 47.5, backgroundColor: "#DDDDDD", cursor: "pointer" },

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




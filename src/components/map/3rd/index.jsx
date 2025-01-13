import * as S from '../../../pages/manage/location/style.jsx'

export default function Third({set}) {
    const elements = [
        { id: 30, name: "", x: 150, y: 80, width: 200, height: 500, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 30, name: "", x: 50, y: 80, width: 100, height: 100, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "커뮤니티홀", x: 150, y: 80, width: 130, height:70, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 1, name: "창의공작실", x: 280, y: 100, width: 90, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 3, name: "모둠학습실", x: 370, y: 100, width: 70, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 4, name: "영어교과실", x: 440, y: 100, width: 70, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 5, name: "기숙사운영부", x: 510, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 6, name: "계단", x: 550, y: 100, width: 30, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 7, name: "3-1", x: 580, y: 100, width: 70, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 8, name: "3-2", x: 650, y: 100, width: 70, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 9, name: "3-3", x: 720, y: 100, width: 70, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 10, name: "3-4", x: 790, y: 100, width: 70, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 11, name: "학습지원실(3학년)", x: 860, y: 100, width: 40, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 12, name: "진로활동실", x: 900, y: 100, width: 80, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 13, name: "계단", x: 980, y: 100, width: 30, height: 50, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 14, name: "X", x: 1010, y: 80, width: 110, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 15, name: "X", x: 1040, y: 120, width: 80, height: 610, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 26, name: "복도", x: 280, y: 80, width: 730, height: 20, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 31, name: "X", x: 370, y: 620, width: 300, height: 90, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실1", x: 50, y: 120, width: 40, height: 20, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실2", x: 50, y: 140, width: 40, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실3", x: 110, y: 140, width: 40, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실5", x: 150, y: 140, width: 40, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실6", x: 190, y: 140, width: 40, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "산화협력부", x: 110, y: 100, width: 40, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "생활지원실", x: 230, y: 150, width: 30, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "기숙사", x: 150, y: 180, width: 200, height: 400, backgroundColor: "#DDDDDD", cursor: "pointer" },

    ];
    return(
        elements.map((el) => (
            <S.Element
                onClick={()=>set(true)}
                key={el.id}
                $left={el.x}
                $top={el.y}
                $width={el.width}
                $height={el.height}
                $color={el.backgroundColor}
                $cursor={el.cursor}
            >
                {el.name}
            </S.Element>
        ))
    )
}




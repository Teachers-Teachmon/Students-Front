import * as S from '../../../pages/manage/location/style.jsx'

export default function Fourth({set}) {
    const elements = [
        { id: 30, name: "", x: 150, y: 80, width: 200, height: 500, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 30, name: "X", x: 50, y: 80, width: 100, height: 100, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "X", x: 150, y: 80, width: 130, height:70, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 1, name: "X", x: 310, y: 80, width: 700, height: 70, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 14, name: "X", x: 1010, y: 80, width: 110, height: 40, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 15, name: "X", x: 1040, y: 120, width: 80, height: 610, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 31, name: "X", x: 370, y: 620, width: 300, height: 90, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "기숙사", x: 150, y: 180, width: 200, height: 400, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실7", x: 150, y: 150, width: 65, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실8", x: 215, y: 150, width: 65, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실9", x: 310, y: 150, width: 40, height: 30, backgroundColor: "#DDDDDD", cursor: "pointer" },

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




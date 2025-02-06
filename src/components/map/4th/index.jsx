import * as S from '../../../pages/manage/location/style.jsx'
import useLocation from "../../../zustand/locationDetail.js";

export default function Fourth({set, data}) {
    const elements = [
        { id: 1, name: "", x: 12, y: 10.5, width: 16, height: 12.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 2, name: "X", x: 12, y: 10.5, width: 11, height:8.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 3, name: "X", x: 25, y: 10.5, width: 54, height: 8.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 4, name: "X", x: 4, y: 10.5, width: 8, height: 12.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 5, name: "X", x: 81, y: 15.5, width: 7, height: 76, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 6, name: "X", x: 79, y: 10.5, width: 9, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 7, name: "기숙사", x: 12, y: 23, width: 16, height: 47.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 8, name: "베르실7", x: 12, y: 19, width: 5.5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 9, name: "베르실8", x: 17.5, y: 19, width: 5.5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 10, name: "베르실9", x: 25, y: 19, width: 3, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },

    ];
    const setPlace = useLocation((state) => state.setPlace);

    return(
        data && elements.map((el) => (
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




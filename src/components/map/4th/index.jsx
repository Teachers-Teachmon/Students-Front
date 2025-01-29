import * as S from '../../../pages/manage/location/style.jsx'
import useLocation from "../../../zustand/locationDetail.js";

export default function Fourth({set, data}) {
    const elements = [
        { id: 30, name: "", x: 12, y: 10.5, width: 16, height: 12.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "X", x: 12, y: 10.5, width: 11, height:8.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 1, name: "X", x: 25, y: 10.5, width: 54, height: 8.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 14, name: "X", x: 4, y: 10.5, width: 8, height: 12.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 27, name: "X", x: 81, y: 15.5, width: 7, height: 76, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 14, name: "X", x: 79, y: 10.5, width: 9, height: 5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "기숙사", x: 12, y: 23, width: 16, height: 47.5, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실7", x: 12, y: 19, width: 5.5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실8", x: 17.5, y: 19, width: 5.5, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },
        { id: 36, name: "베르실9", x: 25, y: 19, width: 3, height: 4, backgroundColor: "#DDDDDD", cursor: "pointer" },

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




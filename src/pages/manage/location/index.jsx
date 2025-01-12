import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import CircleBtn from "../../../components/button/circle/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


export default function Location() {
    const navigate = useNavigate();
    const [isFloor, setFloor] = useState([
        true, false, false, false
    ]);
    const changeFloor = (idx) =>{
        const newFloor = [false, false, false, false];
        newFloor[idx] = true;
        setFloor(newFloor);
    }
    const elements = [
        { id: 1, name: "Element 1", x: 100, y: 200 },
        { id: 2, name: "Element 2", x: 300, y: 400 },
    ];

    const handleClick = (element) => {
        alert(`You clicked on: ${element.name}`);
    };
    return (
        <S.LocationContainer>
            <Header />
            <S.Info>
                <S.FloorBox>
                    <CircleBtn name={"1층"} status={isFloor[0]} On={()=>changeFloor(0)} />
                    <CircleBtn name={"2층"} status={isFloor[1]} On={()=>changeFloor(1)} />
                    <CircleBtn name={"3층"} status={isFloor[2]} On={()=>changeFloor(2)} />
                    <CircleBtn name={"4층"} status={isFloor[3]} On={()=>changeFloor(3)} />
                </S.FloorBox>
                <SquareBtn name={"돌아가기"} status={true} On={()=>navigate('/manage')} />
            </S.Info>
            <TransformWrapper>
                <TransformComponent>
            <S.Wrap>
                        {elements.map((el) => (
                            <div
                                key={el.id}
                                onClick={() => handleClick(el)}
                                style={{
                                    position: "absolute",
                                    top: el.y,
                                    left: el.x,
                                    width: "50px",
                                    height: "50px",
                                    backgroundColor: "lightblue",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                }}
                            >
                                {el.name}
                            </div>
                        ))}
            </S.Wrap>
        </TransformComponent>
</TransformWrapper>
        </S.LocationContainer>
    )
}
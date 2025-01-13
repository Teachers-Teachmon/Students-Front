import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import CircleBtn from "../../../components/button/circle/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import First from "../../../components/map/1st/index.jsx";
import Second from "../../../components/map/2nd/index.jsx";
import Third from "../../../components/map/3rd/index.jsx";
import Fourth from "../../../components/map/4th/index.jsx";
import DetailStudentLocation from "../../../components/modal/detail-student-location/index.jsx";
import FirstModal from "../../../components/modal/location-first";

export default function Location() {
    const [isFirstModal, setIsFirstModal] = useState(true);
    const navigate = useNavigate();
    const [isFloor, setFloor] = useState([
        true, false, false, false
    ]);
    const changeFloor = (idx) =>{
        const newFloor = [false, false, false, false];
        newFloor[idx] = true;
        setFloor(newFloor);
    }
    const [isModal,setIsModal] = useState(false);
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
                {isFloor[0] ? (
                    <First set = {setIsModal}/>
                ) : isFloor[1] ? (
                    <Second set = {setIsModal}/>
                ) : isFloor[2] ? (
                    <Third set = {setIsModal}/>
                ) : isFloor[3] ? (
                    <Fourth set = {setIsModal} />
                ) : null
                }
            </S.Wrap>
        </TransformComponent>
</TransformWrapper>
            {isModal ? <DetailStudentLocation setIsModal={setIsModal}/> : null}
            {isFirstModal ? <FirstModal set={setIsFirstModal}/> : null}
        </S.LocationContainer>
    )
}
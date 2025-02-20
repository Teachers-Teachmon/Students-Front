import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import CircleBtn from "../../../components/button/circle/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import First from "../../../components/map/1st/index.jsx";
import Second from "../../../components/map/2nd/index.jsx";
import Third from "../../../components/map/3rd/index.jsx";
import Fourth from "../../../components/map/4th/index.jsx";
import DetailStudentLocation from "../../../components/modal/detail-student-location/index.jsx";
import {useGetLocationAll, useGetLocationFloor} from "../../../hooks/useStudent.js";
import Loading from "../../../components/loading/index.jsx";

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
    const floor = () =>{
        return isFloor
            .map((item, idx) => (item ? idx+1 : null))
            .filter((idx) => idx !== null);
    };
    const [isModal,setIsModal] = useState(false);
    const {data : locationAll, isFetching : isAllLoading} = useGetLocationAll();
    const {data : locationFloor, isFetching : isFloorLoading} = useGetLocationFloor(floor()[0]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);
    return (
        <S.LocationContainer>
            <Header />
            <S.Info>
                <S.FloorBox>
                    <S.BtnBox>
                        <CircleBtn name={"1층"} status={isFloor[0]} On={()=>changeFloor(0)} />
                        {locationAll && Object.keys(locationAll[0]).length > 0  && <S.All>{Object.keys(locationAll[0]).length}</S.All>}
                    </S.BtnBox>
                    <S.BtnBox>
                        <CircleBtn name={"2층"} status={isFloor[1]} On={()=>changeFloor(1)} />
                        {locationAll && Object.keys(locationAll[1]).length > 0  && <S.All>{Object.keys(locationAll[1]).length}</S.All>}
                    </S.BtnBox>
                    <S.BtnBox>
                        <CircleBtn name={"3층"} status={isFloor[2]} On={()=>changeFloor(2)} />
                        {locationAll && Object.keys(locationAll[2]).length > 0  && <S.All>{Object.keys(locationAll[2]).length}</S.All>}
                    </S.BtnBox>
                    <S.BtnBox>
                        <CircleBtn name={"4층"} status={isFloor[3]} On={()=>changeFloor(3)} />
                        {locationAll && Object.keys(locationAll[3]).length > 0  && <S.All>{Object.keys(locationAll[3]).length}</S.All>}
                    </S.BtnBox>
                </S.FloorBox>
                <SquareBtn name={"돌아가기"} status={true} On={()=>navigate('/manage')} />
            </S.Info>
            {isAllLoading || isFloorLoading ? <Loading/> : null}
            <TransformWrapper>
                <TransformComponent>
            <S.Wrap>
                <S.Box>
                    {isAllLoading || isFloorLoading ?
                        isFloor[0] ? (
                            <First width = {windowWidth} data = {locationFloor} set = {setIsModal} fake = {true}/>
                        ) : isFloor[1] ? (
                            <Second width = {windowWidth} data = {locationFloor} set = {setIsModal} fake = {true}/>
                        ) : isFloor[2] ? (
                            <Third width = {windowWidth} data = {locationFloor} set = {setIsModal} fake = {true}/>
                        ) : isFloor[3] ? (
                            <Fourth width = {windowWidth} data = {locationFloor} set = {setIsModal} fake = {true}/>
                        ) : null :
                        isFloor[0] ? (
                            <First width = {windowWidth} data = {locationFloor} set = {setIsModal}/>
                        ) : isFloor[1] ? (
                            <Second width = {windowWidth} data = {locationFloor} set = {setIsModal}/>
                        ) : isFloor[2] ? (
                            <Third width = {windowWidth} data = {locationFloor} set = {setIsModal}/>
                        ) : isFloor[3] ? (
                            <Fourth width = {windowWidth} data = {locationFloor} set = {setIsModal} />
                        ) : null
                    }
                </S.Box>
            </S.Wrap>
        </TransformComponent>
</TransformWrapper>
            {isModal ? <DetailStudentLocation data ={locationFloor} setIsModal={setIsModal} floor ={floor()[0]}/> : null}
        </S.LocationContainer>
    )
}
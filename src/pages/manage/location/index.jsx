import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import CircleBtn from "../../../components/button/circle/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import First from "../../../components/map/1st/index.jsx";
import Second from "../../../components/map/2nd/index.jsx";
import Third from "../../../components/map/3rd/index.jsx";
import Fourth from "../../../components/map/4th/index.jsx";
import DetailStudentLocation from "../../../components/modal/detail-student-location/index.jsx";
import FirstModal from "../../../components/modal/location-first";
import {useGetLocationAll, useGetLocationFloor} from "../../../hooks/useStudent.js";
import Loading from "../../../components/loading/index.jsx";

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
    const floor = () =>{
        return isFloor
            .map((item, idx) => (item ? idx+1 : null))
            .filter((idx) => idx !== null);
    };
    const [isModal,setIsModal] = useState(false);
    const {data : locationAll, isAllLoading} = useGetLocationAll();
    const {data : locationFloor, isFloorLoading} = useGetLocationFloor(floor()[0]);
    const data = [
        {
            "place" : "과학실",
            "status": "이석",
            "teacher": "박건우",
            "students": [
                {
                    "studentNumber": 1401,
                    "name": "김동욱",
                    "status":"자습"
                },
            ]
        },
        {
            "place" : "디자인실",
            "status": "이석",
            "선생님": "정유진",
            "학생": [
                {
                    "studentNumber": 1401,
                    "name": "김동욱",
                    "status":"자습"
                },
            ]
        }
    ]
    return (
        <S.LocationContainer>
            {isAllLoading || isFloorLoading ? <Loading /> : null}
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
                    <First data = {data} set = {setIsModal}/>
                ) : isFloor[1] ? (
                    <Second data = {data} set = {setIsModal}/>
                ) : isFloor[2] ? (
                    <Third data = {data} set = {setIsModal}/>
                ) : isFloor[3] ? (
                    <Fourth data = {data} set = {setIsModal} />
                ) : null
                }
            </S.Wrap>
        </TransformComponent>
</TransformWrapper>
            {isModal ? <DetailStudentLocation data ={data} setIsModal={setIsModal}/> : null}
            {isFirstModal ? <FirstModal data ={locationAll} set={setIsFirstModal}/> : null}
        </S.LocationContainer>
    )
}
import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import CircleBtn from "../../../components/button/circle/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import First from "../../../components/map/1st/index.jsx";
import Second from "../../../components/map/2nd/index.jsx";
import Third from "../../../components/map/3rd/index.jsx";
import Fourth from "../../../components/map/4th/index.jsx";
import DetailStudentLocation from "../../../components/modal/detail-student-location/index.jsx";
import {useGetLocationAll, useGetLocationFloor} from "../../../hooks/useStudent.js";
import Loading from "../../../components/loading/index.jsx";
import ZoomIn from "../../../assets/Zoom-in.svg";
import ZoomOut from "../../../assets/Zoom-out.svg";
import Reset from "../../../assets/reset.svg";
import Error from '../../../assets/Error.svg'
import ErrorText from '../../../assets/Error2.svg'
import {useWidth} from "../../../zustand/width.js";

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
    const {width} = useWidth();

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
                {({ zoomIn, zoomOut, resetTransform }) =>
                    <>
                        <S.Footer>
                            <S.Btn onClick={()=>zoomIn()}>
                                <img width={'100%'} src={ZoomIn} alt={'zoomIn'} />
                            </S.Btn>
                            <S.Btn onClick={()=>resetTransform()}>
                                <img width={'100%'} src={Reset} alt={'reset'} />
                            </S.Btn>
                            <S.Btn onClick={()=>zoomOut()}>
                                <img width={'100%'} src={ZoomOut} alt={'zoomOut'} />
                            </S.Btn>
                        </S.Footer>
                        <TransformComponent>
                            <S.Wrap>
                                {locationFloor === 500 ?
                                        <S.Error>
                                            <img src={Error} alt={'error'} />
                                            <img src={ErrorText} alt={'error'} />
                                            자습감독 선생님을 설정해주셔야합니다
                                        </S.Error> :
                                    <S.Box>
                                        {isAllLoading || isFloorLoading ?
                                            isFloor[0] ? (
                                                <First width = {width} data = {locationFloor} set = {setIsModal} fake = {true}/>
                                            ) : isFloor[1] ? (
                                                <Second width = {width} data = {locationFloor} set = {setIsModal} fake = {true}/>
                                            ) : isFloor[2] ? (
                                                <Third width = {width} data = {locationFloor} set = {setIsModal} fake = {true}/>
                                            ) : isFloor[3] ? (
                                                <Fourth width = {width} data = {locationFloor} set = {setIsModal} fake = {true}/>
                                            ) : null :
                                            isFloor[0] ? (
                                                <First width = {width} data = {locationFloor} set = {setIsModal}/>
                                            ) : isFloor[1] ? (
                                                <Second width = {width} data = {locationFloor} set = {setIsModal}/>
                                            ) : isFloor[2] ? (
                                                <Third width = {width} data = {locationFloor} set = {setIsModal}/>
                                            ) : isFloor[3] ? (
                                                <Fourth width = {width} data = {locationFloor} set = {setIsModal} />
                                            ) : null
                                        }
                                    </S.Box>
                                    }
                            </S.Wrap>
                        </TransformComponent>
                    </>
                }
</TransformWrapper>
            {isModal ? <DetailStudentLocation data ={locationFloor} setIsModal={setIsModal} floor ={floor()[0]}/> : null}
        </S.LocationContainer>
    )
}
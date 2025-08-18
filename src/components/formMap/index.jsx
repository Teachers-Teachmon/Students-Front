import * as S from './style'
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import First from "../../components/formMap/1st";
import Second from "../../components/formMap/2nd";
import Third from "../../components/formMap/3rd"
import Fourth from "../../components/formMap/4th"

function CircleBtn({name, On, status}) {
  return(
    <S.CircleContainer onClick={()=>On()} $status = {status}>
      <S.Name>{name}</S.Name>
    </S.CircleContainer>
  )
}
function SquareBtn({name, On, status} ) {
  return(
    <S.SquareContainer onClick={()=>On()} $status = {status}>
      <S.Name>{name}</S.Name>
    </S.SquareContainer>
  )
}
export default function Map({LeaveData, period}) {
  const navigate = useNavigate();
  const [isFloor, setFloor] = useState([
    true, false, false, false
  ]);
  const changeFloor = (idx) =>{
    const newFloor = [false, false, false, false];
    newFloor[idx] = true;
    setFloor(newFloor);
  }

  return (
    <S.LocationContainer>
      <S.Info>
        <S.FloorBox>
          <S.BtnBox>
            <CircleBtn name={"1층"} status={isFloor[0]} On={()=>changeFloor(0)} />
          </S.BtnBox>
          <S.BtnBox>
            <CircleBtn name={"2층"} status={isFloor[1]} On={()=>changeFloor(1)} />
          </S.BtnBox>
          <S.BtnBox>
            <CircleBtn name={"3층"} status={isFloor[2]} On={()=>changeFloor(2)} />
          </S.BtnBox>
          <S.BtnBox>
            <CircleBtn name={"4층"} status={isFloor[3]} On={()=>changeFloor(3)} />
          </S.BtnBox>
        </S.FloorBox>
        <SquareBtn name={"돌아가기"} status={true} On={()=>navigate('/manage/form/time')} />
      </S.Info>
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) =>
          <>
            {/*<S.Footer>*/}
            {/*  <S.Btn onClick={()=>zoomIn()}>*/}
            {/*    <img width={'100%'} src={ZoomIn} alt={'zoomIn'} />*/}
            {/*  </S.Btn>*/}
            {/*  <S.Btn onClick={()=>resetTransform()}>*/}
            {/*    <img width={'100%'} src={Reset} alt={'reset'} />*/}
            {/*  </S.Btn>*/}
            {/*  <S.Btn onClick={()=>zoomOut()}>*/}
            {/*    <img width={'100%'} src={ZoomOut} alt={'zoomOut'} />*/}
            {/*  </S.Btn>*/}
            {/*</S.Footer>*/}
            <TransformComponent>
              <S.Wrap>
                <S.Box>
                  {isFloor[0] ? (
                    <First  LeaveData={LeaveData} period={period}/>
                  ) : isFloor[1] ? (
                    <Second  LeaveData={LeaveData}  period={period}/>
                  ) : isFloor[2] ? (
                    <Third LeaveData={LeaveData}  period={period}/>
                  ) : isFloor[3] ? (
                    <Fourth  LeaveData={LeaveData}   period={period}/>
                  ) : null}
                </S.Box>
              </S.Wrap>
            </TransformComponent>
          </>
        }
      </TransformWrapper>
    </S.LocationContainer>
  )
}
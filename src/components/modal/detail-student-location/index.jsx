import * as S from './style.jsx'
import X from '../../../assets/X.svg';
import People from '../../../assets/User.svg';
import RedPeople from '../../../assets/RedPeople.svg';
import OrangePeople from '../../../assets/OrangePeople.svg';
import {useEffect, useState} from "react";
import StatusUpdate from "../../status-update";
import useLocation from "../../../zustand/locationDetail.js";
import {usePatchStudent} from "../../../hooks/useStudent.js";
import Confirm from "../../button/confirm/index.jsx";
import {useCloseMovement} from "../../../hooks/useData.js";
import useDay from "../../../zustand/day.js";
import patchDay from "../../../utils/patchDay.js";
import useAuth from "../../../zustand/auth.js";
import {useGetDailySupervision} from "../../../hooks/useSupervision.js";

export default function DetailStudentLocation({data, setIsModal, floor}) {
    const [isOpen, setIsOpen] = useState([]);
    const location = useLocation.getState();

    const setLocation = () => {
        if(Object.keys(data).includes(location.place)){
            return data[location.place];
        }
    };
    const {today} = useDay();
    const {mutate : patchStudent} = usePatchStudent();
    const locationData = setLocation();
    const {mutate : closeMovement} = useCloseMovement();

    const isClick = (idx) => {
        const newIsOpen = [...isOpen];
        newIsOpen[idx] = !newIsOpen[idx];
        setIsOpen(newIsOpen);
    }
    useEffect(()=>{
        const newOpen = setLocation().students.map(()=> false);
        setIsOpen(newOpen)
    }, []);

    // 상태 업데이트 하는 함수, 상태업데이트하고 다시 불러오기
    const changeStatus= (idx, status) => {
        setIsOpen(prevState => {
            const newState = prevState.map(() => false);
            return newState;
        });
        patchStudent({studentID: idx, status: status, floor: floor, place:location.place})
    }
    const {data : todaySupervision, isFetching} = useGetDailySupervision(patchDay(today));
    const {name, role} = useAuth();
    const checkAuthor = () =>{
        if(isFetching) return ;
        let check = false;
        let periodName;
        switch (locationData.period){
            case 'SEVEN_PERIOD' :
                periodName = "7th_teacher";
                break;
            case 'EIGHT_AND_NINE_PERIOD' :
                periodName = "8th_teacher";
                break;
            case 'TEN_AND_ELEVEN_PERIOD' :
                periodName = "10th_teacher";
                break;
        }
        if(name === locationData.teacherName) check = true;
        if(todaySupervision['first_grade'][periodName] === name) check = true;
        if(todaySupervision['second_grade'][periodName] === name) check = true;
        if(todaySupervision['third_grade'][periodName] === name) check = true;
        if(role === 'ADMIN') check = true;

        return check;

    }
    return (
        locationData &&
        <S.Black onClick={()=>setIsModal(false)}>
            <S.Content  onClick={(e) => e.stopPropagation()}>
                <S.TitleBox>
                    <h1>{location.place}({locationData.status})</h1>
                    <img src={X} style={{ cursor: 'pointer' }} alt={"엑스"} onClick={()=>setIsModal(false)}/>
                </S.TitleBox>
                <S.Box>
                    <S.BlueText>담당교사</S.BlueText>
                    <S.Teacher style={{ cursor: 'default' }}>
                        <img src={People} alt={"people"} width={28}/>
                        <S.Name>{locationData.teacher}</S.Name>
                    </S.Teacher>
                </S.Box>
                <S.Box>
                    <S.BlueText>학생{locationData.students.length}명</S.BlueText>
                    <S.RedText>* 이탈한 학생이 있다면 학생을 클릭하여 상태를 바꿔주세요</S.RedText>
                    <S.Students>
                        {locationData.students.map((item, idx)=>{
                            return(
                                <>
                                    <S.Teacher key={idx} onClick={()=>isClick(idx)}>
                                        <img src={item.status === "자습" || item.status === "이석" ? People : item.status === "조퇴" ? OrangePeople : RedPeople} alt={"people"} width={28}/>
                                        <S.Name $color={item.status === "자습" || item.status === "이석" ? "black" : item.status === "조퇴" ? "#FF9000" : "#FF938C"}>{item.number}{item.name}</S.Name>
                                        {isOpen[idx] ? <StatusUpdate changeStatus={changeStatus} name={item.id} nowStatus={item.status}/> : null}
                                    </S.Teacher>
                                    { isOpen.some((value) => value === true) ? <S.UnBox onClick={()=>setIsOpen(isOpen.map(() => false))}></S.UnBox> : null}
                                </>
                            )
                        })}
                    </S.Students>
                </S.Box>
                <S.Close>
                    {/*checkAuthor() &&*/}
                    {locationData.status === "이석" &&
                        <Confirm
                            text={"이석종료"}
                            color={"red"}
                            image={"reject"}
                            onClick={()=>{
                                closeMovement({
                                    day : patchDay(today),
                                    floor:floor,
                                    teacherId : locationData.teacherId,
                                    period : locationData.period,
                                    place : location.place,
                                    onSuccessPatch : ()=>{setIsModal(false)}})
                                }
                            }
                        />}
                </S.Close>
            </S.Content>
        </S.Black>
    )
}
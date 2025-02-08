import * as S from './style.jsx'
import X from '../../../assets/X.svg';
import People from '../../../assets/User.svg';
import RedPeople from '../../../assets/RedPeople.svg';
import OrangePeople from '../../../assets/OrangePeople.svg';
import {useEffect, useState} from "react";
import StatusUpdate from "../../status-update";
import useLocation from "../../../zustand/locationDetail.js";
import {usePatchStudent} from "../../../hooks/useStudent.js";

export default function DetailStudentLocation({data, setIsModal, floor}) {
    const [isOpen, setIsOpen] = useState([]);
    const location = useLocation.getState();

    const setLocation = () => {
        if(Object.keys(data).includes(location.place)){
            return data[location.place];
        }
    };

    const {mutate : patchStudent} = usePatchStudent();

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
        console.log(idx, status)
        patchStudent({studentID: idx, status: status, floor: floor, place:location.place})
    }
    return (
        <S.Black onClick={()=>setIsModal(false)}>
            <S.Content  onClick={(e) => e.stopPropagation()}>
                <S.Title>
                    <h1>{location.place}({setLocation().status})</h1>
                    <img src={X} style={{ cursor: 'pointer' }} alt={"엑스"} onClick={()=>setIsModal(false)}/>
                </S.Title>
                <S.Box>
                    <S.BlueText>담당교사</S.BlueText>
                    <S.Teacher style={{ cursor: 'default' }}>
                        <img src={People} alt={"people"} width={28}/>
                        <S.Name>{setLocation().teacher}</S.Name>
                    </S.Teacher>
                </S.Box>
                <S.Box>
                    <S.BlueText>학생{setLocation().students.length}명</S.BlueText>
                    <S.RedText>* 이탈한 학생이 있다면 학생을 클릭하여 상태를 바꿔주세요</S.RedText>
                    <S.Students>
                        {setLocation().students.map((item, idx)=>{
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
            </S.Content>
        </S.Black>
    )
}
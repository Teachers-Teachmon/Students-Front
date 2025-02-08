import * as S from './style.jsx'
import {useState} from "react";
import StatusUpdate from "../status-update/index.jsx";
import {usePatchStudent} from "../../hooks/useStudent.js";

export default function StudentGraph({data, grade, classNum}){
    const [isOpen, setIsOpen] = useState([
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ]);
    // 색깔 업데이트 해주는 창 띄워주기
    const isClick = (idx, status) => {
        if(status === "방과후" || status === "방과 후" || status === "AFTER_SCHOOL"){
            return
        }
        const newIsOpen = [
            false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
        ];
        newIsOpen[idx] = !newIsOpen[idx];
        setIsOpen(newIsOpen);
    }
    const {mutate : patchStudent} = usePatchStudent();
    // 상태 업데이트 하는 함수, 상태업데이트하고 다시 불러오기
    const changeStatus= (name, status) => {
        setIsOpen(prevState => {
            const newState = prevState.map(() => false);
            return newState;
        });
        patchStudent({studentID: name, status: status, grade : grade, class : classNum})
    }

    // 상태에 따라 색깔변환
    const studentColor = (status) => {
        switch (status) {
            case '조퇴':
            case 'LEAVE_EARLY' :
                return "#FFDC93"
            case "자습":
            case "SELF_STUDY" :
                return "#72FAAA"
            case "이탈":
            case "EXIT" :
                return "#FF938C"
            case "방과후" :
            case "방과 후" :
            case "AFTER_SCHOOL" :
                return "#ffffff"
            case "LEAVE_SEAT" :
            case "이석" :
                return "#CCBCFF"
        }
    }
    return(
        <S.StudentContainer>
            <S.Class>{classNum}반</S.Class>
            <S.Graph  $seven = {data.length === 17}>
                {data && data.map((el, idx) =>{
                    return (
                        <S.Student $color = {studentColor(el.status)} onClick={()=>isClick(idx, el.status)} key = {idx}>{/* 칸 색깔도 data에서 추출해서 사용*/}
                            <p>{String(el.number).slice(2,4)}</p>
                            <p>{el.name}</p>
                            {isOpen[idx] ?
                                <StatusUpdate changeStatus={changeStatus} name={el.id} nowStatus={el.status}/>
                                : null
                            }
                        </S.Student>
                    )
                })}
                { isOpen.some((value) => value === true) ? <S.Black onClick={()=>setIsOpen(isOpen.map(() => false))}></S.Black> : null}
            </S.Graph>
        </S.StudentContainer>
    )
}
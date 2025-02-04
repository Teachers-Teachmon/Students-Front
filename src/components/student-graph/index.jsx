import * as S from './style.jsx'
import {useState} from "react";
import StatusUpdate from "../status-update/index.jsx";
import {usePatchStudent} from "../../hooks/useStudent.js";

export default function StudentGraph({data, grade, classNum}){
    const [isOpen, setIsOpen] = useState([
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ]);
    // 색깔 업데이트 해주는 창 띄워주기
    const isClick = (idx) => {
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
        patchStudent({studentID: name, status: status})
    }

    const makeNumber = (grade, classNum, number, name) =>{
        number = number >= 10 && number <= 99  ? String(number) : `0${String(number)}`
        console.log(number);
        return String(grade) + String(classNum) + number + name
    }
    // 상태에 따라 색깔변환
    const studentColor = (status) => {
        switch (status) {
            case '조퇴':
                return "#FFDC93"
            case "자습":
                return "#72FAAA"
            case "이탈":
                return "#FF938C"
            case "방과후" :
                return "#ffffff"
            case "이석" :
                return "#CCBCFF"
        }
    }

    const fakeData = [
        {
            "status": "이석",
            "name": "김동욱"
        },
        {
            "status": "자습",
            "name": "허온"
        }
    ]
    return(
        <S.StudentContainer>
            <S.Class>{classNum}반</S.Class>
            <S.Graph  $seven = {data.length === 17}>
                {data && data.map((el, idx) =>{
                    return (<S.Student $color = {studentColor(el.status)} onClick={()=>isClick(idx)} key = {idx}>{/* 칸 색깔도 data에서 추출해서 사용*/}
                        <p>{idx+1}</p>
                        <p>{el.name}</p>
                        {isOpen[idx] ?
                            <StatusUpdate changeStatus={changeStatus} name={makeNumber(grade, classNum, idx+1, el.name)} nowStatus={el.status}/>
                            : null
                        }
                    </S.Student>)
                })}

                {fakeData && fakeData.map((el, idx) => {
                   return(
                       <S.Student $color = {studentColor(el.status)} onClick={()=>isClick(idx)} key = {idx}>{/* 칸 색깔도 data에서 추출해서 사용*/}
                           <p>{idx+1}</p>
                           <p>{el.name}</p>
                           {isOpen[idx] ?
                               <StatusUpdate changeStatus={changeStatus} name={makeNumber(grade, classNum, idx+1, el.name)} nowStatus={el.status}/>
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
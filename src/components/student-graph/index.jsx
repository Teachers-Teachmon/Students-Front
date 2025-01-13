import * as S from './style.jsx'
import {useState} from "react";
import StatusUpdate from "../status-update/index.jsx";

export default function StudentGraph({data}){
    const [isOpen, setIsOpen] = useState([
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ]);
    // 색깔 업데이트 해주는 창 띄워주기
    const isClick = (idx) => {
        const newIsOpen = [...isOpen];
        newIsOpen[idx] = !newIsOpen[idx];
        setIsOpen(newIsOpen);
    }

    // 상태 업데이트 하는 함수, 상태업데이트하고 다시 불러오기
    const changeStatus= (idx, status) => {
        console.log(idx, status)
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
    return(
        <S.StudentContainer>
            <S.Class>data.class반</S.Class>
            <S.Graph>
                {data.map((el, idx) =>
                    <>
                        <S.Student color = {studentColor(el.status)} onClick={()=>isClick(idx)} key = {idx}>{/* 칸 색깔도 data에서 추출해서 사용*/}
                            <p>{el.id}</p>
                            <p>{el.name}</p>
                            {isOpen[idx] ?
                                <StatusUpdate changeStatus={changeStatus} idx={el.id} />
                                 : null
                            }
                        </S.Student>
                        { isOpen.some((value) => value === true) ? <S.Black onClick={()=>setIsOpen(isOpen.map(() => false))}></S.Black> : null}
                    </>
                )}

            </S.Graph>
        </S.StudentContainer>
    )
}
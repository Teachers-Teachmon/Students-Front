import * as S from './style.jsx'
import {useState} from "react";

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
                                <S.StatusBox>
                                    <S.Status color={"#FFF6E4"} onClick={changeStatus(idx, "조퇴")}>
                                        <S.Circle color={"#FF9000"}></S.Circle>
                                        <S.StatusText color={"#FF9000"}>조퇴</S.StatusText>
                                    </S.Status>
                                    <S.Status color={"#ECFDF3"} onClick={changeStatus(idx, "자습")}>
                                        <S.Circle color={"#14BA6D"}></S.Circle>
                                        <S.StatusText color={"#14BA6D"}>자습</S.StatusText>
                                    </S.Status>
                                    <S.Status color={"#FDF0EC"} onClick={changeStatus(idx, "이탈")}>
                                        <S.Circle color={"#F87067"}></S.Circle>
                                        <S.StatusText color={"#F87067"}>이탈</S.StatusText>
                                    </S.Status>
                                </S.StatusBox> : null
                            }
                        </S.Student>
                        { isOpen.some((value) => value === true) ? <S.Black onClick={()=>setIsOpen(isOpen.map(() => false))}></S.Black> : null}
                    </>
                )}

            </S.Graph>
        </S.StudentContainer>
    )
}
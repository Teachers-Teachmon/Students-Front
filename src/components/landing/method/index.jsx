import * as S from './style.jsx';
import LeftArrow from '../../../assets/leftArrow.svg';
import RightArrow from '../../../assets/rightArrow.svg';
import {useState, useRef} from "react";
import Movement1 from '../../../assets/method/movement1.svg';
import Movement2 from '../../../assets/method/movement2.svg';
import Movement3 from '../../../assets/method/movement3.svg';
import Movement4 from '../../../assets/method/movement4.svg';
import Supervision1 from "../../../assets/method/supervision1.svg";
import Supervision2 from "../../../assets/method/supervision2.svg";
import Supervision3 from "../../../assets/method/supervision3.svg";
import Supervision4 from "../../../assets/method/supervision4.svg";
import Supervision5 from "../../../assets/method/supervision5.svg";
import Location1 from '../../../assets/method/location1.svg'
import Location2 from '../../../assets/method/location2.svg'
import Location3 from '../../../assets/method/location3.svg'
import Location4 from '../../../assets/method/location4.svg'
import After_school1 from '../../../assets/method/after-school1.svg'
import After_school2 from '../../../assets/method/after-school2.svg'
import After_school3 from '../../../assets/method/after-school3.svg'
import After_school4 from '../../../assets/method/after-school4.svg'
import After_school5 from '../../../assets/method/after-school5.svg'
import After_school6 from '../../../assets/method/after-school6.svg'

export default  function Method(){
    const [imgNum, setImgNum] = useState(0);

    const [isSelect, setIsSelect] = useState([
        true, false, false, false
    ]);
    const num = useRef(0);
    const left = () => {
        setImgNum(0);
        const nextIndex = (num.current - 1 + 4) % 4;
        if (!isSelect[nextIndex]) {
            const newSelect = [false, false, false, false];
            num.current = nextIndex;
            newSelect[nextIndex] = true;
            setIsSelect(newSelect);
        }
    };
    const right = () =>{
        setImgNum(0);
        const nextIndex = (num.current + 1) % 4;
        if (!isSelect[nextIndex]) {
            const newSelect = [false, false, false, false];
            num.current = nextIndex;
            newSelect[nextIndex] = true;
            setIsSelect(newSelect);
        }
    }
    const data = [
        {
            title:'이석작성',
            content:["이석 작성은 학생관리 페이지에서 가능합니다. 오른쪽 상단에 이석 작성 버튼 클릭 후 뜨는 이석작성 모달창에서 작업이 가능합니다.", "모달창에서는 이석한 학생이 있을 위치를 층과 장소로 나눠 작성하고 간단한 사유를 작성합니다.", "그 다음 이석을 작성할 학생들을 검색한 뒤 선택하고, “이석하기\" 버튼을 클릭하여 이석 작성을 완료합니다."],
            src:[
                Movement1,Movement2,Movement3,Movement4
            ]
        },
        {
            title:'자습감독 안내',
            content: ['자습감독 항목에서는 자신의 자습감독 일정을 확인하고 다른선생님들의 일정이 궁금하다면 날짜를 클릭하여 확인할 수 있습니다.', '자습감독 교체는 자습감독 교체를 클릭 후 자신이 불가능한 날을 먼저선택해줍니다.다음으로 바꾸고 싶은 다른날의 선생님을 클릭해줍니다. 모달창에서 정보를 확인하시고 사유를 적어 요청을 보냅니다. (사유는 적지 않으셔도 괜찮습니다.)'],
            src:[
                Supervision1, Supervision2, Supervision3, Supervision4, Supervision5
            ]
        },
        {
            title:'자습 관리',
            content: ['학생관리는 학생관리 항목에서 먼저 학년 반별로 나뉜 자습 상태를보고 자습을 잘하고 있나 확인을 합니다. 학생을 확인하고 상태를 이탈이나 조퇴, 자습중으로 바꿔줍니다.', '이석이나 자습이 너무 흩어져있다면 도면을 활용하여 해당교실에 있어야할 학생들을 봅니다. 색깔로 표시되어있는 교실을 클릭하여 학생들을 확인 후 상태도 바꿔줄 수 있습니다.'],
            src:[
                Location1, Location2, Location3, Location4
            ]
        },
        {
            title: '자습감독 자동배정',
            content: ['자습 감독 관리 선생님께서는 방과후 항목에서 방과후 생성을 클릭 후 엑셀파일을 다운받으시고 해당 양식에맞게 방과후 시간표들을 입력합니다. 작성완료 후 파일을 업로드하면 해당파일에있는 데이터들이 사이트에 자동으로 입력되게됩니다. 여기서도 확인 및 최종 수정을 거쳐서 방과후 시간을 저장시켜줍니다.', '자습관리항목에서 자습감독생성을 눌러 기간을 입력하면 AI가 자동으로 일정을 만들어주고 만든일정을 확인 및 최종 수정을 거쳐서 적용하게 됩니다.'],
            src:[
                After_school1, After_school2, After_school3, After_school4, After_school5, After_school6
            ]
        }
    ]
    return(
        <>
            <S.UnBox/>
            <S.Wrap>
                {data.map((item, idx)=>{

                    if(num.current === idx){
                        return(
                            <S.Main key={idx}>
                                <S.Img
                                    onClick={()=>{setImgNum((imgNum+1)%item.src.length);}}
                                    src={item.src[imgNum]}
                                    alt={"Description"}
                                />
                                <S.TextBox>
                                    <h1>{item.title}</h1>
                                    {item.content.map((item, idx)=><p key={idx}>{item}</p>)}
                                </S.TextBox>
                            </S.Main>
                        )
                    }
                })}

                <S.NavVar>
                    <S.ArrowBox onClick={()=>left()}>
                        <img src={LeftArrow} alt={'leftArrow'} />
                    </S.ArrowBox>
                    <S.Nav $isSelect = {num.current === 0}></S.Nav>
                    <S.Nav $isSelect = {num.current === 1}></S.Nav>
                    <S.Nav $isSelect = {num.current === 2}></S.Nav>
                    <S.Nav $isSelect = {num.current === 3}></S.Nav>
                    <S.ArrowBox onClick={()=>right()}>
                        <img src={RightArrow} alt={'rightArrow'} />
                    </S.ArrowBox>
                </S.NavVar>
            </S.Wrap>
        </>
    )
}
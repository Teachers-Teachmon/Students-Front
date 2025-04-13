import * as S from './style.jsx'
import {useState, useRef, useEffect} from "react";
import StatusUpdate from "../../status-update/index.jsx";
import {usePatchStudent} from "../../../hooks/useStudent.js";
import StudentUpdateAfterSchool from "../../modal/student-update-after-school/index.jsx";

export default function Student({ data, day }) {
    const [isCheck, setIsCheck] = useState([]);
    const [allCheck, setAllCheck] = useState(false);
    const [isOpen, setIsOpen] = useState(data.length ? data.map(() => false) : [])
    const [isOpen2, setIsOpen2] = useState(data.length ? data.map(() => false) : [])
    const {mutate : patchStudent} = usePatchStudent();
    const [isModal, setIsModal] = useState(false);
    useEffect(() => {
        setIsCheck(data.map(() => false));
    }, [data]);

    // 상태 업데이트 하는 함수, 상태업데이트하고 다시 불러오기
    const changeStatus= (name, status, period) => {
        setIsOpen(prevState => {
            const newState = prevState.map(() => false);
            return newState;
        });
        if(status === "방과후"){
            alert("아직 준비가 안됐어여...ㅠ 학생을 방과후로 바꾸고 싶으시다면 보강을 이용해주세요!")
            // setIsModal(true);
            // setPeriod(period);
            return;
        }
        if (Array.isArray(name)) {
            if(name.length === 1){
                patchStudent({studentID: name[0], status: status, search:"search", periodName:period})
            }else{
                name.forEach(item=>{
                    patchStudent({studentID: item, status: status, search:"search", periodName:period})
                })
            }
        }
        else{
            patchStudent({studentID: name, status: status, search:"search", periodName:period})
        }
        setAllCheck(false);
        setIsCheck(isCheck.map(item => false));
        setIsOpen(isOpen.map(item=>false));
        setIsOpen2(isOpen2.map(item=>false));
    }
    const patchAfterSchool = (className) =>{
        patchStudent({studentID: className, status: "AFTER_SCHOOL"})
    }
    const handleIsOpen = (idx, isTwo)=>{
        if(isCheck[idx] === false && isCheck.some((value)=>value ===true)){
            alert("선택한 학생의 상태를 바꾸어주세요");
            return ;
        }
        if(isTwo){
            const newIsOpen = [...isOpen2];
            newIsOpen[idx] = !newIsOpen[idx];
            setIsOpen2(newIsOpen);
        }
        else{
            const newIsOpen = [...isOpen];
            newIsOpen[idx] = !newIsOpen[idx];
            setIsOpen(newIsOpen);
        }
    }
    const parentRef = useRef(null);
    const childRefs = useRef([]);
    const [isFirst, setIsFirst] = useState(0);

    const checkVisibility = () => {
        if (!parentRef.current) return;

        const visible = childRefs.current.map((child) => {
            if (!child) return false;
            const parentRect = parentRef.current.getBoundingClientRect();
            const childRect = child.getBoundingClientRect();

            return (
                childRect.top >= parentRect.top &&
                childRect.bottom <= parentRect.bottom
            );
        });
        setIsFirst(visible.findIndex((v) => v === true));
    };

    useEffect(() => {
        checkVisibility();
        const handleScroll = () => checkVisibility();

        if (parentRef.current) {
            parentRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (parentRef.current) {
                parentRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [childRefs.current.length]);
    return (
        <S.StudentContainer>
            {isModal ? <StudentUpdateAfterSchool setIsModal = {setIsModal} day={day} period={period} patchAfterSchool={patchAfterSchool}/> : null}
            <S.Standard>
                <div>
                    <S.UnBox>
                        <S.CheckBox
                            checked={allCheck}
                            onChange={(e)=>{
                                setAllCheck(e.target.checked)
                                setIsCheck(data.map(() => e.target.checked))
                            }}
                            type={"checkbox"}></S.CheckBox>
                    </S.UnBox>
                    <S.Box $length={510}>학번/이름</S.Box>
                </div>
                <div>
                    <S.Box $length={150}>8~9교시</S.Box>
                    <S.Box $length={150}>10~11교시</S.Box>
                </div>
            </S.Standard>
            <S.ContentBox ref = {parentRef} >
                {data&& data.length === 0 ? <S.NoData>데이터가 없습니다</S.NoData> : null}
                {data && data.map((item, idx) => {
                    return(
                        <S.Content key={item.id}>
                            {isOpen.some((value) => value === true) || isOpen2.some((value) => value === true)  ?
                                <S.Black onClick={()=>{
                                    setIsOpen(isOpen.map(() => false))
                                    setIsOpen2(isOpen2.map(() => false))
                                }}></S.Black> : null}
                            <div>
                                <S.UnBox>
                                    <S.CheckBox checked={isCheck[idx]} onChange={(e)=>{setIsCheck([...isCheck.slice(0, idx), e.target.checked, ...isCheck.slice(idx+1)]);}} type={"checkbox"}></S.CheckBox>
                                </S.UnBox>
                                <S.Box2 style={{display:'flex'}} $length={510}>
                                    <p>{item.student.slice(0, 4)}</p>
                                    {item.student.slice(4, 8)}
                                </S.Box2>
                            </div>
                            <div>
                                <S.Box2 $length={90} ref={(el) => (childRefs.current[idx] = el)}>
                                    {isOpen[idx] &&
                                        <StatusUpdate
                                            changeStatus={changeStatus}
                                            name={isCheck.some((value)=>value===true) ?
                                                data.filter((_, idx)=>isCheck[idx] === true)
                                                    .map((item)=> item['8th_id'])
                                                : item['8th_id']}
                                            up={isFirst === idx ? 58 : -160}
                                            period = {"8~9교시"}
                                        />}
                                    {item['8th_schedule'] === "방과후" ?
                                        <S.Status color={"#ECF3FD"} onClick={()=>handleIsOpen(idx)}>
                                            <S.Circle color={"#2E6FF2"}></S.Circle>
                                            <S.StatusText color={"#2E6FF2"}>방과후</S.StatusText>
                                        </S.Status> :
                                        item['8th_schedule'] === "조퇴" ?
                                            <S.Status color={"#FFF6E4"} onClick={()=>handleIsOpen(idx)}>
                                                <S.Circle color={"#FF9000"}></S.Circle>
                                                <S.StatusText color={"#FF9000"}>조퇴</S.StatusText>
                                            </S.Status> :
                                            item['8th_schedule'] === "자습" ?
                                                <S.Status color={"#ECFDF3"} onClick={()=>handleIsOpen(idx)}>
                                                    <S.Circle color={"#14BA6D"}></S.Circle>
                                                    <S.StatusText color={"#14BA6D"}>자습</S.StatusText>
                                                </S.Status> :
                                                item['8th_schedule'] === "이탈" ?
                                                    <S.Status color={"#FDF0EC"} onClick={()=>handleIsOpen(idx)}>
                                                        <S.Circle color={"#F87067"}></S.Circle>
                                                        <S.StatusText color={"#F87067"}>이탈</S.StatusText>
                                                    </S.Status> :
                                                    item['8th_schedule'] === "이석" ?
                                                        <S.Status color={"#F0ECFD"} onClick={()=>handleIsOpen(idx)}>
                                                            <S.Circle color={"#6A1EC1"}></S.Circle>
                                                            <S.StatusText color={"#6A1EC1"}>이석</S.StatusText>
                                                        </S.Status> :
                                                        <S.Status>
                                                            <S.StatusText>X</S.StatusText>
                                                        </S.Status>}
                                </S.Box2>

                                <S.Box2 $length={90}>
                                    {isOpen2[idx] &&
                                        <StatusUpdate
                                            changeStatus={changeStatus}
                                            name={isCheck.some((value)=>value===true) ?
                                                data.filter((_, idx)=>isCheck[idx] === true)
                                                    .map((item)=> item['10th_id'])
                                                : item['10th_id']}
                                            up={isFirst === idx ? 58 : -160}
                                            left={-60}
                                            period = {"10~11교시"}
                                        />}
                                    {item['10th_schedule'] === "방과후" ?
                                        <S.Status color={"#ECF3FD"} onClick={()=>handleIsOpen(idx, 2)}>
                                            <S.Circle color={"#2E6FF2"}></S.Circle>
                                            <S.StatusText color={"#2E6FF2"}>방과후</S.StatusText>
                                        </S.Status> :
                                        item['10th_schedule'] === "조퇴" ?
                                            <S.Status color={"#FFF6E4"} onClick={()=>handleIsOpen(idx, 2)}>
                                                <S.Circle color={"#FF9000"}></S.Circle>
                                                <S.StatusText color={"#FF9000"}>조퇴</S.StatusText>
                                            </S.Status> :
                                            item['10th_schedule'] === "자습" ?
                                                <S.Status color={"#ECFDF3"} onClick={()=>handleIsOpen(idx, 2)}>
                                                    <S.Circle color={"#14BA6D"}></S.Circle>
                                                    <S.StatusText color={"#14BA6D"}>자습</S.StatusText>
                                                </S.Status> :
                                                item['10th_schedule'] === "이탈" ?
                                                    <S.Status color={"#FDF0EC"} onClick={()=>handleIsOpen(idx, 2)}>
                                                        <S.Circle color={"#F87067"}></S.Circle>
                                                        <S.StatusText color={"#F87067"}>이탈</S.StatusText>
                                                    </S.Status> :
                                                    item['10th_schedule'] === "이석" ?
                                                        <S.Status color={"#F0ECFD"} onClick={()=>handleIsOpen(idx, 2)}>
                                                            <S.Circle color={"#6A1EC1"}></S.Circle>
                                                            <S.StatusText color={"#6A1EC1"}>이석</S.StatusText>
                                                        </S.Status> :
                                                        <S.Status>
                                                            <S.StatusText>X</S.StatusText>
                                                        </S.Status> }
                                </S.Box2>
                            </div>


                        </S.Content>
                    )
                })}
            </S.ContentBox>
        </S.StudentContainer>
    );
}
import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce.js";
import {getTeacher} from "../../../api/teacher.js";
import {usePatchTeacher} from "../../../hooks/useTeacher.js";
import {useStatusUpdate} from "../../../zustand/statusUpdate.js";
import StatusUpdate from "../../../components/status-update/index.jsx";
import UpVersion from "../../../assets/upVersion.svg";
import DownVersion from "../../../assets/downVersion.svg";
import SearchBox from "../../../components/searchBox/index.jsx";

export default function AdminTeacher() {
    const navigate = useNavigate();
    const [isPatch, setIsPatch] = useState(false);
    const [search, setSearch] = useState("");
    const debounce = useDebounce(search, 200);
    const [value, setValue] = useState([]);
    const {status} = useStatusUpdate();
    const [isOpen,setIsOpen] = useState([]);
    const [isCount, setIsCount] = useState(false);
    useEffect(() => {
        const fetchData = async ()=>{
            const data = await getTeacher(debounce);
            setValue(
                data.data.reduce((acc, item, index) => {
                    acc[index + 1] = { ...item};
                    return acc;
                }, {})
            );
            setIsOpen(data.data.reduce((acc, item, index) => {
                acc[index + 1] = { status: false };
                return acc;
            }, {}));
        }
        fetchData();
    }, [debounce, status, isCount]);

    const change = (fe_id, v, target)=>{
        const newValue = {...value};
        newValue[fe_id][target] = v;
        setValue(newValue);
    }
    const deleteTeacher = (id) =>{
        const newValue = {...value};
        delete newValue[id];
        setValue(newValue);
    }
    const addTeacher = ()=>{
        const newValue = {};
        Object.keys(value).forEach((key) => {
            newValue[Number(key) + 1] = value[key];
        });
        newValue[1] = { name: "", email: "" , count : 0, role : "TEACHER"};
        setValue(newValue);
        const newIsOpen = {};
        Object.keys(isOpen).forEach((key) => {
            newIsOpen[Number(key) + 1] = isOpen[key];
        });
        newIsOpen[1] = {status : false};
        setIsOpen(newIsOpen);
    }

    const {mutate : patchTeacher} = usePatchTeacher();
    const saveTeacher = () => {
        if(Object.keys(value).some((item)=>value[item].email === "" || value[item].name === "")){
            alert("값을 채워주세요")
            return;
        }
        const newValue = [];
        Object.keys(value).forEach((key) => {
            newValue[Number(key - 1)] = value[key];
        });
        const onSuccessPatch = () => {
            setIsPatch(false);
        }
        patchTeacher({teachers: newValue, onSuccessPatch: onSuccessPatch});
    }


    const changeStatus= (name, status) => {
        setIsOpen(prevState =>
            Object.fromEntries(Object.keys(prevState).map(key => [key, { status: false }]))
        );
        console.log(name, status)
        const newValue = {...value};
        newValue[name].role = status === "일반" ? "TEACHER" : "ADMIN";
        setValue(newValue);

    }
    const handleIsOpen = (id)=>{
        const newIsOpen = {...isOpen};
        newIsOpen[id].status = !newIsOpen[id].status;
        setIsOpen(newIsOpen);
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
    <S.Container>
        {Object.keys(isOpen).some((item)=>isOpen[item].status === true) &&
            <S.Black onClick={()=>setIsOpen(prevState => Object.fromEntries(Object.keys(prevState).map(key => [key, { status: false }])))} />}
      <Header/>
      <S.Wrap>
        <S.Info>
            <h1>선생님 관리</h1>
            <S.InfoBtn>
                <SquareBtn name={"돌아가기"} status={true} On={() => {
                    if(isPatch) {
                        if(confirm("정말로 이동하시겠습니까?")) navigate("/admin")
                    }else navigate('/admin')
                }} />
                <SquareBtn name={"금지날짜"} status={true} On={() => {
                    if(isPatch) {
                        if(confirm("정말로 이동하시겠습니까?")) navigate('/admin/teacher/prohibition')
                    }else navigate('/admin/teacher/prohibition')
                }} />
            </S.InfoBtn>
        </S.Info>
        <S.Main>
            <S.MainNav>
                <div>
                    <SearchBox value={search} change={setSearch} target={"선생님"} />
                    <S.Array onClick={()=>setIsCount(!isCount)}>
                        <p>자습감독횟수</p>
                        <img width={'20%'} src={isCount ? DownVersion : UpVersion} alt={"updown"} />
                    </S.Array>
                </div>
                <div>
                    {!isPatch && <S.Btn $color = {"#2E6FF2"} onClick={()=>{setIsPatch(true)}} >수정</S.Btn>}
                    {isPatch && <S.Btn $color = {"#2E6FF2"} onClick={()=>{addTeacher()}} >+ 추가</S.Btn>}
                    {isPatch && <S.Btn $color = {"#2E6FF2"} onClick={()=>{saveTeacher()}} >저장</S.Btn>}
                </div>
            </S.MainNav>
            <S.Table>
                <S.Standard>
                    <div>
                        <S.UnBox></S.UnBox>
                        <S.Box $length={130}>자습 감독 횟수</S.Box>
                        <S.Box $length={110}>이름</S.Box>
                        <S.Box $length={110}>이메일</S.Box>
                    </div>
                    <div>
                        <S.Box $length={isPatch ? 220 : 110}>권한</S.Box>
                    </div>
                </S.Standard>
                <S.ContentBox ref={parentRef}>
                    {value && Object.keys(value).map((item)=>{
                        const color = value[item].role === "TEACHER" ? "#2E6FF2" : "#F87067";
                        if(isPatch){
                            return(
                                <S.Content key={value[item].teacher_id}>
                                    <div>
                                        <S.UnBox></S.UnBox>
                                        <S.Box2 $length={130}>{value[item].count}</S.Box2>
                                        <S.InputTeacher $length={100} value={value[item].name} onChange={(e)=>{
                                            change(item, e.target.value, "name")
                                        }}/>
                                        <S.InputTeacher $length={270} value={value[item].email} onChange={(e)=>{
                                            change(item, e.target.value, "email")
                                        }}/>
                                    </div>
                                    <div>
                                        <div ref={(el) => (childRefs.current[item] = el)} style={{ position:'relative'}}>
                                            <S.Status  onClick={()=>handleIsOpen(item)} $color = {value[item].role === "TEACHER" ? "#ECF3FD" : "#FDF0EC"}>
                                                <S.Circle $color = {color}></S.Circle>
                                                <S.StatusText $color = {color}>{value[item].role === "TEACHER" ? "일반" : "관리자"}</S.StatusText>
                                            </S.Status>
                                            {isOpen && isOpen[item].status && <StatusUpdate up={isFirst === Number(item) ? 58 : -160} nowStatus={"TEACHER"} changeStatus={changeStatus} name={item}/>}
                                        </div>
                                        <div style={{width:  120}}>
                                            <S.Btn $color = {"#F87067"} onClick={()=>deleteTeacher(item)}>삭제</S.Btn>
                                        </div>
                                    </div>
                                </S.Content>
                            )
                        }
                        return(
                            <S.Content key={value[item].teacher_id}>
                                <div>
                                    <S.UnBox></S.UnBox>
                                    <S.Box2 $length={130}>{value[item].count}</S.Box2>
                                    <S.Box2 $length={110}>{value[item].name}</S.Box2>
                                    <S.Box2 $length={110}>{value[item].email}</S.Box2>
                                </div>
                                <div>
                                    <div style={{width:  110}}>
                                        <S.Status style={{cursor: "default"}} $color = {value[item].role === "TEACHER" ? "#ECF3FD" : "#FDF0EC"}>
                                            <S.Circle $color = {color}></S.Circle>
                                            <S.StatusText $color = {color}>{value[item].role === "TEACHER" ? "일반" : "관리자"}</S.StatusText>
                                        </S.Status>
                                    </div>
                                </div>
                            </S.Content>
                        )
                    })}
                </S.ContentBox>
            </S.Table>
        </S.Main>
      </S.Wrap>
    </S.Container>
  )
}
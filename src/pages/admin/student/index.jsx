import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import {useNavigate} from "react-router-dom";
import CircleBtn from "../../../components/button/circle/index.jsx";
import {useEffect, useState} from "react";
import Search from "../../../assets/Search.svg";
import {useDebounce} from "../../../hooks/useDebounce.js";
import {searchStudent} from "../../../api/search.js";
import {useCreateStudent} from "../../../hooks/useStudent.js";
import {useStatusUpdate} from "../../../zustand/statusUpdate.js";
import SearchBox from "../../../components/searchBox/index.jsx";

export default function AdminStudent() {
  const navigate = useNavigate();
  const [isGrade, setIsGrade] = useState([true, false, false]);
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 200);
  const [value, setValue] = useState([]);
  const {status} = useStatusUpdate();
  useEffect(() => {
    const fetchData = async () =>{
      const data = await searchStudent(debounce);
      setValue(
          data.reduce((acc, item, index) => {
            acc[index + 1] = { ...item};
            return acc;
          }, {})
      );
    }
    fetchData();
  }, [debounce, isGrade, status]);

  const [isPatch, setIsPatch] = useState(false);
  const addStudent = () => {
    const newValue = {};
    Object.keys(value).forEach((key) => {
      newValue[Number(key) + 1] = value[key];
    });
    newValue[1] = { name: "", number: "" };

    setValue(newValue);
  };
  const deleteStudent = (fe_id) =>{
    const newValue = {...value};
    delete newValue[fe_id];
    setValue(newValue);
  }
  const {mutate : createStudent} = useCreateStudent();
  const changeNumber = (fe_id, number)=>{
    const newValue = {...value};
    newValue[fe_id].number = number;
    setValue(newValue);
  }
  const changeName = (fe_id, name)=>{
    const newValue = {...value};
    newValue[fe_id].name = name;
    setValue(newValue);
  }

  const saveStudent = () =>{
    if(Object.keys(value).some((item)=>value[item].number === "" || value[item].name === "")){
      alert("학번과 이름을 입력해주세요");
      return ;
    }
    const newValue = [];
    Object.keys(value).forEach((key) => {
      newValue[Number(key-1)] = value[key];
    });
    const grade = isGrade[0] ? 1 : isGrade[1] ? 2 : 3;
    const onSuccessPatch = () => {
      setIsPatch(false);
    }
    createStudent({students : newValue, grade : grade, onSuccessPatch : onSuccessPatch});
  }
  return (
    <S.Container>
      <Header />
      <S.Wrap>
        <S.Info>
          <h1>학생 관리</h1>
          <S.InfoBtn>
            <SquareBtn name={"돌아가기"} status={true} On={() => {
              if(isPatch) {
                if(confirm("정말로 이동하시겠습니까?")) navigate("/admin")
              }else navigate('/admin')
            }} />
          </S.InfoBtn>
        </S.Info>
        <S.Main>
          <S.MainNav>
            <div>
              <CircleBtn name={"1학년"} status={isGrade[0]}  On={()=>{
                if(isPatch) {
                  if(confirm("정말로 이동하시겠습니까?")) setIsGrade([true, false, false])
                }else{
                  setIsGrade([true, false, false])
                }
              }}/>
              <CircleBtn name={"2학년"} status={isGrade[1]} On={()=> {
                if(isPatch) {
                  if(confirm("정말로 이동하시겠습니까?")) setIsGrade([false, true, false])
                }else{
                  setIsGrade([false, true, false])
                }
              }}/>
              <CircleBtn name={"3학년"} status={isGrade[2]} On={()=> {
                if(isPatch) {
                  if(confirm("정말로 이동하시겠습니까?")) setIsGrade([false, false, true])
                }else{
                  setIsGrade([false, false, true])
                }
              }}/>
              <SearchBox value={search} change={setSearch} target={"학생"} />
              {/*<S.InputBox>*/}
              {/*  <img src={Search} alt={"검색아이콘"} width={20}></img>*/}
              {/*  <S.Input*/}
              {/*      type={"text"}*/}
              {/*      placeholder={"학생을 입력해주세요"}*/}
              {/*      value={search}*/}
              {/*      onChange={(e)=>setSearch(e.target.value)}*/}
              {/*  />*/}
              {/*</S.InputBox>*/}
            </div>
            <div>
              {!isPatch && <S.Btn $color = {"#2E6FF2"} onClick={()=>{setIsPatch(true)}} >수정</S.Btn>}
              {isPatch && <S.Btn $color = {"#2E6FF2"} onClick={()=>{addStudent()}} >+ 추가</S.Btn>}
              {isPatch && <S.Btn $color = {"#2E6FF2"} onClick={()=>{saveStudent()}} >저장</S.Btn>}
            </div>
          </S.MainNav>
          <S.Table>
            <S.Standard>
              <S.UnBox></S.UnBox>
              <S.Box $length={110}>학번 / 이름</S.Box>
            </S.Standard>
            <S.ContentBox>
              {Object.keys(value).length === 0 && <S.NoData>데이터가 없습니다</S.NoData> }
              {value && Object.keys(value).map((item)=>{
                if(isPatch)
                  return(
                    <S.Content key={item}>
                      <S.UnBox></S.UnBox>
                      <S.InputStudent
                          $length={150}
                          type={"text"}
                          placeholder={"학번"}
                          value={value[item].number}
                          onChange={(e)=>changeNumber(item, e.target.value)}
                      />
                      <S.InputStudent
                          $length={150}
                          type={"text"}
                          placeholder={"이름"}
                          value={value[item].name}
                          onChange={(e)=>changeName(item, e.target.value)}
                      />
                      <S.PatchBox>
                        <S.Btn $color = {"#F87067"} onClick={()=>deleteStudent(item)}>삭제</S.Btn>
                      </S.PatchBox>
                    </S.Content>
                )
                return(
                      <S.Content key={item}>
                        <S.UnBox></S.UnBox>
                        <S.Box2 $length={110}>{value[item].number} {value[item].name}</S.Box2>
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
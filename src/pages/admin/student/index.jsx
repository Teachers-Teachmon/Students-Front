import * as S from './style.jsx'
import Header from "../../../components/header/index.jsx";
import SquareBtn from "../../../components/button/square/index.jsx";
import { useNavigate } from "react-router-dom";
import CircleBtn from "../../../components/button/circle/index.jsx";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce.js";
import { searchStudent } from "../../../api/search.js";
import { useCreateStudent, useDeleteStudent, usePutStudent } from "../../../hooks/useStudent.js";
import { useStatusUpdate } from "../../../zustand/statusUpdate.js";
import SearchBox from "../../../components/searchBox/index.jsx";
import OptionButton from "../../../assets/OptionButton.svg";

export default function AdminStudent() {
  const navigate = useNavigate();
  const [isGrade, setIsGrade] = useState([true, false, false]);
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 200);
  const [value, setValue] = useState([]);
  const { status } = useStatusUpdate();
  const num = useRef(0)
  const [isOption, setIsOption] = useState([]);
  const [backUp, setBackUp] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await searchStudent(debounce);
      const newValue = data.reduce((acc, item, index) => {
        acc[index + 1] = { ...item, isPatch: false };
        return acc;
      }, {});
      setValue(
        data.reduce((acc, item, index) => {
          acc[index + 1] = { ...item, isPatch: false };
          return acc;
        }, {})
      );
      setBackUp(newValue);
      setIsOption(data.reduce((acc, item, index) => {
        acc[index + 1] = { status: false };
        return acc;
      }, {}));
    }
    fetchData();
  }, [debounce, isGrade, status]);


  const addStudent = () => {
    const newValue = {};
    Object.keys(value).forEach((key) => {
      newValue[Number(key) + 1] = value[key];
    });
    newValue[1] = { name: "", number: "", isPatch: true, id: null };

    setValue(newValue);

    const newIsOption = {};
    Object.keys(isOption).forEach((key) => {
      newIsOption[Number(key) + 1] = isOption[key];
    });
    newIsOption[1] = { status: false };
    setIsOption(newIsOption);
  };

  const changeNumber = (fe_id, number) => {
    const newValue = { ...value };
    newValue[fe_id].number = number;
    const grade = isGrade[0] ? '1' : isGrade[1] ? '2' : '3';
    if (newValue[fe_id].number.slice(0, 1) !== grade) {
      alert('학년에 맞는 학번을 입력해주세요.');
      return;
    }
    setValue(newValue);
  }
  const changeName = (fe_id, name) => {
    const newValue = { ...value };
    newValue[fe_id].name = name;
    setValue(newValue);
  }

  const { mutate: createStudent } = useCreateStudent();
  const { mutate: putStudent } = usePutStudent();
  const saveStudent = (id) => {
    if (value[id].name === '' || value[id].number === '') {
      alert("학번과 이름을 입력해주세요");
      return;
    }

    const grade = isGrade[0] ? 1 : isGrade[1] ? 2 : 3;
    const onSuccessPatch = () => {
      value[id].isPatch = false;
      setValue(Object.values(value).sort((a, b) => a.number - b.number));

    }

    value[id].number = Number(value[id].number);
    if (!value[id].id) createStudent({ students: value[id], grade: grade, onSuccessPatch: onSuccessPatch });
    else putStudent({ students: value[id], onSuccessPatch: onSuccessPatch });
  }
  const handleIsOption = (id, status, message) => {

    const newIsOption = { ...isOption };
    newIsOption[id].status = status;
    setIsOption(newIsOption);
  }

  const [isFirst, setIsFirst] = useState(0);
  const parentRef = useRef(null);
  const childRefs = useRef([]);
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

  const { mutate: deleteStudent } = useDeleteStudent();
  const deleteS = (id) => {
    if (!window.confirm('삭제하시겠습니까?')) return
    deleteStudent(value[id].id);
    const newValue = { ...value };
    delete newValue[id];
    setValue(newValue);
  }
  const handleIsPatch = (id, status, message) => {
    const newValue = { ...value };
    newValue[id].isPatch = status;
    if (message === "delete") {
      if (newValue[id].id) {
        newValue[id] = { ...backUp[id], isPatch: false };
      } else {
        delete newValue[id];
      }
    }
    setValue(newValue);
    handleIsOption(id, false);
  };
  return (
    <S.Container>
      {Object.keys(isOption).some((item) => isOption[item].status === true) &&
        <S.Black onClick={() => setIsOption(prevState => Object.fromEntries(Object.keys(prevState).map(key => [key, { status: false }])))} />}
      <Header />
      <S.Wrap>
        <S.Info>
          <h1>학생 관리</h1>
          <S.InfoBtn>
            <SquareBtn name={"돌아가기"} status={true} On={() => {navigate('/admin')}} />
          </S.InfoBtn>
        </S.Info>
        <S.Main>
          <S.MainNav>
            <div>
              <CircleBtn name={"1학년"} status={isGrade[0]} On={() => {
                setIsGrade([true, false, false])
              }} />
              <CircleBtn name={"2학년"} status={isGrade[1]} On={() => {
                setIsGrade([false, true, false])
              }} />
              <CircleBtn name={"3학년"} status={isGrade[2]} On={() => {
                setIsGrade([false, false, true])
              }} />
              <SearchBox value={search} change={setSearch} target={"학생"} />
            </div>
            <div>
              <S.Btn $color={"#2E6FF2"} onClick={() => { addStudent() }} >+ 추가</S.Btn>
            </div>
          </S.MainNav>
          <S.Table>
            <S.Standard>
              <S.UnBox></S.UnBox>
              <S.Box $length={110}>학번 / 이름</S.Box>
            </S.Standard>
            <S.ContentBox ref={parentRef}>
              {Object.keys(value).length === 0 && <S.NoData>데이터가 없습니다</S.NoData>}
              {value && Object.keys(value).map((item) => {
                if (value[item].isPatch && isGrade[Number((String(value[item].number).slice(0, 1))) - 1] || value[item].isPatch && value[item].number === '' || value[item].isPatch && value[item].name === '')
                  return (
                    <S.Content key={item}>
                      <S.UnBox></S.UnBox>
                      <S.InputStudent
                        $length={150}
                        type={"text"}
                        placeholder={"학번"}
                        value={value[item].number}
                        onChange={(e) => {
                          changeNumber(item, e.target.value)
                        }}
                      />
                      <S.InputStudent
                        $length={150}
                        type={"text"}
                        placeholder={"이름"}
                        value={value[item].name}
                        onChange={(e) => changeName(item, e.target.value)}
                      />
                      <S.PatchBox>
                        <S.Btn $color={"white"} onClick={() => handleIsPatch(item, false, "delete")}>취소</S.Btn>
                        <S.Btn $color={"#2E6FF2"} onClick={() => saveStudent(item)}>저장</S.Btn>
                      </S.PatchBox>
                    </S.Content>
                )
                else if(isGrade[Number((String(value[item].number).slice(0, 1)))-1]){
                  return(
                      <S.Content key={item}>
                        <S.UnBox></S.UnBox>
                        <S.Box2  style={{display:'flex'}} $length={110}><p>{value[item].number}</p>{value[item].name}</S.Box2>
                        <S.Option ref={(el) => (childRefs.current[item] = el)} src={OptionButton} alt={'option'} onClick={()=>handleIsOption(item, true)}/>
                        {isOption && isOption[item].status &&
                            <S.Options $up = {isFirst+8 === Number(item) || isFirst+9 === Number(item) || isFirst+10 === Number(item) || isFirst+11 === Number(item)|| isFirst+12 === Number(item) ? -60 : 40} onClick={(e) => e.stopPropagation()}>
                              <button onClick={()=>deleteS(item)}>삭제</button>
                              <button onClick={()=>handleIsPatch(item, true)}>수정</button>
                            </S.Options>}
                      </S.Content>
                  )
                }
              })}
            </S.ContentBox>
          </S.Table>
        </S.Main>
      </S.Wrap>
    </S.Container>
  )
}
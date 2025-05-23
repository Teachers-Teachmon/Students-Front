import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import DayBtn from '../../../components/button/circle/index.jsx';
import {useState, useEffect, useRef} from 'react';
import DropdownNS from '../../../components/dropdown/nosearch/index.jsx';
import DropdownS from '../../../components/dropdown/search/index.jsx';
import Download from '../../../assets/Download.svg';
import Upload from '../../../assets/Upload.svg';
import Confirm from '../../../components/button/confirm/index.jsx';
import Search from '../../../assets/Search.svg';
import OptionButton from '../../../assets/OptionButton.svg';
import Square from '../../../components/button/square/index.jsx';
import { useGetAfterSchoolClasses } from '../../../hooks/useAfterSchool.js';
import { searchStudent, searchPlace, searchTeacher } from "../../../api/search.js";
import { useSaveClass } from '../../../hooks/useAfterSchool.js';
import { useDebounce } from '../../../hooks/useDebounce.js';
import { useUpload } from '../../../hooks/useAfterSchool.js';
import { useFlush } from '../../../hooks/useAfterSchool.js';
import ErrorModal from '../../../components/modal/errorModal/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import Loading from '../../../components/loading/index.jsx';

export default function AdminAfterSchool() {
  const [isModal1, setIsModal1] = useState(false);
  const [branch, setBranch] = useState('1');
  const [weekday, setWeekday] = useState('MON');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedGrade, setSelectedGrade] = useState(1);
  const [options, setOptions] = useState({});
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});

  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const debounceStudent = useDebounce(search, 300);
  const [student, setStudent] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleCloseOptions = () => {
    setOptions({});
  };

  const handleCloseBranch = () => {
    setIsBranchOpen(false);
  };

  const extractSpreadsheetId = (url) => {
    const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  const handleUpload = async () => {
    const id = extractSpreadsheetId(spreadsheetUrl);

    if (!id) {
      alert("유효한 Spreadsheet 링크를 입력해주세요.");
      return;
    }

    setSpreadsheetId(id);
    setIsLoading(true);

    uploadMutation(id, {
      onError: (error) => {
        console.error("업로드 에러:", error);
        if (error.response?.status === 400) {
          setErrorMessage(error.response.data?.message);
          setIsModal1(true);
        }
      },
      onSuccess: () => {
        alert("업로드가 성공적으로 완료되었습니다.");
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  };

  const handleFlush = async () => {
    const id = extractSpreadsheetId(spreadsheetUrl);

    if (!id) {
      alert('유효한 Spreadsheet 링크를 입력해주세요.');
      return;
    }

    setSpreadsheetId(id);
    setIsLoading(true);

    flushMutation(id, {
      onSuccess: () => {
        alert("데이터가 성공적으로 동기화되었습니다.");
      },
      onError: (error) => {
        alert("동기화 중 오류가 발생했습니다.");
        console.error("동기화 에러:", error);
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  };
  
  const handleOptionClick = (grade, index) => {
    setOptions((prev) => ({
      ...prev,
      [grade]: prev[grade] === index ? null : index,
    }));

    setSelectedRows((prev) => ({
      ...prev,
      [grade]: prev[grade] === index ? null : { ...grades[grade][index], index },
    }));

    setSelectedGrade(grade);
  };

  const handleComplete = () => {
    const formattedData = Object.keys(grades)
      .map((classKey) =>
        grades[classKey].map((item) => {
          return {
            branch: Number(branch),
            grade: parseInt(classKey),
            period: item["period"] || "",
            teacherName: item["teacherName"] || "",
            placeName: item["placeName"] || "",
            name: item["name"] || "",
            students: item["students"] || [],
          };
        })
      )
      .flat();
    let weekDay
    switch (weekday) {
      case 'MON':
        weekDay = '월';
        break;
      case 'TUE':
        weekDay = '화';
        break;
      case 'WED':
        weekDay = '수';
        break;
      case 'THU':
        weekDay = '목';
        break;
    }
    const value = {
      "weekDay": weekDay,
      "list": formattedData
    }
    saveClass(value);
  };


  const [selectStudent, setSelectStudent] = useState({
    class1: [],
    class2: [],
    class3: [],
    class4: [],
  });

  const weekDays = ["MON", "TUE", "WED", "THU"];
  const koreanWeekDays = ["월", "화", "수", "목"];

  const branches = [1, 2, 3, 4];

  const periods = ['8~9교시', '10~11교시'];

  const { data, isLoadin } = useGetAfterSchoolClasses(branch, weekday);
  const { mutate: uploadMutation } = useUpload();
  const { mutate: flushMutation } = useFlush();



  const [grades, setGrades] = useState({
    1: [], 2: [], 3: []
  });

  useEffect(() => {
    if (!data || data.length === 0) return;

    setGrades({
      1: data[0] || [],
      2: data[1] || [],
      3: data[2] || [],
    });
  }, [data]);


  useEffect(() => {
    const fetchStudents = async () => {
      const students = await searchStudent(search);
      setStudent(students);
    };
    fetchStudents();
  }, [debounceStudent]);

  useEffect(() => {
    setIsOpen((prev) => ({
      1: grades[1]?.map((_, index) => prev[1]?.[index] || { period: false, teacherName: false, placeName: false }) || [],
      2: grades[2]?.map((_, index) => prev[2]?.[index] || { period: false, teacherName: false, placeName: false }) || [],
      3: grades[3]?.map((_, index) => prev[3]?.[index] || { period: false, teacherName: false, placeName: false }) || [],
    }));
  }, [grades]);


  const { mutate: saveClass } = useSaveClass();

  const addRow = (grade) => {
    setGrades(prev => ({
      ...prev,
      [grade]: [...prev[grade], { period: '', weekDay: weekday, teacherName: '', placeName: '', name: '', students: [] }],
    }));
  };

  useEffect(() => {
    setIsOpen({
      1: grades[1]?.map(() => ({ period: false, teacherName: false, placeName: false })) || [],
      2: grades[2]?.map(() => ({ period: false, teacherName: false, placeName: false })) || [],
      3: grades[3]?.map(() => ({ period: false, teacherName: false, placeName: false })) || [],
    });
  }, [grades]);

  const [isOpen, setIsOpen] = useState({
    1: grades[1].map(() => ({ period: false, teacherName: false, placeName: false })),
    2: grades[2].map(() => ({ period: false, teacherName: false, placeName: false })),
    3: grades[3].map(() => ({ period: false, teacherName: false, placeName: false })),
  });


  const handleDropdownClick = (grade, index, field) => {
    setIsOpen((prev) => ({
      ...prev,
      [grade]: {
        ...prev[grade],
        [index]: {
          ...prev[grade]?.[index],
          [field]: !prev[grade]?.[index]?.[field],
        },
      },
    }));
  };

  const handleSave = () => {
    setGrades(prev => ({
      ...prev,
      [selectedGrade]: prev[selectedGrade].map((row, idx) =>
        idx === selectedRows[selectedGrade].index
          ? { ...row, ...selectedRows[selectedGrade] }
          : row
      ),
    }));

    setIsModalOpen(false);
  };


  const handleInputChange = (grade, index, field, value) => {
    setSelectedRows(prev => ({
      ...prev,
      [grade]: {
        ...prev[grade],
        [field]: value,
      }
    }));

    setGrades(prev => ({
      ...prev,
      [grade]: prev[grade].map((row, idx) =>
        idx === index ? { ...row, [field]: value } : row
      ),
    }));
  };

  const handleReset = () => {
    setGrades({
      1: [],
      2: [],
      3: [],
    });

    setSelectStudent({
      class1: [],
      class2: [],
      class3: [],
      class4: [],
    });
    setSearch("");
    setSelectedPeriod('');
    setIsOpen({
      1: [],
      2: [],
      3: [],
    });
    setDay([true, false, false, false]);
  };

  const handleDeleteRow = (grade, index) => {
    setGrades(prev => ({
      ...prev,
      [grade]: prev[grade].filter((_, idx) => idx !== index),
    }));
  };


  const toggleBranchDropdown = () => {
    setIsBranchOpen((prev) => !prev);
  };

  const handleBranchChange = (selectedBranch) => {
    setBranch(selectedBranch);
  };

  const handleWeekdayChange = (selectedWeekday) => {
    setWeekday(selectedWeekday);
  };


  const [detailIsOpen, setDetailIsOpen] = useState([false, false, false]);
  const isGrade = useRef(null);


  return (
    <S.EditContainer onClick={() => {
      handleCloseOptions();
      handleCloseBranch();
    }}>
      {isLoading && <Loading />}
      <Header />
      <S.Content>
        {Object.values(isOpen).some(status => Object.values(status).some(subStatus => Object.values(subStatus).includes(true))) && (
          <S.Black onClick={() => setIsOpen({})} />
        )}
        <S.EditTop>
          <S.EditTopLeft>
            <S.TopDate $length={5} onClick={(e) => e.stopPropagation()}>
              <DropdownNS

                name={branch}
                item={branches}
                change={handleBranchChange}
                isOpen={isBranchOpen}
                click={toggleBranchDropdown}
              />
            </S.TopDate>
            <S.TopDay>
              {weekDays.map((day, index) => (
                <DayBtn
                  key={day}
                  name={koreanWeekDays[index]}
                  status={weekday === day}
                  On={() => handleWeekdayChange(day)}
                />
              ))}
            </S.TopDay>
          </S.EditTopLeft>

          <S.EditTopRight>
            <S.FileBtn>
              <S.Link
                type="text"
                value={spreadsheetUrl}
                onChange={(e) => setSpreadsheetUrl(e.target.value)}
                placeholder="Google Sheet 링크"
              />
              <S.FileDown onClick={handleFlush}><S.DownImg src={Download} />동기화</S.FileDown>
              <S.FileUp onClick={handleUpload}>
                <S.FileUpBtn htmlFor="file-upload">
                  <S.UpImg src={Upload} alt="업로드 아이콘" />
                  업로드
                </S.FileUpBtn>
              </S.FileUp>
            </S.FileBtn>
            <S.ReComBtn>
              <SquareBtn status={true} On={handleReset} name="초기화" />
              <SquareBtn status={true} On={handleComplete} name="완료" />
            </S.ReComBtn>
          </S.EditTopRight>
        </S.EditTop>

        <S.EditContent >
          <S.EditMain>
            {[1, 2, 3].map((grade) => (
              <S.EditMainData key={grade}>
                <S.EditMainTop>
                  <S.TopData $length={2}>학년</S.TopData>
                  <S.TopData $length={8}>교시</S.TopData>
                  <S.TopData $length={7}>담당교사</S.TopData>
                  <S.TopData $length={14.5}>장소</S.TopData>
                  <S.TopData $length={18}>방과후</S.TopData>
                  <p>* 학생은 자세히 보기에서 수정해 주세요.</p>
                </S.EditMainTop>

                {grades[grade]?.length > 0 && grades[grade].map((row, index) => (
                  <S.EditRow key={index}>
                    <S.RowData $length={12}>
                      <S.Grade>
                        <div>{grade}</div>
                        <DropdownNS
                          name={row.period || '교시'}
                          item={periods}
                          change={value => handleInputChange(grade, index, 'period', value)}
                          isOpen={isOpen[grade]?.[index]?.period}
                          click={() => handleDropdownClick(grade, index, 'period')}
                        />
                      </S.Grade>
                    </S.RowData>
                    <S.RowData $length={8.5}>
                      <DropdownS
                        target="선생님"
                        name={row.teacherName || "담당교사"}
                        change={(value) => handleInputChange(grade, index, 'teacherName', value.name)}
                        isOpen={isOpen[grade]?.[index]?.teacherName}
                        click={() => handleDropdownClick(grade, index, 'teacherName')}
                        axios={(event) => searchTeacher(event)}
                      />

                    </S.RowData>
                    <S.RowData $length={16.5}>
                      <DropdownS
                        target="장소"
                        change={value => handleInputChange(grade, index, 'placeName', value.name)}
                        isOpen={isOpen[grade]?.[index]?.placeName}
                        click={() => handleDropdownClick(grade, index, 'placeName')}
                        axios={(event) => searchPlace(event)}
                        name={row.placeName || "장소"}
                      />
                    </S.RowData>
                    <S.RowData $length={38}>
                      <S.ClassData
                        type='text'
                        value={row.name || ''}
                        placeholder='방과후 이름을 작성해 주세요.'
                        onChange={e => handleInputChange(grade, index, 'name', e.target.value)}
                      />
                    </S.RowData>
                    <S.OptionButton
                      src={OptionButton}
                      onClick={(e) => {
                        handleOptionClick(grade, index);
                        e.stopPropagation()
                      }}
                    />
                    {options[grade] === index && (
                      <S.Options onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => {
                          setOptions((prev) => ({ ...prev, [grade]: null }));
                          setSelectedGrade(grade);
                          setIsModalOpen(true);
                          isGrade.current = grade
                        }}>자세히 보기</button>
                        <button onClick={() => {
                          handleDeleteRow(grade, index);
                          setOptions((prev) => ({ ...prev, [grade]: null }));
                        }}>삭제</button>
                      </S.Options>
                    )}
                  </S.EditRow>
                ))}
                <S.PlusBtn onClick={() => addRow(grade)}>+</S.PlusBtn>
              </S.EditMainData>
            ))}
          </S.EditMain>
        </S.EditContent>
      </S.Content>

      {isModal1 && (
        <S.ErrorModal onClick={() => setIsModal1(false)}>
          <S.ErrorModalmain onClick={(e) => e.stopPropagation()}>
            <ErrorModal message={errorMessage} />
          </S.ErrorModalmain>
        </S.ErrorModal>
      )}


      {isModalOpen && selectedRows[selectedGrade] && (
        <S.ModalOverlay onClick={() => setIsModalOpen(false)}>
          <S.ModalContent onClick={(e) => {
            e.stopPropagation();
            setDetailIsOpen([false, false, false]);
          }}>
            <S.ModalContentTop>
              <h1>{selectedGrade}학년</h1>
            </S.ModalContentTop>
            <S.ModalMain>
              <S.ModalRL>
                <S.ModalLeft>
                  <span onClick={(e) => e.stopPropagation()}>
                    <DropdownS
                      target="선생님"
                      name={selectedRows[selectedGrade].teacherName || "담당교사"}
                      axios={(event) => searchTeacher(event)}
                      change={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'teacherName', value.name)}
                      click={() => setDetailIsOpen([!detailIsOpen[0], false, false])}
                      isOpen={detailIsOpen[0]}

                    />
                  </span>
                  <span onClick={(e) => e.stopPropagation()}>
                    <DropdownNS
                      name={selectedRows[selectedGrade].period || "시간"}
                      item={periods}
                      change={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'period', value)}
                      isOpen={detailIsOpen[1]}
                      click={() => setDetailIsOpen([false, !detailIsOpen[1], false])}
                    />
                  </span>
                </S.ModalLeft>
                <S.ModalRight>
                  <span onClick={(e) => e.stopPropagation()}>
                    <S.ClassData
                      type='text'
                      value={selectedRows[selectedGrade].name}
                      onChange={(e) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'name', e.target.value)}
                      placeholder={'방과후를 입력해 주세요.'}
                    />
                  </span>
                  <S.DropdownFL>
                    <span onClick={(e) => e.stopPropagation()}>
                      <DropdownS
                        target="장소"
                        name={selectedRows[selectedGrade].placeName || "장소"}
                        change={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'placeName', value.name)}
                        click={() => setDetailIsOpen([false, false, !detailIsOpen[2]])}
                        isOpen={detailIsOpen[2]}
                        axios={(event) => searchPlace(event)}
                      />
                    </span>
                  </S.DropdownFL>
                </S.ModalRight>
              </S.ModalRL>

              <S.StudentContent onClick={(e) => e.stopPropagation()}>
                <S.InputBox>
                  <img src={Search} alt={"검색아이콘"} width={20}></img>
                  <S.Input
                    type={"text"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={"학생을 입력해주세요."}
                  />
                  <S.StudentList>
                    {search && student &&
                      student
                        .filter(item =>
                          !selectedRows[isGrade.current].students.some(student => student.name === item.name))
                        .map((currentItem, index) => {
                          return (
                            <S.StudentItem
                              key={index}
                              onClick={() => {
                                setSelectedRows((prev) => ({
                                  ...prev,
                                  [selectedGrade]: {
                                    ...prev[selectedGrade],
                                    students: [...prev[selectedGrade].students, currentItem]
                                  }
                                }))
                                setSearch("");
                              }}
                            >
                              {currentItem.number} {currentItem.name}
                            </S.StudentItem>
                          );
                        })
                    }
                  </S.StudentList>
                </S.InputBox>
              </S.StudentContent>

              <span onClick={(e) => e.stopPropagation()}>
                <S.StudentBox>
                  {selectedRows[selectedGrade] && selectedRows[selectedGrade].students.some(student => String(student.number).slice(1, 2) === '1') &&
                    <S.Class>
                      <p>1반</p>
                      <S.ClassMain>
                        {selectedRows[selectedGrade].students.map((item, studentIdx) => {
                          if (String(item.number).slice(1, 2) === '1')
                            return (
                              <S.Student key={studentIdx} onClick={() => {
                                setSelectedRows((prev) => ({
                                  ...prev,
                                  [selectedGrade]: {
                                    ...prev[selectedGrade],
                                    students: prev[selectedGrade].students.filter((currentItem) => currentItem.number !== item.number)
                                  }
                                }))
                              }}>
                                <h4>{item.number} {item.name}</h4>
                              </S.Student>
                            )
                        })}
                      </S.ClassMain>
                    </S.Class>
                  }
                  {selectedRows[selectedGrade] && selectedRows[selectedGrade].students.some(student => String(student.number).slice(1, 2) === '2') &&
                    <S.Class>
                      <p>2반</p>
                      <S.ClassMain>
                        {selectedRows[selectedGrade].students.map((item, studentIdx) => {
                          if (String(item.number).slice(1, 2) === '2')
                            return (
                              <S.Student key={studentIdx} onClick={() => {
                                setSelectedRows((prev) => ({
                                  ...prev,
                                  [selectedGrade]: {
                                    ...prev[selectedGrade],
                                    students: prev[selectedGrade].students.filter((currentItem) => currentItem.number !== item.number)
                                  }
                                }))
                              }}>
                                <h4>{item.number} {item.name}</h4>
                              </S.Student>
                            )
                        })}
                      </S.ClassMain>
                    </S.Class>
                  }
                  {selectedRows[selectedGrade] && selectedRows[selectedGrade].students.some(student => String(student.number).slice(1, 2) === '3') &&
                    <S.Class>
                      <p>3반</p>
                      <S.ClassMain>
                        {selectedRows[selectedGrade].students.map((item, studentIdx) => {
                          if (String(item.number).slice(1, 2) === '3')
                            return (
                              <S.Student key={studentIdx} onClick={() => {
                                setSelectedRows((prev) => ({
                                  ...prev,
                                  [selectedGrade]: {
                                    ...prev[selectedGrade],
                                    students: prev[selectedGrade].students.filter((currentItem) => currentItem.number !== item.number)
                                  }
                                }))
                              }}>
                                <h4>{item.number} {item.name}</h4>
                              </S.Student>
                            )
                        })}
                      </S.ClassMain>
                    </S.Class>
                  }
                  {selectedRows[selectedGrade] && selectedRows[selectedGrade].students.some(student => String(student.number).slice(1, 2) === '4') &&
                    <S.Class>
                      <p>4반</p>
                      <S.ClassMain>
                        {selectedRows[selectedGrade].students.map((item, studentIdx) => {
                          if (String(item.number).slice(1, 2) === '4')
                            return (
                              <S.Student key={studentIdx} onClick={() => {
                                setSelectedRows((prev) => ({
                                  ...prev,
                                  [selectedGrade]: {
                                    ...prev[selectedGrade],
                                    students: prev[selectedGrade].students.filter((currentItem) => currentItem.number !== item.number)
                                  }
                                }))
                              }}>
                                <h4>{item.number} {item.name}</h4>
                              </S.Student>
                            )
                        })}
                      </S.ClassMain>
                    </S.Class>
                  }
                </S.StudentBox>
              </span>
            </S.ModalMain>
            <S.Btn>
              <Square
                name="취소"
                color="#999999"
                background="white"
                border="#999999"
                On={() => setIsModalOpen(false)}
              />
              <Confirm
                text="저장"
                color="blue"
                image="check"
                onClick={() => {
                  handleSave();
                  setIsModalOpen(false);
                }}
              />
            </S.Btn>

          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.EditContainer>
  );
}
import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import DayBtn from '../../../components/button/circle/index.jsx';
import { useState, useEffect } from 'react';
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
import { useGetUploadUrl } from '../../../hooks/useAfterSchool.js';
import { useSaveClass } from '../../../hooks/useAfterSchool.js';
import { useGetFlushClass } from '../../../hooks/useAfterSchool.js';
import { useDebounce } from '../../../hooks/useDebounce.js';

export default function Edit() {

    const [branch, setBranch] = useState('');
    const [weekday, setWeekday] = useState('MON');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState("학생");
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedGrade, setSelectedGrade] = useState(1);
    const [options, setOptions] = useState({});
    const [isBranchOpen, setIsBranchOpen] = useState(false);
    const [selectedRows, setSelectedRows] = useState({});
    const [spreadsheetId, setSpreadsheetId] = useState('');
    const [spreadsheetUrl, setSpreadsheetUrl] = useState(null);
    const debounceStudent = useDebounce(search, 300);
    const [student, setStudent] = useState([]);


    const extractSpreadsheetId = (url) => {
        const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
        const match = url.match(regex);
        return match ? match[1] : '';
    };

    const handleUpload = () => {
        const id = extractSpreadsheetId(spreadsheetUrl);
        console.log("추출된 spreadSheetId:", id);

        if (id) {
            setSpreadsheetId(id);
        } else {
            alert('유효한 Spreadsheet 링크를 입력해주세요.');
        }
    };

    const handleFlush = () => {
        const id = extractSpreadsheetId(spreadsheetUrl);
        console.log("추출된 spreadSheetId:", id);

        if (id) {
            setSpreadsheetId(id);
        } else {
            alert('유효한 Spreadsheet 링크를 입력해주세요.');
        }
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

    const { data } = useGetAfterSchoolClasses(branch, weekday);

    const { data2 } = useGetUploadUrl(spreadsheetId);
    const { data3 } = useGetFlushClass(spreadsheetId);

    console.log("API 요청 보낸 spreadSheetId:", spreadsheetId);

    useEffect(() => {
        const fetchStudents = async () => {
            const students = await searchStudent(search);
            setStudent(students);
        };
        fetchStudents();
    }, [debounceStudent]);

    const { mutate: saveClass } = useSaveClass();

    const handleComplete = () => {
        const formattedData = Object.keys(selectStudent).map((classKey) => {
            const studentsInClass = selectStudent[classKey].map((student) => ({
                number: student.number,
                name: student.name,
            }));

            return {
                branch: Number(branch),
                weekday: koreanWeekDays[weekDays.indexOf(weekday)],
                grade: parseInt(classKey),
                period: selectedRows[parseInt(classKey)]?.period || "",
                teacherName: selectedRows[parseInt(classKey)]?.teacherName || "",
                placeName: selectedRows[parseInt(classKey)]?.placeName || "",
                name: selectedRows[parseInt(classKey)]?.name || "",
                students: studentsInClass,
            };
        });

        saveClass(formattedData, {
            onSuccess: () => {
                alert("방과후가 저장되었습니다!");
            }
        });
    };

    const [grades, setGrades] = useState({ 1: [], 2: [], 3: [] });

    useEffect(() => {
        if (!data || data.length === 0) return;

        setGrades({
            1: data[0] || [],
            2: data[1] || [],
            3: data[2] || [],
        });
    }, [data]);


    useEffect(() => {
        if (!data2 || data2.length === 0) return;

        setGrades({
            1: data2[0] || [],
            2: data2[1] || [],
            3: data2[2] || [],
        });
    }, [data]);

    useEffect(() => {
        if (!data3 || data3.length === 0) return;

        setGrades({
            1: data3[0] || [],
            2: data3[1] || [],
            3: data3[2] || [],
        });
    }, [data]);

    // const [grades, setGrades] = useState({
    //     1: [
    //         { period: '8~9교시', teacherName: '김철수', placeName: '프로그래밍실', name: '웹 개발' },
    //         {
    //             period: '10~11교시', teacherName: '박영희', placeName: '디자인실', name: '그래픽 디자인', students: [{
    //                 "number": 1401,
    //                 "name": "dongwook"
    //             },
    //             {
    //                 "number": 1416,
    //                 "name": "huhon"
    //             }]
    //         }
    //     ],
    //     2: [
    //         { period: '8~9교시', teacher: '이정민', placeName: '1-3반', name: '프론트엔드 개발', students: [] },
    //         { period: '10~11교시', teacherName: '최은지', placeName: '융합관', name: 'UX/UI 디자인', students: [] }
    //     ],
    //     3: [
    //         { period: '8~9교시', teacherName: '홍길동', placeName: '객체지향 프로그래밍실', name: '데이터 분석', students: [] },
    //         { period: '10~11교시', teacherName: '김미영', placeName: '2-1반', name: '디지털 마케팅', students: [] }
    //     ]
    // });

    // const student = [
    //     "1116 동동똥동욱",
    //     "1116 허온",
    //     "1116 윤도훈",
    //     "1210 윤도훈",
    //     "1211 김현준",
    //     "1210 윤도훈",
    //     "1201 김현준",
    //     "1202 김현준",
    //     "1312 김현준",
    //     "1313 김현준",
    //     "1414 김현준",
    //     "1415 김현준",
    //     "1416 김현준",
    //     "1404 김현준",
    //     "1405 김현준",
    //     "1406 김현준",
    //     "1316 김동욱",
    //     "1316 허온",
    //     "1316 윤도훈",
    //     "1116 동똥똥동욱",
    //     "1116 동동동욱",
    //     "1116 동똥동욱"
    // ]

    const addRow = (grade) => {
        setGrades(prev => ({
            ...prev,
            [grade]: [...prev[grade], { period: '', teacherName: '', placeName: '', name: '', students: [] }],
        }));
    };


    // const [isOpen, setIsOpen] = useState({
    //     1: Array(grades[1].length).fill(false),
    //     2: Array(grades[2].length).fill(false),
    //     3: Array(grades[3].length).fill(false),
    // });


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
        setIsOpen(prev => ({
            ...prev,
            [grade]: prev[grade].map((row, idx) =>
                idx === index
                    ? { ...row, [field]: !row[field] }
                    : { ...row, [field]: false }
            ),
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

    // // 모달에서 데이터를 수정할 때 selectedRows 업데이트
    // const handleModalInputChange = (field, value) => {
    //     setSelectedRows(prev => ({
    //         ...prev,
    //         [selectedGrade]: {
    //             ...prev[selectedGrade],
    //             [field]: value,
    //         }
    //     }));
    // };

    const closeModalHandler = (setModal) => {
        setModal(false);
    };

    const handleReset = () => {
        setGrades({
            1: [{ afterSchoolId: '', teacherId: '', period: '', teacherName: '', placeName: '', name: '', students: [] }],
            2: [{ afterSchoolId: '', teacherId: '', period: '', teacherName: '', placeName: '', name: '', students: [] }],
            3: [{ afterSchoolId: '', teacherId: '', period: '', teacherName: '', placeName: '', name: '', students: [] }],
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
            [grade]: prev[grade].length > 1
                ? prev[grade].filter((_, idx) => idx !== index)
                : prev[grade].map((row, idx) =>
                    idx === index ? { period: '', teacherName: '', placeName: '', name: '', students: [] } : row
                ),
        }));
    };

    const toggleBranchDropdown = () => {
        setIsBranchOpen((prev) => !prev);
    };

    const toggleDropdown = (key) => {
        setDropdownOpen(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleBranchChange = (selectedBranch) => {
        setBranch(selectedBranch);
    };

    const handleWeekdayChange = (selectedWeekday) => {
        setWeekday(selectedWeekday);
    };

    console.log(grades)

    return (
        <S.EditContainer>
            <Header />
            <S.Content>
                <S.EditTop>
                    <S.EditTopLeft>
                        <S.TopDate $length={85}>
                            <DropdownNS

                                name={branch || '분기'}
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
                            <S.FileDown><img src={Download} onClick={handleFlush} />동기화</S.FileDown>
                            <input
                                type="text"
                                value={spreadsheetUrl}
                                onChange={(e) => setSpreadsheetUrl(e.target.value)}
                                placeholder="Google Spreadsheet"
                            />
                            <S.FileUp>
                                <S.FileUpBtn htmlFor="file-upload" onClick={handleUpload}>
                                    <img src={Upload} alt="업로드 아이콘" />
                                    업로드
                                </S.FileUpBtn>
                            </S.FileUp>
                        </S.FileBtn>
                        <S.ReComBtn>
                            <S.Reset onClick={handleReset}>초기화</S.Reset>
                            <S.Complete onClick={handleComplete}>완료</S.Complete>
                        </S.ReComBtn>
                    </S.EditTopRight>
                </S.EditTop>

                <S.EditContent>
                    <S.EditMain>
                        {[1, 2, 3].map((grade) => (
                            <S.EditMainData key={grade}>
                                <S.EditMainTop>
                                    <S.TopData $length={30}>학년</S.TopData>
                                    <S.TopData $length={115}>교시</S.TopData>
                                    <S.TopData $length={98}>담당교사</S.TopData>
                                    <S.TopData $length={215}>장소</S.TopData>
                                    <S.TopData $length={290}>방과후</S.TopData>
                                    <p>* 학생은 자세히 보기에서 수정해 주세요.</p>
                                </S.EditMainTop>

                                {(grades[grade]?.length ? grades[grade] : [{}]).map((row, index) => (
                                    <S.EditRow key={index}>
                                        <S.RowData $length={180}>
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
                                        <S.RowData $length={120}>
                                            <DropdownS
                                                // name={row.teacherName || "담당교사"}
                                                // onChange={value => handleInputChange(grade, index, 'teacherName', value)}
                                                // isOpen={isOpen[grade]?.[index]?.teacherName}
                                                // click={() => handleDropdownClick(grade, index, 'teacherName')}
                                                // axios={(event) => searchTeacher(event)}
                                                target="선생님"
                                                name={selectedTeacher[uniqueKey]?.name || teacherName}
                                                axios={(event) => searchTeacher(event)}
                                                isOpen={isOpen[grade]?.[index]?.teacherName}
                                                change={value => handleInputChange(grade, index, 'teacherName', value)}
                                                click={() => toggleDropdown(uniqueKey)}
                                            />
                                        </S.RowData>
                                        <S.RowData $length={240}>
                                            <DropdownS
                                                name={row.placeName || "장소"}
                                                value={row.placeName || ''}
                                                onChange={value => handleInputChange(grade, index, 'placeName', value)}
                                                isOpen={isOpen[grade]?.[index]?.placeName}
                                                click={() => handleDropdownClick(grade, index, 'placeName')}
                                                axios={(event) => searchPlace(event)}
                                            />
                                        </S.RowData>
                                        <S.RowData $length={550}>
                                            <S.ClassData
                                                type='text'
                                                value={row.name || ''}
                                                onChange={e => handleInputChange(grade, index, 'name', e.target.value)}
                                            />
                                        </S.RowData>
                                        <S.OptionButton
                                            src={OptionButton}
                                            onClick={() => handleOptionClick(grade, index)}
                                        />
                                        {options[grade] === index && (
                                            <S.Options onClick={(e) => e.stopPropagation()}>
                                                <button onClick={() => {
                                                    setOptions((prev) => ({ ...prev, [grade]: null }));
                                                    setSelectedGrade(grade);
                                                    setIsModalOpen(true);
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

            {isModalOpen && selectedRows[selectedGrade] && (
                <S.ModalOverlay onClick={() => closeModalHandler(setIsModalOpen)}>
                    <S.ModalContent onClick={(e) => e.stopPropagation()}>
                        <S.ModalContentTop>
                            <h1>{selectedGrade}학년</h1>
                        </S.ModalContentTop>
                        <S.ModalMain>
                            <S.ModalLeft>
                                <DropdownS
                                    name={selectedRows[selectedGrade].teacherName || "담당교사"}
                                    value={selectedRows[selectedGrade].teacherName}
                                    onChange={(e) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'teacherName', e.target.value)}

                                />
                                <DropdownNS
                                    name={selectedRows[selectedGrade].period || "시간"}
                                    value={selectedRows[selectedGrade].period}
                                    item={periods}
                                    onChange={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'period', value)}
                                />
                                {/* <DropdownNS
                                    name={selectedRows[selectedGrade].studentsNumber || "학생수"}
                                    value={selectedRows[selectedGrade].studentsNumber}
                                    onChange={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'studentsNumber', value)}
                                /> */}
                            </S.ModalLeft>
                            <S.ModalRight>
                                <S.ClassData
                                    type='text'
                                    value={selectedRows[selectedGrade].name}
                                    onChange={(e) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'name', e.target.value)}
                                />
                                <S.DropdownFL>
                                    <DropdownNS
                                        name={selectedRows[selectedGrade].placeName || "장소"}
                                        value={selectedRows[selectedGrade].placeName}
                                        onChange={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'placeName', value)}
                                    />
                                </S.DropdownFL>
                                <S.InputBox>
                                    <img src={Search} alt={"검색아이콘"} width={20}></img>
                                    <S.Input
                                        type={"text"}
                                        value={search}
                                        change={(e) => setSearch(e.target.value)}
                                        placeholder={"학생을 입력해주세요"}
                                        axios={(event) => searchStudent(event)}
                                    />
                                    <S.StudentList>
                                        {search &&
                                            student
                                                .filter((currentItem) => { // 학생이 이미 반 리스트 안에 있는지 확인함
                                                    return !Object.values(selectStudent).some((classList) => classList.includes(currentItem))
                                                        && currentItem.includes(search);
                                                })
                                                .map((currentItem, index) => {
                                                    return (
                                                        <S.StudentItem
                                                            key={index}
                                                            onClick={() => {
                                                                const classNumber = parseInt(currentItem.charAt(1), 10);
                                                                setSelectStudent((prev) => ({
                                                                    ...prev,
                                                                    [`class${classNumber}`]: [...prev[`class${classNumber}`], currentItem],
                                                                }));
                                                                setSearch("");
                                                            }}
                                                        >
                                                            {currentItem}
                                                        </S.StudentItem>
                                                    );
                                                })
                                        }
                                    </S.StudentList>
                                </S.InputBox>

                                <S.StudentBox>
                                    {Object.entries(selectStudent).map(([cls, students], idx) => (
                                        <S.Class key={cls}>
                                            <p>{idx + 1}반</p>
                                            <S.ClassMain>
                                                {students.length > 0 && students.map((item, studentIdx) => (
                                                    <S.Student key={studentIdx}
                                                        onClick={() => setSelectStudent((prev) => ({
                                                            ...prev,
                                                            [cls]: prev[cls].filter((currentItem) => currentItem !== item),
                                                        }))}>
                                                        <h4>{item}</h4>
                                                    </S.Student>
                                                ))}
                                            </S.ClassMain>
                                        </S.Class>
                                    ))}
                                </S.StudentBox>
                            </S.ModalRight>
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
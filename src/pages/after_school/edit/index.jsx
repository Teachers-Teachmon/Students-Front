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
import { useUpload } from '../../../hooks/useAfterSchool.js';
import { useFlush } from '../../../hooks/useAfterSchool.js';

export default function Edit() {

    const [branch, setBranch] = useState('');
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


    const extractSpreadsheetId = (url) => {
        const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
        const match = url.match(regex);
        return match ? match[1] : '';
    };


    const handleUpload = async () => {
        const id = extractSpreadsheetId(spreadsheetUrl);
        console.log("추출된 spreadSheetId:", id);

        if (id) {
            setSpreadsheetId(id);
            // setTimeout(() => {
            //     refetchUpload();
            // }, 0);
            uploadMutation(id);
        } else {
            alert('유효한 Spreadsheet 링크를 입력해주세요.');
        }
    };

    const handleFlush = async () => {
        const id = extractSpreadsheetId(spreadsheetUrl);
        console.log("추출된 spreadSheetId:", id);

        if (id) {
            setSpreadsheetId(id);
            // setTimeout(() => {
            //     refetchFlush();
            // }, 0);
            flushMutation(id);
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

    const handleComplete = () => {
        const formattedData = Object.keys(grades)
            .map((classKey) =>
                grades[classKey].map((item) => {
                    return {
                        branch: Number(branch),
                        weekDay: item["weekday"] || item['weekDay'],
                        grade: parseInt(classKey),
                        period: item["period"] || "",
                        teacherName: item["teacherName"] || "",
                        placeName: item["placeName"] || "",
                        name: item["name"] || "",
                        students: item["students"] || [],
                    };
                })
            )
            .flat(); // 중첩된 배열을 평탄화
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

    const { data } = useGetAfterSchoolClasses(branch, weekday);
    const { mutate: uploadMutation } = useUpload();
    const { mutate: flushMutation } = useFlush();



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
        console.log(grades)
    }, [grades]);

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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('');

                if (response.status === 404) {
                    const errorText = await response.text();
                    throw new Error(errorText);
                }
                const data = await response.json();
            } catch (error) {
                setErrorMessage(error.message);
                setIsModalOpen(true);
            }
        };

        fetchData();
    }, []);



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



    return (
        <S.EditContainer>
            <Header />
            <S.Content>
                {Object.values(isOpen).some(status => Object.values(status).some(subStatus => Object.values(subStatus).includes(true))) && (
                    <S.Black onClick={() => setIsOpen({})} />
                )}
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
                            <S.FileDown onClick={handleFlush}><S.DownImg src={Download} />동기화</S.FileDown>
                            <S.Link
                                type="text"
                                value={spreadsheetUrl}
                                onChange={(e) => setSpreadsheetUrl(e.target.value)}
                                placeholder="Google Sheet 링크"
                            />
                            <S.FileUp onClick={handleUpload}>
                                <S.FileUpBtn htmlFor="file-upload">
                                    <S.UpImg src={Upload} alt="업로드 아이콘" />
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

                                {grades[grade]?.length > 0 && grades[grade].map((row, index) => (
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
                                                target="선생님"
                                                name={row.teacherName || "담당교사"}
                                                change={(value) => handleInputChange(grade, index, 'teacherName', value.name)}
                                                isOpen={isOpen[grade]?.[index]?.teacherName}
                                                click={() => handleDropdownClick(grade, index, 'teacherName')}
                                                axios={(event) => searchTeacher(event)}
                                            />

                                        </S.RowData>
                                        <S.RowData $length={240}>
                                            <DropdownS
                                                target="장소"
                                                change={value => handleInputChange(grade, index, 'placeName', value.name)}
                                                isOpen={isOpen[grade]?.[index]?.placeName}
                                                click={() => handleDropdownClick(grade, index, 'placeName')}
                                                axios={(event) => searchPlace(event)}
                                                name={row.placeName || "장소"}
                                            />
                                        </S.RowData>
                                        <S.RowData $length={550}>
                                            <S.ClassData
                                                type='text'
                                                value={row.name || ''}
                                                placeholder='방과후 이름을 작성해 주세요.'
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
                <S.ModalOverlay
                    onClick={() => {
                    }}
                >
                    {Object.values(isOpen).some(status =>
                        Object.values(status).some(subStatus =>
                            Object.values(subStatus).includes(true)
                        )
                    ) && (
                            <S.Black
                                onClick={() => {
                                    setIsOpen({});
                                    closeModalHandler(setIsModalOpen);
                                }}
                            />
                        )}
                    <S.ModalContent onClick={(e) => e.stopPropagation()}>
                        <S.ModalContentTop>
                            <h1>{selectedGrade}학년</h1>
                        </S.ModalContentTop>
                        <S.ModalMain>
                            <S.ModalLeft>
                                <DropdownS
                                    target="선생님"
                                    name={selectedRows[selectedGrade].teacherName || "담당교사"}
                                    axios={(event) => searchTeacher(event)}
                                    change={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'teacherName', value.name)}
                                    click={() => setDetailIsOpen([!detailIsOpen[0], false, false])}
                                    isOpen={detailIsOpen[0]}

                                />
                                <DropdownNS
                                    name={selectedRows[selectedGrade].period || "시간"}
                                    item={periods}
                                    change={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'period', value)}
                                    isOpen={detailIsOpen[1]}
                                    click={() => setDetailIsOpen([false, !detailIsOpen[1], false])}
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
                                    placeholder={'방과후를 입력해 주세요.'}
                                />
                                <S.DropdownFL>
                                    <DropdownS
                                        target="장소"
                                        name={selectedRows[selectedGrade].placeName || "장소"}
                                        change={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'placeName', value.name)}
                                        click={() => setDetailIsOpen([false, false, !detailIsOpen[2]])}
                                        isOpen={detailIsOpen[2]}
                                        axios={(event) => searchPlace(event)}
                                    />
                                </S.DropdownFL>
                                <S.InputBox>
                                    <img src={Search} alt={"검색아이콘"} width={20}></img>
                                    <S.Input
                                        type={"text"}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder={"학생을 입력해주세요."}
                                    />
                                    <S.StudentList>
                                        {/*    .filter((currentItem) => { // 학생이 이미 반 리스트 안에 있는지 확인함*/}
                                        {/*    return !Object.values(selectStudent).some((classList) => classList.includes(currentItem))*/}
                                        {/*    && currentItem.includes(search);*/}
                                        {/*})*/}
                                        {search && student &&
                                            student
                                                .filter(item =>
                                                    !selectedRows[1].students.some(student => student.name === item.name))
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
                                                                // setSelectStudent((prev) => ({
                                                                //     ...prev,
                                                                //     [`class${currentItem.number}`]: [...prev[`class${currentItem.number}`], currentItem],
                                                                // }));
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

                                    {/*<S.Class>*/}
                                    {/*    <S.ClassMain>*/}
                                    {/*        {selectedRows[selectedGrade].students.map((item, studentIdx) => {*/}
                                    {/*            console.log(selectedRows[selectedGrade].students)*/}
                                    {/*            return(*/}
                                    {/*                <S.Student key={studentIdx} onClick={()=>{*/}
                                    {/*                    setSelectedRows((prev) => ({*/}
                                    {/*                        ...prev,*/}
                                    {/*                        [selectedGrade]: {*/}
                                    {/*                            ...prev[selectedGrade],*/}
                                    {/*                            students: prev[selectedGrade].students.filter((currentItem) => currentItem.number !== item.number)*/}
                                    {/*                        }*/}
                                    {/*                    }))*/}
                                    {/*                }}>*/}
                                    {/*                    <h4>{item.number} {item.name}</h4>*/}
                                    {/*                </S.Student>*/}
                                    {/*            )*/}
                                    {/*        })}*/}
                                    {/*    </S.ClassMain>*/}
                                    {/*</S.Class>*/}
                                    {/*{Object.entries(selectStudent).map(([cls, students], idx) => (*/}
                                    {/*    <S.Class key={cls}>*/}
                                    {/*        <p>{idx + 1}반</p>*/}
                                    {/*        <S.ClassMain>*/}
                                    {/*            {students.length > 0 && students.map((item, studentIdx) => (*/}
                                    {/*                <S.Student key={studentIdx}*/}
                                    {/*                           onClick={() => setSelectStudent((prev) => ({*/}
                                    {/*                               ...prev,*/}
                                    {/*                               [cls]: prev[cls].filter((currentItem) => currentItem !== item),*/}
                                    {/*                           }))}>*/}
                                    {/*                    <h4>{item}</h4>*/}
                                    {/*                </S.Student>*/}
                                    {/*            ))}*/}
                                    {/*        </S.ClassMain>*/}
                                    {/*    </S.Class>*/}
                                    {/*))}*/}
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
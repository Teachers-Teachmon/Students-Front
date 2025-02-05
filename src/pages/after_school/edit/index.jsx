import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import DayBtn from '../../../components/button/circle/index.jsx';
import { useState, useEffect } from 'react';
import DropdownNS from '../../../components/dropdown/classDropdown/index.jsx';
import DropdownS from '../../../components/dropdown/search/index.jsx';
import Download from '../../../assets/Download.svg';
import Upload from '../../../assets/Upload.svg';
import Confirm from '../../../components/button/confirm/index.jsx';
import Search from '../../../assets/Search.svg';
import OptionButton from '../../../assets/OptionButton.svg';
import Square from '../../../components/button/square/index.jsx';
import { useGetAfterSchoolClasses } from '../../../hooks/useAfterSchool.js';
import { searchStudent, searchPlace, searchTeacher } from "../../../api/search.js";
import axios from 'axios';

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


    const handleOptionClick = (grade, index) => {
        setOptions((prev) => ({
            ...prev,
            [grade]: prev[grade] === index ? null : index,
        }));
    
        setSelectedRows((prev) => ({
            ...prev,
            [grade]: prev[grade] === index ? null : grades[grade][index],
        }));
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

    const [grades, setGrades] = useState({ 1: [], 2: [], 3: [] });

    // useEffect(() => {
    //     if (!data) return;

    //     setGrades({
    //         1: data.filter((cls) => cls.grade === 1),
    //         2: data.filter((cls) => cls.grade === 2),
    //         3: data.filter((cls) => cls.grade === 3),
    //     });
    // }, [data]);

    useEffect(() => {
        if (!data || data.length === 0) return;

        setGrades({
            1: data[0] || [],
            2: data[1] || [],
            3: data[2] || [],
        });
    }, [data]);

    // const [grades, setGrades] = useState({
    //         1: [
    //             { period: '8~9교시', teacher: '김철수', placeName: '프로그래밍실', name: '웹 개발', studentsNumber: '5' },
    //             { period: '10~11교시', teacher: '박영희', placeName: '디자인실', name: '그래픽 디자인', studentsNumber: '6' }
    //         ],
    //         2: [
    //             { period: '8~9교시', teacher: '이정민', placeName: '1-3반', name: '프론트엔드 개발', studentsNumber: '8' },
    //             { period: '10~11교시', teacher: '최은지', placeName: '융합관', name: 'UX/UI 디자인', studentsNumber: '7' }
    //         ],
    //         3: [
    //             { period: '8~9교시', teacher: '홍길동', placeName: '객체지향 프로그래밍실', name: '데이터 분석', studentsNumber: '4' },
    //             { period: '10~11교시', teacher: '김미영', placeName: '2-1반', name: '디지털 마케팅', studentsNumber: '6' }
    //         ]
    // });

    const addRow = (grade) => {
        setGrades(prev => ({
            ...prev,
            [grade]: [...prev[grade], { period: '', teacherName: '', placeName: '', name: '', studentsNumber: '' }],
        }));
    };


    // const [isOpen, setIsOpen] = useState({
    //     1: Array(grades[1].length).fill(false),
    //     2: Array(grades[2].length).fill(false),
    //     3: Array(grades[3].length).fill(false),
    // });


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


    const handleInputChange = (grade, index, field, value) => {
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
            1: [{ afterSchoolId: '', teacherId: '', period: '', teacherName: '', placeName: '', name: '', studentsNumber: '' }],
            2: [{ afterSchoolId: '', teacherId: '', period: '', teacherName: '', placeName: '', name: '', studentsNumber: '' }],
            3: [{ afterSchoolId: '', teacherId: '', period: '', teacherName: '', placeName: '', name: '', studentsNumber: '' }],
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
                    idx === index ? { period: '', teacherName: '', placeName: '', name: '', studentsNumber: '' } : row
                ),
        }));
    };

    const toggleBranchDropdown = () => {
        setIsBranchOpen((prev) => !prev);
    };

    const handleBranchChange = (selectedBranch) => {
        setBranch(selectedBranch);
        toggleBranchDropdown();  // toggleBranchDropdown() 호출로 드롭다운 닫기
    };

    const handleWeekdayChange = (selectedWeekday) => {
        setWeekday(selectedWeekday);
    };


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
                            <S.FileDown><img src={Download} />파일 다운로드</S.FileDown>
                            <S.FileUp>
                                <S.FileUpBtn htmlFor="file-upload">
                                    <img src={Upload} alt="업로드 아이콘" />
                                    파일 업로드
                                </S.FileUpBtn>
                                <input
                                    id="file-upload"
                                    type="file"
                                    style={{ display: 'none' }}
                                />
                            </S.FileUp>
                        </S.FileBtn>
                        <S.ReComBtn>
                            <S.Reset onClick={handleReset}>초기화</S.Reset>
                            <S.Complete>완료</S.Complete>
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
                                                name={row.teacherName || "담당교사"}
                                                value={row.teacherName || ''}
                                                onChange={value => handleInputChange(grade, index, 'teacherName', value)}
                                                isOpen={isOpen[grade]?.[index]?.teacherName}
                                                click={() => handleDropdownClick(grade, index, 'teacherName')}
                                                axios={(event) => searchTeacher(event)}
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

            {/* {isModalOpen && (
                <S.ModalOverlay onClick={() => closeModalHandler(setIsModalOpen)}>
                    <S.ModalContent onClick={(e) => e.stopPropagation()}>
                        <S.ModalContentTop>
                            <h1>{selectedGrade}학년</h1>
                        </S.ModalContentTop>
                        <S.ModalMain>
                            <S.ModalLeft>
                                <DropdownS
                                    name={"담당교사"}
                                    axios={(event) => searchTeacher(event)}
                                />
                                <DropdownNS
                                    name={"시간"}
                                />
                                <DropdownNS
                                    name={"학생수"}
                                />
                            </S.ModalLeft>
                            <S.ModalRight>
                                <S.ClassData
                                    type='text'
                                    value='방과후를 입력해주세요'
                                />
                                <S.DropdownFL>
                                    <DropdownNS
                                        name={"장소"}
                                        axios={(event) => searchPlace(event)}
                                    />
                                </S.DropdownFL>
                                <S.InputBox>
                                    <img src={Search} alt={"검색아이콘"} width={20}></img>
                                    <S.Input
                                        type={"text"}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
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
                            <Square name="취소" color="#999999" background="white" border="#999999" On={() => setIsModalOpen(false)} />
                            <Confirm text="저장" color="blue" image="check" />
                        </S.Btn>
                    </S.ModalContent>
                </S.ModalOverlay>
            )} */}

            {isModalOpen && selectedRows[selectedGrade] && (
                <S.ModalOverlay onClick={() => closeModalHandler(setIsModalOpen)}>
                    <S.ModalContent onClick={(e) => e.stopPropagation()}>
                        <S.ModalContentTop>
                            <h1>{selectedGrade}학년</h1>
                        </S.ModalContentTop>
                        <S.ModalMain>
                            <S.ModalLeft>
                                <DropdownS
                                    name={"담당교사"}
                                    value={selectedRows[selectedGrade].teacherName}
                                    onChange={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'teacherName', value)}
                                />
                                <DropdownNS
                                    name={"시간"}
                                    value={selectedRows[selectedGrade].period}
                                    onChange={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'period', value)}
                                />
                                <DropdownNS
                                    name={"학생수"}
                                    value={selectedRows[selectedGrade].studentsNumber}
                                    onChange={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'studentsNumber', value)}
                                />
                            </S.ModalLeft>
                            <S.ModalRight>
                                <S.ClassData
                                    type='text'
                                    value={selectedRows[selectedGrade].name}
                                    onChange={(e) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'name', e.target.value)}
                                />
                                <S.DropdownFL>
                                    <DropdownNS
                                        name={"장소"}
                                        value={selectedRows[selectedGrade].placeName}
                                        onChange={(value) => handleInputChange(selectedGrade, selectedRows[selectedGrade].index, 'placeName', value)}
                                    />
                                </S.DropdownFL>
                                <S.InputBox>
                                    <img src={Search} alt={"검색아이콘"} width={20}></img>
                                    <S.Input
                                        type={"text"}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
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
                            <Square name="취소" color="#999999" background="white" border="#999999" On={() => setIsModalOpen(false)} />
                            <Confirm text="저장" color="blue" image="check" />
                        </S.Btn>
                    </S.ModalContent>
                </S.ModalOverlay>
            )}
        </S.EditContainer>
    );
}
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

export default function Edit() {

    const [branch, setBranch] = useState('');
    const [weekday, setWeekday] = useState('월');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedGrade, setSelectedGrade] = useState(1);
    const [options, setOptions] = useState({});
    const [isBranchOpen, setIsBranchOpen] = useState(false);

    const [selectStudent, setSelectStudent] = useState({
        class1: [],
        class2: [],
        class3: [],
        class4: [],
    });


    const branches = [1, 2, 3, 4];

    const periods = ['8~9교시', '10~11교시'];

    const { data } = useGetAfterSchoolClasses(branch, weekday);

    useEffect(() => {
        if (data) {
            const updatedGrades = {
                1: data.filter((cls) => cls.grade === 1),
                2: data.filter((cls) => cls.grade === 2),
                3: data.filter((cls) => cls.grade === 3),
            };
            setGrades(updatedGrades);
        }
    }, [data]);

    const [grades, setGrades] = useState({ 1: [], 2: [], 3: [] });

    // const [grades, setGrades] = useState({
    //     1: [
    //         { period: '8~9교시', teacher: '김철수', placeName: '프로그래밍실', name: '웹 개발', studentsNumber: '5' },
    //         { period: '10~11교시', teacher: '박영희', placeName: '디자인실', name: '그래픽 디자인', studentsNumber: '6' }
    //     ],
    //     2: [
    //         { period: '8~9교시', teacher: '이정민', placeName: '1-3반', name: '프론트엔드 개발', studentsNumber: '8' },
    //         { period: '10~11교시', teacher: '최은지', placeName: '융합관', name: 'UX/UI 디자인', studentsNumber: '7' }
    //     ],
    //     3: [
    //         { period: '8~9교시', teacher: '홍길동', placeName: '객체지향 프로그래밍실', name: '데이터 분석', studentsNumber: '4' },
    //         { period: '10~11교시', teacher: '김미영', placeName: '2-1반', name: '디지털 마케팅', studentsNumber: '6' }
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
            [grade]: [...prev[grade], { period: '', teacher: '', placeName: '', name: '', studentsNumber: '' }],
        }));
    };

    const handleOptionClick = (grade, index) => {
        setOptions((prev) => ({
            ...prev,
            [grade]: prev[grade] === index ? null : index,
        }));
    };

    // const [isOpen, setIsOpen] = useState({
    //     1: Array(grades[1].length).fill(false),
    //     2: Array(grades[2].length).fill(false),
    //     3: Array(grades[3].length).fill(false),
    // });


    const [isOpen, setIsOpen] = useState({
        1: grades[1].map(() => ({ period: false, teacher: false, placeName: false })),
        2: grades[2].map(() => ({ period: false, teacher: false, placeName: false })),
        3: grades[3].map(() => ({ period: false, teacher: false, placeName: false })),
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
            1: [{ period: '', teacher: '', placeName: '', name: '', studentsNumber: '' }],
            2: [{ period: '', teacher: '', placeName: '', name: '', studentsNumber: '' }],
            3: [{ period: '', teacher: '', placeName: '', name: '', studentsNumber: '' }],
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
                    idx === index ? { period: '', teacher: '', placeName: '', name: '', studentsNumber: '' } : row
                ),
        }));
    };

    const toggleBranchDropdown = () => {
        setIsBranchOpen((prev) => !prev);
    };

    const handleBranchChange = (selectedBranch) => {
        setBranch(selectedBranch);
        toggleBranchDropdown;
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
                            <DayBtn name={"월"} status={weekday === '월'} On={() => handleWeekdayChange('월')} />
                            <DayBtn name={"화"} status={weekday === '화'} On={() => handleWeekdayChange('화')} />
                            <DayBtn name={"수"} status={weekday === '수'} On={() => handleWeekdayChange('수')} />
                            <DayBtn name={"목"} status={weekday === '목'} On={() => handleWeekdayChange('목')} />
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
                                                name={"담당교사"}
                                                value={row.teacher || ''}
                                                onChange={value => handleInputChange(grade, index, 'teacher', value)}
                                                isOpen={isOpen[grade]?.[index]?.teacher}
                                                click={() => handleDropdownClick(grade, index, 'teacher')}
                                            />
                                        </S.RowData>
                                        <S.RowData $length={240}>
                                            <DropdownS
                                                name={row.placeName || "장소"}
                                                value={row.placeName || ''}
                                                onChange={value => handleInputChange(grade, index, 'placeName', value)}
                                                isOpen={isOpen[grade]?.[index]?.placeName}
                                                click={() => handleDropdownClick(grade, index, 'placeName')}
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

            {isModalOpen && (
                <S.ModalOverlay onClick={() => closeModalHandler(setIsModalOpen)}>
                    <S.ModalContent onClick={(e) => e.stopPropagation()}>
                        <S.ModalContentTop>
                            <h1>{selectedGrade}학년</h1>
                        </S.ModalContentTop>
                        <S.ModalMain>
                            <S.ModalLeft>
                                <DropdownS
                                    name={"담당교사"}
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
                                    />
                                </S.DropdownFL>
                                <S.InputBox>
                                    <img src={Search} alt={"검색아이콘"} width={20}></img>
                                    <S.Input
                                        type={"text"}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder={"학생을 입력해주세요"}
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
import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import DayBtn from '../../../components/button/circle/index.jsx';
import { useState } from 'react';
import DropdownNS from '../../../components/dropdown/classDropdown/index.jsx';
import DropdownS from '../../../components/dropdown/search/index.jsx';
import Download from '../../../assets/Download.svg';
import Upload from '../../../assets/Upload.svg';
import Confirm from '../../../components/button/confirm/index.jsx';
import Search from '../../../assets/Search.svg';

export default function Edit() {

    const [day, setDay] = useState([true, false, false, false]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedGrade, setSelectedGrade] = useState(1);
    const [selectStudent, setSelectStudent] = useState({
        class1: [],
        class2: [],
        class3: [],
        class4: [],
    });

    const periods = ['8~9교시', '10~11교시'];


    const [grades, setGrades] = useState({

        1: [
            {
                "period": '',
                "teacher": '',
                "placeName": '',
                "name": '',
                "studentsNumber": '',
            },
        ],
        2: [    
            {
                "period": '',
                "teacher": '',
                "placeName": '',
                "name": '',
                "studentsNumber": '',
            },
        ],
        3: [
            {
                "period": '',
                "teacher": '',
                "placeName": '',
                "name": '',
                "studentsNumber": '',
            },
        ],
    });

    const student = [
        "1116 동동똥동욱",
        "1116 허온",
        "1116 윤도훈",
        "1210 윤도훈",
        "1211 김현준",
        "1210 윤도훈",
        "1201 김현준",
        "1202 김현준",
        "1312 김현준",
        "1313 김현준",
        "1414 김현준",
        "1415 김현준",
        "1416 김현준",
        "1404 김현준",
        "1405 김현준",
        "1406 김현준",
        "1316 김동욱",
        "1316 허온",
        "1316 윤도훈",
        "1116 동똥똥동욱",
        "1116 동동동욱",
        "1116 동똥동욱"
    ]

    const addRow = (grade) => {
        setGrades((prev) => ({
            ...prev,
            [grade]: [
                ...prev[grade],
                {
                    "period": '',
                    "teacher": '',
                    "placeName": '',
                    "name": '',
                    "studentsNumber": '',
                },
            ],
        }));
    };

    const [isOpen, setIsOpen] = useState({
        1: [],
        2: [],
        3: [],
    });

    const handleDropdownClick = (grade, index) => { // 드롭다운 클릭했을 때 그 학년 드롭다운만 열리게
        setIsOpen((prev) => ({
            ...prev,
            [grade]: prev[grade].map((openState, idx) =>
                idx === index ? !openState : openState 
            ),
        }));
    };

    const handleInputChange = (grade, index, field, value) => {
        setGrades((prev) => ({
            ...prev,
            [grade]: prev[grade].map((row, idx) =>
                idx === index ? { ...row, [field]: value } : row
            ),
        }));
    };

    const changeDay = (idx) => {
        const newDay = [false, false, false, false];
        newDay[idx] = true;
        setDay(newDay);
    }

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
        console.log("초기화 후 grades:", {
            1: [{ period: '', teacher: '', placeName: '', name: '', studentsNumber: '' }],
            2: [{ period: '', teacher: '', placeName: '', name: '', studentsNumber: '' }],
            3: [{ period: '', teacher: '', placeName: '', name: '', studentsNumber: '' }],
        });
    };
    

    return (
        <S.EditContainer>
            <Header />
            <S.Content>
                <S.EditTop>
                    <S.EditTopLeft>
                        <S.TopDate>
                            <DropdownNS name={"분기"} />
                        </S.TopDate>
                        <S.TopDay>
                            <DayBtn name={"월"} status={day[0]} On={() => changeDay(0)} />
                            <DayBtn name={"화"} status={day[1]} On={() => changeDay(1)} />
                            <DayBtn name={"수"} status={day[2]} On={() => changeDay(2)} />
                            <DayBtn name={"목"} status={day[3]} On={() => changeDay(3)} />
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
                                    <S.TopData $length={85}>교시</S.TopData>
                                    <S.TopData $length={102}>담당교사</S.TopData>
                                    <S.TopData $length={200}>장소</S.TopData>
                                    <S.TopData $length={230}>방과후</S.TopData>
                                    <p>* 학생은 자세히 보기에서 수정해 주세요.</p>
                                </S.EditMainTop>

                                {grades[grade].map((row, index) => (
                                    <S.EditRow key={index}>
                                        <S.RowData $length={145}>
                                            <S.Grade>
                                                <div>{grade}</div>
                                                {console.log("periods:", periods)}
                                                <DropdownNS
                                                    name={selectedPeriod || '교시'}
                                                    item={periods}
                                                    change={(value) => {
                                                        handleInputChange(grade, index, 'period', value);
                                                        setSelectedPeriod(value);
                                                    }}
                                                    click={() => handleDropdownClick(grade, index)}
                                                    isOpen={isOpen[grade][index]}
                                                />
                                            </S.Grade>
                                        </S.RowData>
                                        <S.RowData $length={120}>
                                            <DropdownS
                                                name={"담당교사"}
                                                value={row.teacher}
                                                onChange={(value) =>
                                                    handleInputChange(grade, index, 'teacher', value)
                                                }
                                            />
                                        </S.RowData>
                                        <S.RowData $length={225}>
                                            <DropdownNS
                                                name={"장소"}
                                                placeholder="장소"
                                                value={row.location}
                                                onChange={(e) =>
                                                    handleInputChange(grade, index, 'location', e.target.value)
                                                }
                                            />
                                        </S.RowData>
                                        <S.RowData $length={400}>
                                            <S.ClassData
                                                type='text'
                                                value={row.afterClass}
                                                onChange={(e) =>
                                                    handleInputChange(grade, index, 'afterClass', e.target.value)
                                                }
                                            />
                                        </S.RowData>
                                        <S.DetailBtn onClick={() => {
                                            setSelectedGrade(grade);
                                            setIsModalOpen(true);
                                        }}>자세히 보기</S.DetailBtn>
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
                            <Confirm text="삭제" color="red" image="reject" onClick={() => setIsModalOpen(false)} />
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
                                        name={"층"}
                                    />
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
                    </S.ModalContent>
                </S.ModalOverlay>
            )}
        </S.EditContainer>
    );
}
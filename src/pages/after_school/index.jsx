import * as S from './style.jsx';
import Header from '../../components/header/index.jsx';
import OptionButton from '../../assets/OptionButton.svg';
import { useState } from 'react';
import BusinessTrip from '../../components/modal/businessTrip/index.jsx';
import ClassEnd from '../../components/modal/classEnd/index.jsx';
import ClassPrep from '../../components/modal/classPrep/index.jsx';
import { useNavigate } from "react-router-dom";
import Circle from '../../components/button/circle/index.jsx';
import CaretLeft from '../../assets/CaretLeft.svg';
import CaretRight from '../../assets/CaretRight.svg';
import { useGetClassList } from '../../hooks/useAfterSchool.js';
import { useGetMyClasses } from '../../hooks/useAfterSchool.js';
import { useGetTodayClasses } from '../../hooks/useAfterSchool.js';
import Square from '../../components/button/square/index.jsx';

export default function After_school() {

    const [options, setOptions] = useState(null);
    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [isModal3, setIsModal3] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [grade, setGrade] = useState([true, false, false]);
    const [selectedGrade, setSelectedGrade] = useState(1);
    const [selectedDay, setSelectedDay] = useState("MON");
    const navigate = useNavigate()

    const weekDays = ["MON", "TUE", "WED", "THU"];
    const koreanWeekDays = ["월", "화", "수", "목"];


    const { data: myTodayClasses = [] } = useGetTodayClasses();

    const { data: myClasses = [] } = useGetMyClasses();

    const adjustedDay = weekDays.includes(selectedDay) ? selectedDay : "MON";
    const { data: classList = [] } = useGetClassList(selectedGrade, adjustedDay);


    const closeModalHandler = (setModal) => {
        setModal(false);
    };

    // const myClasses = [
    //     {
    //         "grade": 1,
    //         "branch": 4,
    //         "id": 13,
    //         "weekday": "월",
    //         "period": "10~11교시",
    //         "name": "파이썬",
    //         "placeName": "프로그래밍실"
    //     }
    // ]

    const handlePrevDay = () => { // 이전 요일로 이동
        const currentIndex = weekDays.indexOf(selectedDay);
        const prevIndex = (currentIndex - 1 + weekDays.length) % weekDays.length;
        setSelectedDay(weekDays[prevIndex]);
    };

    const handleNextDay = () => { // 다음 요일로 이동
        const currentIndex = weekDays.indexOf(selectedDay);
        const nextIndex = (currentIndex + 1) % weekDays.length;
        setSelectedDay(weekDays[nextIndex]);
    };

    const changeGrade = (idx) => {
        const newGrade = [false, false, false];
        newGrade[idx] = true;
        setGrade(newGrade);
        setSelectedGrade(idx + 1);
    }

    return (
        <S.AfterSchoolContainer onClick={() => setOptions(null)}>
            <Header />
            <S.Content>
                <S.LeftContainer>
                    <S.TodayClasses>
                        <h1>나의 오늘 방과후</h1>
                        {myTodayClasses.length === 0 ? (
                            <p>오늘은 방과후 수업이 없습니다.</p>
                        ) : (
                            myTodayClasses.map((cls, i) => (
                                <S.ClassCard key={i}>
                                    <S.CardTime>{cls.period}</S.CardTime>
                                    <div>{cls.grade}</div>
                                    <S.CardData $length={15}>{cls.name}</S.CardData>
                                    <S.CardData $length={10}>{cls.placeName}</S.CardData>
                                </S.ClassCard>
                            ))
                        )}
                    </S.TodayClasses>


                    <S.MyClasses>
                        <h1>나의 방과후 수업 ({myClasses.length})</h1>
                        {myClasses.length === 0 ? (
                            <p>나의 방과후 수업이 없습니다.</p>
                        ) : (
                            <S.ClassTableContent>
                                <S.ClassTableTop>
                                    <span>학년</span>
                                    <span>요일</span>
                                    <span>시간</span>
                                    <S.TopName>이름</S.TopName>
                                    <S.TopLocation>장소</S.TopLocation>
                                </S.ClassTableTop>
                                <S.ClassTableMain>
                                    {myClasses.map((cls, i) => (
                                        <S.ClassTable key={i}>
                                            <S.TableData $length={3.4}>{cls.grade}</S.TableData>
                                            <S.TableData $length={3}>{cls.weekday}</S.TableData>
                                            <S.TableData $length={6}>{cls.period}</S.TableData>
                                            <S.TableName>
                                                <S.TableData $length={14}>{cls.name}</S.TableData>
                                                <S.TableData $length={14.5}>{cls.placeName}</S.TableData>
                                            </S.TableName>
                                            <S.OptionButton
                                                src={OptionButton}
                                                onClick={(e) => {
                                                    setOptions(options === i ? null : i);
                                                    setSelectedClass(cls);
                                                    e.stopPropagation();
                                                }}
                                            />
                                            {options === i && (
                                                <S.Options onClick={(e) => e.stopPropagation()}>
                                                    <button
                                                        onClick={() => {
                                                            setOptions(null);
                                                            setIsModal1(true);
                                                        }}
                                                    >
                                                        출장
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setOptions(null);
                                                            setIsModal2(true);
                                                        }}
                                                    >
                                                        보강
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setOptions(null);
                                                            setIsModal3(true);
                                                        }}
                                                    >
                                                        종료
                                                    </button>
                                                </S.Options>
                                            )}
                                        </S.ClassTable>
                                    ))}
                                </S.ClassTableMain>
                            </S.ClassTableContent>
                        )}
                    </S.MyClasses>

                </S.LeftContainer>

                <S.ClassList>
                    <S.ClassListTop>
                        <S.ClassTopMain>
                            <S.ClassBtn>
                                <h1>방과후 수업</h1>
                                <Square name="방과후 설정" status={true} On={() => navigate("/after-school/edit")} />
                            </S.ClassBtn>
                            <S.GradeBtn>
                                <Circle name={"1학년"} status={grade[0]} On={() => changeGrade(0)} />
                                <Circle name={"2학년"} status={grade[1]} On={() => changeGrade(1)} />
                                <Circle name={"3학년"} status={grade[2]} On={() => changeGrade(2)} />
                            </S.GradeBtn>
                        </S.ClassTopMain>
                    </S.ClassListTop>
                    <S.ClassListContent>
                        <S.ClassListMain>
                            <S.ClassListMainTop>
                                <S.CaretLeft onClick={handlePrevDay}>
                                    <img src={CaretLeft} />
                                </S.CaretLeft>
                                <S.DayP>{koreanWeekDays[weekDays.indexOf(selectedDay)]}요일</S.DayP>
                                <S.CaretRight onClick={handleNextDay}>
                                    <img src={CaretRight} />
                                </S.CaretRight>
                            </S.ClassListMainTop>

                            <S.ClassListWrap>
                                <S.ClassListMainContent1>
                                    <p>8~9교시</p>
                                    <S.ClassList1>
                                        {classList
                                            .filter(cls => cls.period === "8~9교시")
                                            .flatMap(cls => cls.afterschool)
                                            .map((cls, i) => (
                                                <S.List1 key={i}>
                                                    <S.List1Data $length={16}>{cls.name}</S.List1Data>
                                                    <S.List1Data $length={5}>{cls.teacherName}</S.List1Data>
                                                    <S.List1Data $length={14}>{cls.placeName}</S.List1Data>
                                                </S.List1>
                                            ))}
                                    </S.ClassList1>
                                </S.ClassListMainContent1>

                                <S.ClassListMainContent2>
                                    <p>10~11교시</p>
                                    <S.ClassList2>
                                        {classList && classList
                                            .filter(cls => cls.period === "10~11교시")
                                            .flatMap(cls => cls.afterschool)
                                            .map((cls, i) => (
                                                <S.List1 key={i}>
                                                    <S.List1Data $length={16}>{cls.name}</S.List1Data>
                                                    <S.List1Data $length={5}>{cls.teacherName}</S.List1Data>
                                                    <S.List1Data $length={14}>{cls.placeName}</S.List1Data>
                                                </S.List1>
                                            ))}
                                    </S.ClassList2>
                                </S.ClassListMainContent2>
                            </S.ClassListWrap>
                        </S.ClassListMain>
                    </S.ClassListContent>
                </S.ClassList>
            </S.Content>

            {isModal1 && (
                <S.BusinessTripModal onClick={() => closeModalHandler(setIsModal1)}>
                    <S.BusinessModal onClick={(e) => e.stopPropagation()}>
                        <BusinessTrip closeModal={() => { setIsModal1(false) }} selectedClass={selectedClass} />
                    </S.BusinessModal>
                </S.BusinessTripModal>
            )}
            {isModal2 && (
                <S.ClassPrepModal onClick={() => closeModalHandler(setIsModal2)}>
                    <S.PrepModal onClick={(e) => e.stopPropagation()}>
                        <ClassPrep closeModal={() => { setIsModal2(false) }} selectedClass={selectedClass} />
                    </S.PrepModal>
                </S.ClassPrepModal>
            )}
            {isModal3 && (
                <S.ClassEndModal onClick={() => closeModalHandler(setIsModal3)}>
                    <S.EndModal onClick={(e) => e.stopPropagation()}>
                        <ClassEnd
                            closeModal={() => { setIsModal3(false) }}
                            selectedClass={selectedClass}
                            afterSchoolId={selectedClass?.afterSchoolId}
                        />
                    </S.EndModal>
                </S.ClassEndModal>
            )}
        </S.AfterSchoolContainer>
    )
}
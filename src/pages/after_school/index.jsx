import * as S from './style.jsx'
import Header from '../../components/header/index.jsx'
import OptionButton from '../../assets/OptionButton.svg';
import { useState } from 'react';
import BusinessTrip from '../../components/modal/businessTrip/index.jsx';
import ClassEnd from '../../components/modal/classEnd/index.jsx';
import ClassPrep from '../../components/modal/classPrep/index.jsx';

export default function After_school() {

    const [options, setOptions] = useState(null);
    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [isModal3, setIsModal3] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);

    const myTodayClasses = [
        {
            time: "8~9",
            grade: "1학년",
            name: "리액트",
            location: "객체지향 프로그래밍실"
        },
        {
            time: "10~11",
            grade: "1학년",
            name: "파이썬을 이용한 문제해결",
            location: "프로그래밍실"
        }
    ];

    const myClasses = [
        {
            day: "월",
            time: "8~9교시",
            grade: "1",
            name: "스프링 부트를 이용한 웹서비스 개발",
            location: "객체지향 프로그래밍실"
        },
        {
            day: "월",
            time: "8~9교시",
            grade: "1",
            name: "파이썬",
            location: "객체지향 프로그래밍실"
        },
        {
            day: "월",
            time: "8~9교시",
            grade: "1",
            name: "파이썬을 이용한 문제해결",
            location: "객체지향 프로그래밍실"
        },
        {
            day: "월",
            time: "8~9교시",
            grade: "1",
            name: "파이썬을 이용한 문제해결",
            location: "프로그래밍실"
        },
        {
            day: "월",
            time: "8~9교시",
            grade: "1",
            name: "파이썬을 이용한 문제해결",
            location: "프로그래밍실"
        },
        {
            day: "월",
            time: "8~9교시",
            grade: "1",
            name: "파이썬을 이용한 문제해결",
            location: "프로그래밍실"
        }
    ];

    const closeModalHandler = (setModal) => {
        setModal(false);
    };

    return (
        <S.AfterSchoolContainer>
            <Header />
            <S.Content>
                <S.LeftContainer>
                    <S.TodayClasses>
                        <h1>나의 오늘 방과후</h1>
                        {myTodayClasses.map((cls, i) => (
                            <S.ClassCard key={i}>
                                <S.CardTime>{cls.time}</S.CardTime>
                                <div>{cls.grade}</div>
                                <S.CardData $length={190}>{cls.name}</S.CardData>
                                <S.CardData $length={150}>{cls.location}</S.CardData>
                            </S.ClassCard>
                        ))}
                    </S.TodayClasses>

                    <S.MyClasses>
                        <h1>나의 방과후 수업 ({myClasses.length})</h1>
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
                                        <S.TableData $length={46}>{cls.grade}</S.TableData>
                                        <S.TableData $length={47}>{cls.day}</S.TableData>
                                        <S.TableData $length={87}>{cls.time}</S.TableData>
                                        <S.TableData $length={190}>{cls.name}</S.TableData>
                                        <S.TableData $length={170}>{cls.location}</S.TableData>
                                        <S.OptionButton src={OptionButton} onClick={() => {
                                            setOptions(options === i ? null : i);
                                            setSelectedClass(cls);
                                        }} />
                                        {options === i && ( // 옵션 버튼이 클릭된 수업만 목록을 보여줌
                                            <S.Options onClick={(e) => e.stopPropagation()}>
                                                <button onClick={() => {
                                                    setOptions(null);
                                                    setIsModal1(true);
                                                }}>출장</button>
                                                <button onClick={() => {
                                                    setOptions(null);
                                                    setIsModal2(true);
                                                }}>보강</button>
                                                <button onClick={() => {
                                                    setOptions(null);
                                                    setIsModal3(true);
                                                }}>종료</button>
                                            </S.Options>
                                        )}
                                    </S.ClassTable>
                                ))}
                            </S.ClassTableMain>
                        </S.ClassTableContent>
                    </S.MyClasses>
                </S.LeftContainer>
            </S.Content>

            {isModal1 && (
                <S.BusinessTripModal onClick={() => closeModalHandler(setIsModal1)}>
                    <S.BusinessModal onClick={(e) => e.stopPropagation()}>
                        <BusinessTrip closeModal={() => { setIsModal1(false) }} />
                    </S.BusinessModal>
                </S.BusinessTripModal>
            )}
            {isModal2 && (
                <S.ClassPrepModal onClick={() => closeModalHandler(setIsModal2)}>
                    <S.PrepModal onClick={(e) => e.stopPropagation()}>
                        <ClassPrep closeModal={() => { setIsModal2(false) }} />
                    </S.PrepModal>
                </S.ClassPrepModal>
            )}
            {isModal3 && (
                <S.ClassEndModal onClick={() => closeModalHandler(setIsModal3)} >
                    <S.EndModal onClick={(e) => e.stopPropagation()}>
                        <ClassEnd
                            closeModal={() => { setIsModal3(false) }}
                            selectedClass={selectedClass}
                        />
                    </S.EndModal>
                </S.ClassEndModal>
            )}
        </S.AfterSchoolContainer>
    )
}
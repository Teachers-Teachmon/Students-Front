import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import ConfirmBtn from '../../../components/button/confirm/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Rotate from '../../../assets/rotate.svg';

export default function SupervisionChange() {

    let navigate = useNavigate();

    const [selectedTeacher, setSelectedTeacher] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [TeacherList, setTeacherList] = useState([
        {
            "data": [
                {
                    "week": "2월 1주차",
                    "day": "2월 1일 (월)",
                    "date": "2025-02-01",
                    "first_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "second_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "third_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    }
                },
                {
                    "week": "2월 1주차",
                    "day": "2월 2일 (화)",
                    "date": "2025-02-02",
                    "first_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "second_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "third_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    }
                },
                {
                    "week": "2월 1주차",
                    "day": "2월 3일 (수)",
                    "date": "2025-02-03",
                    "first_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "second_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "third_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    }
                },
                {
                    "week": "2월 1주차",
                    "day": "2월 4일 (목)",
                    "date": "2025-02-04",
                    "first_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "second_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "third_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    }
                },
                {
                    "week": "2월 2주차",
                    "day": "2월 8일 (월)",
                    "date": "2025-02-08",
                    "first_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "second_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "third_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    }
                },
                {
                    "week": "2월 2주차",
                    "day": "2월 9일 (화)",
                    "date": "2025-02-09",
                    "first_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "second_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "third_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    }
                },
                {
                    "week": "2월 2주차",
                    "day": "2월 10일 (수)",
                    "date": "2025-02-10",
                    "first_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "second_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "third_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    }
                },
                {
                    "week": "2월 2주차",
                    "day": "2월 11일 (목)",
                    "date": "2025-02-11",
                    "first_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "second_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    },
                    "third_grade": {
                        "7th_teacher": "정유진/24.061@bssm.hs.kr",
                        "8th_teacher": "최병준/24.061@bssm.hs.kr",
                        "10th_teacher": "장나영/24.061@bssm.hs.kr"
                    }
                }
            ]
        }
    ]);
    // const [TeacherList, setTeacherList] = useState([
    //     {
    //         "data": [
    //             {
    //                 "week": "2월 1주차",
    //                 "schedule": [
    //                     {
    //                         "day": "2월 1일 (월)",
    //                         "first_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "second_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "third_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         }
    //                     },
    //                     {
    //                         "day": "2월 2일 (화)",
    //                         "first_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "second_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "third_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         }
    //                     },
    //                     {
    //                         "day": "2월 3일 (수)",
    //                         "first_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "second_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "third_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         }
    //                     },
    //                     {
    //                         "day": "2월 4일 (목)",
    //                         "first_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "second_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "third_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 "week": "2월 2주차",
    //                 "schedule": [
    //                     {
    //                         "day": "2월 8일 (월)",
    //                         "first_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "second_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "third_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         }
    //                     },
    //                     {
    //                         "day": "2월 9일 (화)",
    //                         "first_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "second_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "third_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         }
    //                     },
    //                     {
    //                         "day": "2월 10일 (수)",
    //                         "first_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "second_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "third_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         }
    //                     },
    //                     {
    //                         "day": "2월 11일 (목)",
    //                         "first_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "second_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         },
    //                         "third_grade": {
    //                             "7th_teacher": "정유진/24.061@bssm.hs.kr/me",
    //                             "8th_teacher": "최병준/24.061@bssm.hs.kr",
    //                             "10th_teacher": "장나영/24.061@bssm.hs.kr"
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ]);

    const handleSelectTeacher = (uniqueKey) => {
        setSelectedTeacher((prev) => {
            const updated = prev.includes(uniqueKey)
                ? prev.filter(t => t !== uniqueKey)
                : [...prev, uniqueKey];

            if (updated.length === 2) {
                setIsModalOpen(true);
            }
            return updated;
        });
    };

    const [currentMonth, setCurrentMonth] = useState(2);
    const [weeks, setWeeks] = useState(TeacherList[0].data);

    const handleNextMonth = () => {
        if (currentMonth < 12) {
            const nextMonth = currentMonth + 1;
            setCurrentMonth(nextMonth);
            updateWeeks(nextMonth);
        }
    };

    const handlePrevMonth = () => {
        if (currentMonth > 1) {
            const prevMonth = currentMonth - 1;
            setCurrentMonth(prevMonth);
            updateWeeks(prevMonth);
        }
    };

    const updateWeeks = (month) => {
        // API호출해야함
        const monthName = `${month}월`;
        const newWeeks = [
            { week: `${monthName} 1주차`, schedule: weeks[0].schedule },
            { week: `${monthName} 2주차`, schedule: weeks[1].schedule },
        ];
        setWeeks(newWeeks);
    };

    function groupByWeek(dataArray) {
        return dataArray.reduce((acc, item) => {
            const w = item.week; // 예: "2월 1주차"
            if (!acc[w]) acc[w] = [];
            acc[w].push(item);
            return acc;
        }, {});
    }

    const allData = TeacherList[0].data || [];
    const groupedWeeks = groupByWeek(allData);


    return (
        <S.Wrapper>
            <Header />
            <S.MainWrap>
                <S.NavButton onClick={handlePrevMonth}>{'<'}</S.NavButton>
                <S.MainContent>
                    <S.MainHeader>
                        <h1>자습감독 교체요청 <S.Warning>* 바꾸고 싶은 자신의 시간을 선택해 주세요.</S.Warning></h1>
                        <SquareBtn name="돌아가기" status={true} On={() => { navigate('/supervision') }} />
                    </S.MainHeader>
                    <S.TableWrap>
                        {Object.entries(groupedWeeks).map(([weekName, dayArray], wIndex) => (
                            <S.Table key={weekName}>
                                <h2>{weekName}</h2>
                                <S.TableContent>
                                    <S.TableLeft>
                                        <div>날짜</div>
                                        <div>학년</div>
                                        <div>7교시</div>
                                        <div>8~9교시</div>
                                        <div>10~11교시</div>
                                    </S.TableLeft>
                                    <S.TableRight>
                                        {dayArray.map((dayData, dayIndex) => (
                                            <S.TableRightContent key={dayIndex}>
                                                <h3>{dayData.day}</h3>
                                                <S.TableRightHeader>
                                                    <div>1학년</div>
                                                    <div>2학년</div>
                                                    <div>3학년</div>
                                                </S.TableRightHeader>
                                                <S.TeacherList>
                                                    {['7th_teacher', '8th_teacher', '10th_teacher'].map((classKey) =>
                                                        ['first_grade', 'second_grade', 'third_grade'].map((gradeKey) => {
                                                            const teacherInfo = dayData[gradeKey][classKey];
                                                            const teacherName = teacherInfo.split('/')[0];
                                                            const uniqueKey = `${dayData.day}-${gradeKey}-${classKey}`;

                                                            return (
                                                                <div
                                                                    key={uniqueKey}
                                                                    onClick={() => handleSelectTeacher(uniqueKey)}
                                                                    style={{
                                                                        backgroundColor: selectedTeacher.includes(uniqueKey) ? '#2E6FF2' : '#FFF',
                                                                        color: selectedTeacher.includes(uniqueKey) ? '#FFF' : '#000',
                                                                        cursor: 'pointer',
                                                                    }}
                                                                >
                                                                    {teacherName}
                                                                </div>
                                                            );
                                                        })
                                                    )}
                                                </S.TeacherList>

                                            </S.TableRightContent>
                                        ))}
                                    </S.TableRight>
                                </S.TableContent>
                            </S.Table>
                        ))}
                    </S.TableWrap>
                </S.MainContent>
                <S.NavButton onClick={handleNextMonth}>{'>'}</S.NavButton>
            </S.MainWrap>

            {isModalOpen && (
                <S.ModalOverlay>
                    <S.Modal>
                        <h2>교체요청을 보내시겠습니까?</h2>
                        <S.ExchangeInfo>
                            <div>
                                <span>{selectedTeacher[0].split('-')[0]}</span>
                                <p>{selectedTeacher[0].split('-')[1].includes('first') ? '7교시' : selectedTeacher[0].split('-')[1].includes('second') ? '8~9교시' : '10~11교시'}</p>
                                <p>학년</p>
                                <p>{selectedTeacher[0]} 선생님</p>
                            </div>
                            <S.Arrow><img src={Rotate} /></S.Arrow>
                            <div>
                                <span>{selectedTeacher[1].split('-')[0]}</span>
                                <p>{selectedTeacher[1].split('-')[1].includes('first') ? '7교시' : selectedTeacher[1].split('-')[1].includes('second') ? '8~9교시' : '10~11교시'}</p>
                                <p>학년</p>
                                <p>{selectedTeacher[1]} 선생님</p>
                            </div>
                        </S.ExchangeInfo>
                        <textarea placeholder="사유를 입력해 주세요"></textarea>
                        <S.ModalButtons>
                            <ConfirmBtn text="취소" color="red" image="reject" onClick={() => { setIsModalOpen(false); setSelectedTeacher([]); }} />
                            <ConfirmBtn text="전송" color="blue" image="fly" onClick={() => alert("요청 전송 완료")} />
                        </S.ModalButtons>
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Wrapper>
    );
}

// <S.TableWrap> {/* 여기 map돌려야함, 이거 만약 넣는다면 <S.MainHeader> 바로 아래에 넣어야함. */}
//                     <S.Table>
//                         <h2>1월 1주차</h2>
//                         <S.TableContent>
//                             <S.TableLeft>
//                                 <div>날짜</div>
//                                 <div>학년</div>
//                                 <div>7교시</div>
//                                 <div>8~9교시</div>
//                                 <div>10~11교시</div>
//                             </S.TableLeft>
//                             <S.TableRight>
//                                 <S.TableRightContent>
//                                     <h3>12월 10일 (일)</h3>
//                                     <S.TableRightHeader>
//                                         <div>1학년</div>
//                                         <div>2학년</div>
//                                         <div>3학년</div>
//                                     </S.TableRightHeader>
//                                     <S.TeacherList>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                     </S.TeacherList>
//                                 </S.TableRightContent>
//                                 <S.TableRightContent>
//                                     <h3>12월 10일 (일)</h3>
//                                     <S.TableRightHeader>
//                                         <div>1학년</div>
//                                         <div>2학년</div>
//                                         <div>3학년</div>
//                                     </S.TableRightHeader>
//                                     <S.TeacherList>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                     </S.TeacherList>
//                                 </S.TableRightContent>
//                                 <S.TableRightContent>
//                                     <h3>12월 10일 (일)</h3>
//                                     <S.TableRightHeader>
//                                         <div>1학년</div>
//                                         <div>2학년</div>
//                                         <div>3학년</div>
//                                     </S.TableRightHeader>
//                                     <S.TeacherList>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                     </S.TeacherList>
//                                 </S.TableRightContent>
//                                 <S.TableRightContent>
//                                     <h3>12월 10일 (일)</h3>
//                                     <S.TableRightHeader>
//                                         <div>1학년</div>
//                                         <div>2학년</div>
//                                         <div>3학년</div>
//                                     </S.TableRightHeader>
//                                     <S.TeacherList>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                     </S.TeacherList>
//                                 </S.TableRightContent>
//                             </S.TableRight>
//                         </S.TableContent>
//                     </S.Table>
//                     <S.Table>
//                         <h2>1월 1주차</h2>
//                         <S.TableContent>
//                             <S.TableLeft>
//                                 <div>날짜</div>
//                                 <div>학년</div>
//                                 <div>7교시</div>
//                                 <div>8~9교시</div>
//                                 <div>10~11교시</div>
//                             </S.TableLeft>
//                             <S.TableRight>
//                                 <S.TableRightContent>
//                                     <h3>12월 10일 (일)</h3>
//                                     <S.TableRightHeader>
//                                         <div>1학년</div>
//                                         <div>2학년</div>
//                                         <div>3학년</div>
//                                     </S.TableRightHeader>
//                                     <S.TeacherList>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                     </S.TeacherList>
//                                 </S.TableRightContent>
//                                 <S.TableRightContent>
//                                     <h3>12월 10일 (일)</h3>
//                                     <S.TableRightHeader>
//                                         <div>1학년</div>
//                                         <div>2학년</div>
//                                         <div>3학년</div>
//                                     </S.TableRightHeader>
//                                     <S.TeacherList>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                     </S.TeacherList>
//                                 </S.TableRightContent>
//                                 <S.TableRightContent>
//                                     <h3>12월 10일 (일)</h3>
//                                     <S.TableRightHeader>
//                                         <div>1학년</div>
//                                         <div>2학년</div>
//                                         <div>3학년</div>
//                                     </S.TableRightHeader>
//                                     <S.TeacherList>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                     </S.TeacherList>
//                                 </S.TableRightContent>
//                                 <S.TableRightContent>
//                                     <h3>12월 10일 (일)</h3>
//                                     <S.TableRightHeader>
//                                         <div>1학년</div>
//                                         <div>2학년</div>
//                                         <div>3학년</div>
//                                     </S.TableRightHeader>
//                                     <S.TeacherList>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                         <div>차수민</div>
//                                     </S.TeacherList>
//                                 </S.TableRightContent>
//                             </S.TableRight>
//                         </S.TableContent>
//                     </S.Table>
//                 </S.TableWrap>
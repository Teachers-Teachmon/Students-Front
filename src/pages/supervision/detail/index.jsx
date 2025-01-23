import Header from '../../../components/header/index.jsx';
import * as S from './style.jsx';
import Circle from '../../../components/button/circle/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SupervisionCreate from '../../../components/modal/supervisionCreate/index.jsx';
import SearchDropdown from '../../../components/dropdown/search/index.jsx';

export default function SupervisionDetail() {
    const [selMonth, setSelMonth] = useState(new Date().getMonth());
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState({});

    const teacherOptions = ["정유진", "최병준", "장나영"]; // 임시로 정적으로 박아버리기
    const handleTeacherChange = (key, value) => {
        setSelectedTeacher(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const toggleDropdown = (key) => {
        setDropdownOpen(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

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

    function groupByWeek(dataArray) {
        return dataArray.reduce((acc, item) => {
            const w = item.week;
            if (!acc[w]) acc[w] = [];
            acc[w].push(item);
            return acc;
        }, {});
    }
    const groupedData = groupByWeek(TeacherList[0].data);

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

    return (
        <S.Wrapper>
            <Header />
            <S.MainWrap>
                <S.MainHeader>
                    <h1>자습감독 일정</h1>
                    {!isEditing ? (
                        <S.Buttons>
                            <SquareBtn name="자습감독수정" status={true} On={() => { setIsEditing(true) }} />
                            <SquareBtn name="자습감독생성" status={true} On={() => { setIsCreateModalOpen(true) }} />
                        </S.Buttons>
                    ) : (
                        <S.Buttons>
                            <SquareBtn name="저장하기" status={true} On={() => { setIsEditing(false) }} />
                        </S.Buttons>)}
                </S.MainHeader>
                <S.Months>
                    {[...Array(12)].map((_, i) => (
                        <Circle key={i} name={`${i + 1}월`} status={selMonth === i} On={() => setSelMonth(i)} />
                    ))}
                </S.Months>
                <S.TableWrap>
                    {Object.keys(groupedData).map((weekKey) => (
                        <S.Table key={weekKey}>
                            <h2>{weekKey}</h2>
                            <S.TableContent>
                                <S.TableLeft>
                                    <div>날짜</div>
                                    <div>학년</div>
                                    <div>7교시</div>
                                    <div>8~9교시</div>
                                    <div>10~11교시</div>
                                </S.TableLeft>
                                <S.TableRight>
                                    {groupedData[weekKey].map((dayData, dayIndex) => (
                                        <S.TableRightContent key={dayIndex}>
                                            <h3>{dayData.day}</h3>
                                            <S.TableRightHeader>
                                                <div>1학년</div>
                                                <div>2학년</div>
                                                <div>3학년</div>
                                            </S.TableRightHeader>

                                            {["7th_teacher", "8th_teacher", "10th_teacher"].map((timeKey, timeIndex) => (
                                                <S.TeacherList key={timeIndex}>
                                                    {["first_grade", "second_grade", "third_grade"].map((gradeKey, gradeIndex) => {
                                                        const teacherName = dayData[gradeKey][timeKey].split("/")[0];
                                                        const uniqueKey = `${dayData.date}-${gradeKey}-${timeKey}`;

                                                        return (
                                                            <div key={gradeIndex}>
                                                                {isEditing ? (
                                                                    <SearchDropdown
                                                                        name={selectedTeacher[uniqueKey] || teacherName}
                                                                        isOpen={dropdownOpen[uniqueKey] || false}
                                                                        item={teacherOptions}
                                                                        change={(value) => handleTeacherChange(uniqueKey, value)}
                                                                        click={() => toggleDropdown(uniqueKey)}
                                                                    />
                                                                ) : (
                                                                    <S.TeacherName>{teacherName}</S.TeacherName>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </S.TeacherList>
                                            ))}
                                        </S.TableRightContent>
                                    ))}
                                </S.TableRight>
                            </S.TableContent>
                        </S.Table>
                    ))}
                </S.TableWrap>
            </S.MainWrap>
            {isCreateModalOpen && (
                <S.ModalOverlay>
                    <S.Modal>
                        <SupervisionCreate closeModal={() => { setIsCreateModalOpen(false) }} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Wrapper>
    );
}
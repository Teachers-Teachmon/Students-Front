import Header from '../../components/header/index.jsx';
import * as S from './style.jsx';
import Circle from '../../components/button/circle/index.jsx';
import SquareBtn from '../../components/button/square/index.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAssignment } from '../../hooks/useSupervision.js';
import Loading from '../../components/loading/index.jsx';

export default function Supervision() {
    const navigate = useNavigate();
    const [selMonth, setSelMonth] = useState(new Date().getMonth());
    const [dropdownOpen, setDropdownOpen] = useState({});
    const [localData, setLocalData] = useState([]);

    // const { data: TeacherList, isLoading, isError } = useGetAssignment(selMonth + 1);
    const TeacherList = {
        "data": [
          // 2월 1주차 (월 ~ 목)
          {
            "week": "2월 1주차",
            "day": "2월 3일 (월)",
            "date": "2025-02-03",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 1주차",
            "day": "2월 4일 (화)",
            "date": "2025-02-04",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 1주차",
            "day": "2월 5일 (수)",
            "date": "2025-02-05",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 1주차",
            "day": "2월 6일 (목)",
            "date": "2025-02-06",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          // 2월 2주차 (월 ~ 목)
          {
            "week": "2월 2주차",
            "day": "2월 10일 (월)",
            "date": "2025-02-10",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 2주차",
            "day": "2월 11일 (화)",
            "date": "2025-02-11",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 2주차",
            "day": "2월 12일 (수)",
            "date": "2025-02-12",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 2주차",
            "day": "2월 13일 (목)",
            "date": "2025-02-13",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          // 2월 3주차 (월 ~ 목)
          {
            "week": "2월 3주차",
            "day": "2월 17일 (월)",
            "date": "2025-02-17",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 3주차",
            "day": "2월 18일 (화)",
            "date": "2025-02-18",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 3주차",
            "day": "2월 19일 (수)",
            "date": "2025-02-19",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 3주차",
            "day": "2월 20일 (목)",
            "date": "2025-02-20",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          // 2월 4주차 (월 ~ 목)
          {
            "week": "2월 4주차",
            "day": "2월 24일 (월)",
            "date": "2025-02-24",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 4주차",
            "day": "2월 25일 (화)",
            "date": "2025-02-25",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 4주차",
            "day": "2월 26일 (수)",
            "date": "2025-02-26",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          },
          {
            "week": "2월 4주차",
            "day": "2월 27일 (목)",
            "date": "2025-02-27",
            "self_study_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "leave_seat_teacher": {
              "7th_teacher": "정유진/1/me",
              "8th_teacher": "최병준/2",
              "10th_teacher": "장나영/3"
            },
            "night_teacher": "정유진/1/me"
          }
        ]
    };      
    useEffect(() => {
        console.log("TeacherList 데이터:", TeacherList);
        if (TeacherList?.data) {
            setLocalData(TeacherList.data);
        }
    }, [TeacherList]);

    function groupByWeek(dataArray) {
        const daysOfWeek = ["월", "화", "수", "목"];

        const extractDay = (dateStr) => {
            const match = dateStr.match(/\((.*?)\)/);
            return match ? match[1] : "";
        };
        const grouped = dataArray.reduce((acc, item) => {
            const week = item.week;
            const dayOfWeek = extractDay(item.day);

            if (!acc[week]) acc[week] = [];
            acc[week].push({ ...item, dayOfWeek });
            return acc;
        }, {});

        Object.keys(grouped).forEach((week) => {
            const filledWeek = [];
            daysOfWeek.forEach((day, index) => {
                const found = grouped[week].find((item) => item.dayOfWeek === day);
                if (found) {
                    filledWeek.push(found);
                } else {
                    filledWeek.push({
                        empty: true,
                        dayOfWeek: day,
                        day: `0월 ${index + 1}일 (${day})`,
                    });
                }
            });
            grouped[week] = filledWeek;
        });
        return grouped;
    }
    const groupedData = groupByWeek(localData);

    return (
        <S.Wrapper>
            {/* {isLoading && <Loading />} */}
            <Header />
            <S.MainWrap>
                {Object.values(dropdownOpen).some(status => status) && (
                    <S.Black onClick={() => setDropdownOpen({})} />
                )}
                <S.MainHeader>
                    <h1>자습감독 일정</h1>
                    <S.Buttons>
                        <SquareBtn name="교체하기" status={true} On={() => { navigate('/supervision/change') }} />
                    </S.Buttons>
                </S.MainHeader>
                <S.Months>
                    {[...Array(12)].map((_, i) => (
                        <Circle key={i} name={`${i + 1}월`} status={selMonth === i} On={() => setSelMonth(i)} />
                    ))}
                </S.Months>
                <S.TableWrap>
                    {Object.keys(groupedData).map((weekKey) => (
                        <S.Table key={weekKey}>
                            <h2>{weekKey || "주 없음"}</h2>
                            <S.TableContent>
                                <S.TableLeft>
                                    <div>날짜</div>
                                    <div>학년</div>
                                    <div>7교시</div>
                                    <div>8~9교시</div>
                                    <div>10~11교시</div>
                                    <div>야간</div>
                                </S.TableLeft>
                                <S.TableRight>
                                    {groupedData[weekKey].map((dayData, dayIndex) => (
                                        <S.TableRightContent key={dayIndex} $isEmpty={dayData.empty}>
                                            {dayData.empty ? (
                                                <span style={{ visibility: "hidden" }}>
                                                    <h3>{dayData.day || "날짜 없음"}</h3>
                                                    <S.TableRightHeader>
                                                        <div>자습</div>
                                                        <div>이석</div>
                                                    </S.TableRightHeader>
                                                    {["7th_teacher", "8th_teacher", "10th_teacher"].map((_, idx) => (
                                                        <S.TeacherList key={idx}>
                                                            <div style={{ visibility: "hidden" }} />
                                                            <div style={{ visibility: "hidden" }} />
                                                        </S.TeacherList>
                                                    ))}
                                                    <div style={{ visibility: "hidden" }} />
                                                </span>
                                            ) : (
                                                <>
                                                    <h3>{dayData.day || "날짜 없음"}</h3>
                                                    <S.TableRightHeader>
                                                        <div>자습</div>
                                                        <div>이석</div>
                                                    </S.TableRightHeader>
                                                    {["7th_teacher", "8th_teacher", "10th_teacher"].map((timeKey, timeIndex) => {
                                                        const selfTeacher = dayData.self_study_teacher?.[timeKey];
                                                        const leaveTeacher = dayData.leave_seat_teacher?.[timeKey];
                                                        const selfName = selfTeacher ? selfTeacher.split("/")[0] : "X";
                                                        const leaveName = leaveTeacher ? leaveTeacher.split("/")[0] : "X";
                                                        return (
                                                            <S.TeacherList key={timeIndex}>
                                                                <div>
                                                                    <S.TeacherName>{selfName}</S.TeacherName>
                                                                </div>
                                                                <div>
                                                                    <S.TeacherName>{leaveName}</S.TeacherName>
                                                                </div>
                                                            </S.TeacherList>
                                                        );
                                                    })}
                                                    <S.TeacherList>
                                                        <div>
                                                            <S.TeacherName>
                                                                {dayData.night_teacher ? dayData.night_teacher.split("/")[0] : "X"}
                                                            </S.TeacherName>
                                                        </div>
                                                        <div>
                                                            <S.TeacherName>
                                                                {dayData.night_teacher ? dayData.night_teacher.split("/")[0] : "X"}
                                                            </S.TeacherName>
                                                        </div>
                                                    </S.TeacherList>
                                                </>
                                            )}
                                        </S.TableRightContent>
                                    ))}
                                </S.TableRight>
                            </S.TableContent>
                        </S.Table>
                    ))}
                </S.TableWrap>
            </S.MainWrap>
        </S.Wrapper>
    );
}
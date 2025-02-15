import Header from '../../components/header/index.jsx';
import * as S from './style.jsx';
import Circle from '../../components/button/circle/index.jsx';
import SquareBtn from '../../components/button/square/index.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchDropdown from '../../components/dropdown/search/index.jsx';
import { useGetAssignment, useSaveAutoAssignment } from '../../hooks/useSupervision.js';
import { searchTeacher } from '../../api/search.js';
import Loading from '../../components/loading/index.jsx';

export default function Supervision() {
    const navigate = useNavigate();
    const [selMonth, setSelMonth] = useState(new Date().getMonth());
    const [isEditing, setIsEditing] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState({});
    const [localData, setLocalData] = useState([]);

    const handleTeacherChange = (date, grade, timeKey, newTeacher) => {
        setSelectedTeacher(prev => ({
            ...prev,
            [`${date}-${grade}-${timeKey}`]: newTeacher
        }));

        setLocalData(prev => prev.map(dayData => {
            if (dayData.date === date) {
                return {
                    ...dayData,
                    [grade]: {
                        ...dayData[grade],
                        [timeKey]: newTeacher
                            ? `${newTeacher.name}/${newTeacher.id}`
                            : `X/0`
                    }
                };
            }
            return dayData;
        }));
    };

    const toggleDropdown = (key) => {
        setDropdownOpen(prev => {
            if (prev[key]) {
                return {};
            }
            return { [key]: true };
        });
    };

    const { data: TeacherList, isLoading, isError } = useGetAssignment(selMonth + 1);
    const { mutate: saveAssignment } = useSaveAutoAssignment();

    useEffect(() => {
        console.log("TeacherList 데이터:", TeacherList);
        if (TeacherList?.data) {
            setLocalData(TeacherList.data);
        }
    }, [TeacherList]);

    const handleSave = () => {
        const changedData = localData.map(dayData => ({
            date: dayData.date,
            first_grade: {
                "7th_teacher": parseInt(dayData.first_grade["7th_teacher"]?.split("/")[1]),
                "8th_teacher": parseInt(dayData.first_grade["8th_teacher"]?.split("/")[1]),
                "10th_teacher": parseInt(dayData.first_grade["10th_teacher"]?.split("/")[1])
            },
            second_grade: {
                "7th_teacher": parseInt(dayData.second_grade["7th_teacher"]?.split("/")[1]),
                "8th_teacher": parseInt(dayData.second_grade["8th_teacher"]?.split("/")[1]),
                "10th_teacher": parseInt(dayData.second_grade["10th_teacher"]?.split("/")[1])
            },
            third_grade: {
                "7th_teacher": parseInt(dayData.third_grade["7th_teacher"]?.split("/")[1]),
                "8th_teacher": parseInt(dayData.third_grade["8th_teacher"]?.split("/")[1]),
                "10th_teacher": parseInt(dayData.third_grade["10th_teacher"]?.split("/")[1])
            }
        }));

        saveAssignment(changedData);
        setIsEditing(false);
    };

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
            {isLoading && <Loading />}
            <Header />
            <S.MainWrap>
                {Object.values(dropdownOpen).some(status => status) && (
                    <S.Black onClick={() => setDropdownOpen({})} />
                )}
                <S.MainHeader>
                    {Object.values(dropdownOpen).some(status => status) && (
                        <S.Black onClick={() => setDropdownOpen({})} />
                    )}
                    <h1>자습감독 일정</h1>
                    {!isEditing ? (
                        <S.Buttons>
                            <SquareBtn name="돌아가기" status={true} On={() => { navigate('/supervision') }} />
                            <SquareBtn name="자습감독수정" status={true} On={() => { setIsEditing(true) }} />
                            <SquareBtn name="자습감독생성" status={true} On={() => { navigate('/supervision/create') }} />
                        </S.Buttons>
                    ) : (
                        <S.Buttons>
                            <SquareBtn name="저장하기" status={true} On={handleSave} />
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
                            <h2>{weekKey || "주 없음"}</h2>
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
                                        <S.TableRightContent key={dayIndex} $isEmpty={dayData.empty}>
                                            {dayData.empty ? (
                                                <span style={{ visibility: "hidden" }}>
                                                    <h3>{dayData.day || "날짜 없음"}</h3>
                                                    <S.TableRightHeader>
                                                        <div>1학년</div>
                                                        <div>2학년</div>
                                                        <div>3학년</div>
                                                    </S.TableRightHeader>
                                                    <div style={{ visibility: "hidden" }} />
                                                    <div style={{ visibility: "hidden" }} />
                                                    <div style={{ visibility: "hidden" }} />
                                                </span>
                                            ) : (
                                                <>
                                                    <h3>{dayData.day || "날짜 없음"}</h3>
                                                    <S.TableRightHeader>
                                                        <div>1학년</div>
                                                        <div>2학년</div>
                                                        <div>3학년</div>
                                                    </S.TableRightHeader>

                                                    {["7th_teacher", "8th_teacher", "10th_teacher"].map((timeKey, timeIndex) => (
                                                        <S.TeacherList key={timeIndex}>
                                                            {["first_grade", "second_grade", "third_grade"].map((gradeKey, gradeIndex) => {
                                                                const teacherName = dayData[gradeKey]?.[timeKey] ? dayData[gradeKey][timeKey].split("/")[0] : "X";
                                                                const uniqueKey = `${dayData.date}-${gradeKey}-${timeKey}`;

                                                                return (
                                                                    <div key={gradeIndex}>
                                                                        {isEditing ? (
                                                                            <SearchDropdown
                                                                                target="선생님"
                                                                                name={selectedTeacher[uniqueKey]?.name || teacherName}
                                                                                axios={(event) => searchTeacher(event)}
                                                                                isOpen={dropdownOpen[uniqueKey] || false}
                                                                                change={(value) => handleTeacherChange(dayData.date, gradeKey, timeKey, value)}
                                                                                click={() => toggleDropdown(uniqueKey)}
                                                                                 left = {gradeIndex === 2 && dayData.day.slice(-3) === "(목)"? -800 : null}
                                                                            />
                                                                        ) : (
                                                                            <S.TeacherName>{teacherName}</S.TeacherName>
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </S.TeacherList>
                                                    ))}
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
import Header from '../../../components/header/index.jsx';
import * as S from './style.jsx';
import Circle from '../../../components/button/circle/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import { useState, useEffect } from 'react';
import SupervisionCreate from '../../../components/modal/supervisionCreate/index.jsx';
import SearchDropdown from '../../../components/dropdown/search/index.jsx';
import { useGetAssignment, useSaveAutoAssignment } from '../../../hooks/useSupervision.js';
import { searchTeacher } from '../../../api/search.js';

export default function SupervisionDetail() {
    const [selMonth, setSelMonth] = useState(new Date().getMonth());
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
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
                            : `미배정/0`
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
        return dataArray.reduce((acc, item) => {
            const w = item.week || "미배정";
            if (!acc[w]) acc[w] = [];
            acc[w].push(item);
            return acc;
        }, {});
    }
    const groupedData = groupByWeek(localData);

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
                                        <S.TableRightContent key={dayIndex}>
                                            <h3>{dayData.day || "날짜 없음"}</h3>
                                            <S.TableRightHeader>
                                                <div>1학년</div>
                                                <div>2학년</div>
                                                <div>3학년</div>
                                            </S.TableRightHeader>

                                            {["7th_teacher", "8th_teacher", "10th_teacher"].map((timeKey, timeIndex) => (
                                                <S.TeacherList key={timeIndex}>
                                                    {["first_grade", "second_grade", "third_grade"].map((gradeKey, gradeIndex) => {
                                                        const teacherName = dayData[gradeKey]?.[timeKey] ? dayData[gradeKey][timeKey].split("/")[0] : "미배정";
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
                <S.ModalOverlay onClick={() => setIsCreateModalOpen(false)}>
                    <S.Modal onClick={(e) => e.stopPropagation()}>
                        <SupervisionCreate closeModal={() => { setIsCreateModalOpen(false) }} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Wrapper>
    );
}
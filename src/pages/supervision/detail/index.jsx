import Header from '../../../components/header/index.jsx';
import * as S from './style.jsx';
import Circle from '../../../components/button/circle/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import { useState } from 'react';
import SupervisionCreate from '../../../components/modal/supervisionCreate/index.jsx';
import SearchDropdown from '../../../components/dropdown/search/index.jsx';
import { useGetAssignment, useSaveAutoAssignment } from '../../../hooks/useSupervision.js';

export default function SupervisionDetail() {
    const [selMonth, setSelMonth] = useState(new Date().getMonth());
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState({});

    const handleTeacherChange = (date, grade, timeKey, newTeacher) => {
        setSelectedTeacher(prev => ({
            ...prev,
            [`${date}-${grade}-${timeKey}`]: newTeacher
        }));
    
        setTeacherList(prevList =>
            prevList.map(weekData => ({
                ...weekData,
                data: weekData.data.map(dayData =>
                    dayData.date === date
                        ? {
                              ...dayData,
                              [grade]: {
                                  ...dayData[grade],
                                  [timeKey]: `${newTeacher}/${dayData[grade][timeKey].split("/")[1]}`
                              }
                          }
                        : dayData
                )
            }))
        );
    };    

    const toggleDropdown = (key) => {
        setDropdownOpen(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const { data: TeacherList, isLoading, isError } = useGetAssignment(selMonth + 1);
    const { mutate: saveAssignment } = useSaveAutoAssignment();

    const handleSave = () => {
        const changedData = TeacherList?.[0]?.data.map(dayData => ({
            date: dayData.date,
            first_grade: {
                "7th_teacher": parseInt(dayData.first_grade["7th_teacher"].split("/")[1]),
                "8th_teacher": parseInt(dayData.first_grade["8th_teacher"].split("/")[1]),
                "10th_teacher": parseInt(dayData.first_grade["10th_teacher"].split("/")[1])
            },
            second_grade: {
                "7th_teacher": parseInt(dayData.second_grade["7th_teacher"].split("/")[1]),
                "8th_teacher": parseInt(dayData.second_grade["8th_teacher"].split("/")[1]),
                "10th_teacher": parseInt(dayData.second_grade["10th_teacher"].split("/")[1])
            },
            third_grade: {
                "7th_teacher": parseInt(dayData.third_grade["7th_teacher"].split("/")[1]),
                "8th_teacher": parseInt(dayData.third_grade["8th_teacher"].split("/")[1]),
                "10th_teacher": parseInt(dayData.third_grade["10th_teacher"].split("/")[1])
            }
        }));
    
        saveAssignment(changedData);
        setIsEditing(false);
    };
    
    function groupByWeek(dataArray) {
        return dataArray.reduce((acc, item) => {
            const w = item.week;
            if (!acc[w]) acc[w] = [];
            acc[w].push(item);
            return acc;
        }, {});
    }
    const groupedData = groupByWeek(TeacherList?.[0]?.data || []);

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
                            <SquareBtn name="저장하기" status={true} On={ handleSave } />
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
                                                                        target="선생님"
                                                                        name={selectedTeacher[uniqueKey] || teacherName}
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
                <S.ModalOverlay>
                    <S.Modal>
                        <SupervisionCreate closeModal={() => { setIsCreateModalOpen(false) }} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Wrapper>
    );
}
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

    const { data: TeacherList, isLoading, isError } = useGetAssignment(selMonth + 1);
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
                                                                return (
                                                                    <div key={gradeIndex}>
                                                                        <S.TeacherName>{teacherName}</S.TeacherName>
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
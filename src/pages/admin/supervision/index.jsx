import Header from '../../../components/header/index.jsx';
import * as S from './style.jsx';
import Circle from '../../../components/button/circle/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import SupervisionCreateModal from '../../../components/modal/supervisionCreate/index.jsx';
import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import SearchDropdown from '../../../components/dropdown/search/index.jsx';
import { useGetAssignment, useSaveAutoAssignment } from '../../../hooks/useSupervision.js';
import { searchTeacher } from '../../../api/search.js';
import Loading from '../../../components/loading/index.jsx';
import InputBox from "../../../components/searchBox";
import X from '../../../assets/X.svg'
import { useGetRanking } from '../../../hooks/useSupervision.js'

export default function AdminSupervision() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [selMonth, setSelMonth] = useState(new Date().getMonth());
    const [isEditing, setIsEditing] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState({});
    const [localData, setLocalData] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [order, setOrder] = useState("ASC");
    const [teacher, setTeacher] = useState("");
    const { data: Ranking } = useGetRanking(order, teacher);

    const handleTeacherChange = (date, type, timeKey, newTeacher) => {
        setSelectedTeacher(prev => ({
            ...prev,
            [`${date}-${type}-${timeKey}`]: newTeacher
        }));

        setLocalData(prev => prev.map(dayData => {
            if (dayData.date === date) {
                if (type === "common_teacher") {
                    return {
                        ...dayData,
                        [timeKey]: newTeacher ? `${newTeacher.name}/${newTeacher.id}` : `X/0`
                    }
                }
                else {
                    return {
                        ...dayData,
                        [type]: {
                            ...dayData[type],
                            [timeKey]:  newTeacher === 'X' ? null : newTeacher ? `${newTeacher.name}/${newTeacher.id}` : `X/0`
                        }
                    };
                }
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

    // const { data: TeacherList, isLoading, isError } = useGetAssignment(selMonth + 1);
    const TeacherList = {
        "data": [
            {
                "week": "3월 2주차",
                "day": "3월 3일 (월)",
                "date": "2025-03-03",
                "self_study_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": null,
                    "10th_teacher": null
                },
                "leave_seat_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": null,
                    "10th_teacher": null
                },
                "night_teacher": null
            },
            {
                "week": "3월 2주차",
                "day": "3월 4일 (화)",
                "date": "2025-03-04",
                "self_study_teacher": {
                    "7th_teacher": "이나영/71",
                    "8th_teacher": "이나영/71",
                    "10th_teacher": "이나영/71"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "박수진/62",
                    "8th_teacher": "박수진/62",
                    "10th_teacher": "박수진/62"
                },
                "night_teacher": "유근찬/69"
            },
            {
                "week": "3월 2주차",
                "day": "3월 5일 (수)",
                "date": "2025-03-05",
                "self_study_teacher": {
                    "7th_teacher": "차수민/82",
                    "8th_teacher": "차수민/82",
                    "10th_teacher": "차수민/82"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "박지혜/64",
                    "8th_teacher": "박지혜/64",
                    "10th_teacher": "박지혜/64"
                },
                "night_teacher": "강경아/85"
            },
            {
                "week": "3월 2주차",
                "day": "3월 6일 (목)",
                "date": "2025-03-06",
                "self_study_teacher": {
                    "7th_teacher": "이세준/72",
                    "8th_teacher": "이세준/72",
                    "10th_teacher": "이세준/72"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "박진향/65",
                    "8th_teacher": "박진향/65",
                    "10th_teacher": "박진향/65"
                },
                "night_teacher": "정희철/79"
            },
            {
                "week": "3월 3주차",
                "day": "3월 10일 (월)",
                "date": "2025-03-10",
                "self_study_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": "진예빈/81",
                    "10th_teacher": "진예빈/81"
                },
                "leave_seat_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": "이혜정/73",
                    "10th_teacher": "이혜정/73"
                },
                "night_teacher": "설동상/66"
            },
            {
                "week": "3월 3주차",
                "day": "3월 11일 (화)",
                "date": "2025-03-11",
                "self_study_teacher": {
                    "7th_teacher": "강경아/85",
                    "8th_teacher": "강경아/85",
                    "10th_teacher": "강경아/85"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "박소영/61",
                    "8th_teacher": "박소영/61",
                    "10th_teacher": "박소영/61"
                },
                "night_teacher": "김규봉/55"
            },
            {
                "week": "3월 3주차",
                "day": "3월 12일 (수)",
                "date": "2025-03-12",
                "self_study_teacher": {
                    "7th_teacher": "박근남/60",
                    "8th_teacher": "박근남/60",
                    "10th_teacher": "박근남/60"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "김미영/56",
                    "8th_teacher": "김미영/56",
                    "10th_teacher": "김미영/56"
                },
                "night_teacher": "박제현/63"
            },
            {
                "week": "3월 3주차",
                "day": "3월 13일 (목)",
                "date": "2025-03-13",
                "self_study_teacher": {
                    "7th_teacher": "곽상미/54",
                    "8th_teacher": "곽상미/54",
                    "10th_teacher": "곽상미/54"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "김규봉/55",
                    "8th_teacher": "김규봉/55",
                    "10th_teacher": "김규봉/55"
                },
                "night_teacher": "차수민/82"
            },
            {
                "week": "3월 4주차",
                "day": "3월 17일 (월)",
                "date": "2025-03-17",
                "self_study_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": "손현정/67",
                    "10th_teacher": "손현정/67"
                },
                "leave_seat_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": "설동상/66",
                    "10th_teacher": "설동상/66"
                },
                "night_teacher": "김미영/56"
            },
            {
                "week": "3월 4주차",
                "day": "3월 18일 (화)",
                "date": "2025-03-18",
                "self_study_teacher": {
                    "7th_teacher": "조성찬/80",
                    "8th_teacher": "조성찬/80",
                    "10th_teacher": "조성찬/80"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "정종건/78",
                    "8th_teacher": "정종건/78",
                    "10th_teacher": "정종건/78"
                },
                "night_teacher": "김상화/57"
            },
            {
                "week": "3월 4주차",
                "day": "3월 19일 (수)",
                "date": "2025-03-19",
                "self_study_teacher": {
                    "7th_teacher": "김신애/58",
                    "8th_teacher": "김신애/58",
                    "10th_teacher": "김신애/58"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "이혜정/73",
                    "8th_teacher": "이혜정/73",
                    "10th_teacher": "이혜정/73"
                },
                "night_teacher": "곽상미/54"
            },
            {
                "week": "3월 4주차",
                "day": "3월 20일 (목)",
                "date": "2025-03-20",
                "self_study_teacher": {
                    "7th_teacher": "장현정/75",
                    "8th_teacher": "장현정/75",
                    "10th_teacher": "장현정/75"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "이경숙/70",
                    "8th_teacher": "이경숙/70",
                    "10th_teacher": "이경숙/70"
                },
                "night_teacher": "이경숙/70"
            },
            {
                "week": "3월 5주차",
                "day": "3월 24일 (월)",
                "date": "2025-03-24",
                "self_study_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": "김상화/57",
                    "10th_teacher": "김상화/57"
                },
                "leave_seat_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": "전지영/76",
                    "10th_teacher": "전지영/76"
                },
                "night_teacher": "안정은/68"
            },
            {
                "week": "3월 5주차",
                "day": "3월 25일 (화)",
                "date": "2025-03-25",
                "self_study_teacher": {
                    "7th_teacher": "최병준/83",
                    "8th_teacher": "최병준/83",
                    "10th_teacher": "최병준/83"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "정유진/77",
                    "8th_teacher": "정유진/77",
                    "10th_teacher": "정유진/77"
                },
                "night_teacher": "박소영/61"
            },
            {
                "week": "3월 5주차",
                "day": "3월 26일 (수)",
                "date": "2025-03-26",
                "self_study_teacher": {
                    "7th_teacher": "허혜진/84",
                    "8th_teacher": "허혜진/84",
                    "10th_teacher": "허혜진/84"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "장나영/74",
                    "8th_teacher": "장나영/74",
                    "10th_teacher": "장나영/74"
                },
                "night_teacher": "이나영/71"
            },
            {
                "week": "3월 5주차",
                "day": "3월 27일 (목)",
                "date": "2025-03-27",
                "self_study_teacher": {
                    "7th_teacher": "유근찬/69",
                    "8th_teacher": "유근찬/69",
                    "10th_teacher": "유근찬/69"
                },
                "leave_seat_teacher": {
                    "7th_teacher": "박제현/63",
                    "8th_teacher": "박제현/63",
                    "10th_teacher": "박제현/63"
                },
                "night_teacher": "최병준/83"
            },
            {
                "week": "3월 6주차",
                "day": "3월 31일 (월)",
                "date": "2025-03-31",
                "self_study_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": "안정은/68",
                    "10th_teacher": "안정은/68"
                },
                "leave_seat_teacher": {
                    "7th_teacher": null,
                    "8th_teacher": "박건우/59",
                    "10th_teacher": "박건우/59"
                },
                "night_teacher": "박지혜/64"
            }
        ]
    }
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
            self_study: {
                "7th_teacher": parseInt(dayData.self_study_teacher["7th_teacher"]?.split("/")[1]),
                "8th_teacher": parseInt(dayData.self_study_teacher["8th_teacher"]?.split("/")[1]),
                "10th_teacher": parseInt(dayData.self_study_teacher["10th_teacher"]?.split("/")[1])
            },
            leave_seat: {
                "7th_teacher": parseInt(dayData.leave_seat_teacher["7th_teacher"]?.split("/")[1]),
                "8th_teacher": parseInt(dayData.leave_seat_teacher["8th_teacher"]?.split("/")[1]),
                "10th_teacher": parseInt(dayData.leave_seat_teacher["10th_teacher"]?.split("/")[1])
            },
            night_teacher: parseInt(dayData.night_teacher?.split("/")[1])
        }));

        saveAssignment(changedData);
        setIsEditing(false);
        queryClient.refetchQueries(['getRanking', order, teacher]);
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
            {/* {isLoading && <Loading />} */}
            <Header />
            <S.MainWrap>
                {Object.values(dropdownOpen).some(status => status) && (
                    <S.Black onClick={() => setDropdownOpen({})} />
                )}
                <S.Drawer $open={isDrawerOpen}>
                    <S.DrawerHeader>
                        <S.Title>
                            <h3>자습감독 횟수</h3>
                            <img src={X} alt={"x"} onClick={() => setIsDrawerOpen(false)} />
                        </S.Title>
                        <S.DrawerHeaderTop>
                            <InputBox up={75} target={"선생님"} value={teacher} change={setTeacher}></InputBox>
                            <div>
                                <S.Order $order={order === "ASC"} onClick={() => setOrder("ASC")}>오름차순</S.Order>
                                <S.Order $order={order === "DESC"} onClick={() => setOrder("DESC")}>내림차순</S.Order>
                            </div>
                        </S.DrawerHeaderTop>
                        <S.Menu>
                            <S.MenuBox $width={50}>순위</S.MenuBox>
                            <S.MenuBox $width={70}>이름</S.MenuBox>
                            <S.MenuBox $width={60}>자습</S.MenuBox>
                            <S.MenuBox $width={60}>이석</S.MenuBox>
                            <S.MenuBox $width={60}>야간</S.MenuBox>
                            <S.MenuBox $width={35}>합계</S.MenuBox>
                        </S.Menu>
                    </S.DrawerHeader>
                    <S.DrawerContent>
                        {Ranking && Ranking.map((item, idx) => {
                            return (
                                <S.TeacherBox key={item.teacher_id}>
                                    <S.MenuBox $width={50}>{item.rank}위</S.MenuBox>
                                    <S.MenuBox $width={70}>{item.name}</S.MenuBox>
                                    <S.MenuBox $width={60}>{item.SELF_STUDY_COUNT}회</S.MenuBox>
                                    <S.MenuBox $width={60}>{item.LEAVE_SEAT_COUNT}회</S.MenuBox>
                                    <S.MenuBox $width={60}>{item.NIGHT_COUNT}회</S.MenuBox>
                                    <S.MenuBox $width={35}>{item.total}회</S.MenuBox>
                                </S.TeacherBox>
                            )
                        })}
                    </S.DrawerContent>
                </S.Drawer>
                <S.MainHeader>
                    {Object.values(dropdownOpen).some(status => status) && (
                        <S.Black onClick={() => setDropdownOpen({})} />
                    )}
                    <h1>자습감독 일정</h1>
                    {!isEditing ? (
                        <S.Buttons>
                            <SquareBtn name="돌아가기" status={true} On={() => { navigate(-1) }} />
                            <SquareBtn name="자습감독수정" status={true} On={() => { setIsEditing(true) }} />
                            <SquareBtn name="자습감독생성" status={true} On={() => { setIsModalOpen(true) }} />
                        </S.Buttons>
                    ) : (
                        <S.Buttons>
                            <SquareBtn name="자습감독횟수" status={true} On={() => setIsDrawerOpen(!isDrawerOpen)} />
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
                                    <div>역할</div>
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
                                                        <div>할수</div>
                                                        <div>잇다</div>
                                                    </S.TableRightHeader>
                                                    <div style={{ visibility: "hidden" }}></div>
                                                    {["8th_teacher", "10th_teacher"].map((_, idx) => (
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
                                                    {/* <S.TeacherList>
                                                        <div>
                                                            {isEditing ? (
                                                                <SearchDropdown
                                                                    target="선생님"
                                                                    name={selectedTeacher[`${dayData.date}-common_teacher-7th_teacher`]?.name || dayData["7th_teacher"] ? dayData["7th_teacher"].split("/")[0] : "X"}
                                                                    axios={(event) => searchTeacher(event)}
                                                                    isOpen={dropdownOpen[`${dayData.date}-common_teacher-7th_teacher-left`] || false}
                                                                    change={(value) => handleTeacherChange(dayData.date, "common_teacher", "7th_teacher", value)}
                                                                    click={() => toggleDropdown(`${dayData.date}-common_teacher-7th_teacher-left`)}
                                                                />
                                                            ) : (
                                                                <S.TeacherName>
                                                                    {dayData["7th_teacher"] ? dayData["7th_teacher"].split("/")[0] : "X"}
                                                                </S.TeacherName>
                                                            )}
                                                        </div>
                                                        <div>
                                                            {isEditing ? (
                                                                <SearchDropdown
                                                                    target="선생님"
                                                                    name={selectedTeacher[`${dayData.date}-common_teacher-7th_teacher`]?.name || dayData["7th_teacher"] ? dayData["7th_teacher"].split("/")[0] : "X"}
                                                                    axios={(event) => searchTeacher(event)}
                                                                    isOpen={dropdownOpen[`${dayData.date}-common_teacher-7th_teacher-right`] || false}
                                                                    change={(value) => handleTeacherChange(dayData.date, "common_teacher", "7th_teacher", value)}
                                                                    click={() => toggleDropdown(`${dayData.date}-common_teacher-7th_teacher-right`)}
                                                                />
                                                            ) : (
                                                                <S.TeacherName>
                                                                    {dayData["7th_teacher"] ? dayData["7th_teacher"].split("/")[0] : "X"}
                                                                </S.TeacherName>
                                                            )}
                                                        </div>
                                                    </S.TeacherList> */}
                                                    {["7th_teacher" ,"8th_teacher", "10th_teacher"].map((timeKey, timeIndex) => (
                                                        <S.TeacherList key={timeIndex}>
                                                            {["self_study_teacher", "leave_seat_teacher"].map((typeKey, typeIndex) => {
                                                                const teacherName = dayData[typeKey]?.[timeKey] ? dayData[typeKey][timeKey].split("/")[0] : "X";
                                                                const uniqueKey = `${dayData.date}-${typeKey}-${timeKey}`;

                                                                return (
                                                                    <div key={typeIndex}>
                                                                        {isEditing ? (
                                                                            <SearchDropdown
                                                                                target="선생님"
                                                                                name={selectedTeacher[uniqueKey]?.name || teacherName}
                                                                                axios={(event) => searchTeacher(event)}
                                                                                isOpen={dropdownOpen[uniqueKey] || false}
                                                                                change={(value) => handleTeacherChange(dayData.date, typeKey, timeKey, value)}
                                                                                click={() => toggleDropdown(uniqueKey)}
                                                                                left={typeIndex === 2 && dayData.day.slice(-3) === "(목)" ? -800 : null}
                                                                                isNull={true}
                                                                            />
                                                                        ) : (
                                                                            <S.TeacherName>{teacherName}</S.TeacherName>
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </S.TeacherList>
                                                    ))}
                                                    <S.TeacherList>
                                                        <div>
                                                            {isEditing ? (
                                                                <SearchDropdown
                                                                    target="선생님"
                                                                    name={selectedTeacher[`${dayData.date}-common_teacher-night_teacher`]?.name || dayData["night_teacher"] ? dayData["night_teacher"].split("/")[0] : "X"}
                                                                    axios={(event) => searchTeacher(event)}
                                                                    isOpen={dropdownOpen[`${dayData.date}-common_teacher-night_teacher-left`] || false}
                                                                    change={(value) => handleTeacherChange(dayData.date, "common_teacher", "night_teacher", value)}
                                                                    click={() => toggleDropdown(`${dayData.date}-common_teacher-night_teacher-left`)}
                                                                    isNull={true}
                                                                />
                                                            ) : (
                                                                <S.TeacherName>
                                                                    {dayData["night_teacher"] ? dayData["night_teacher"].split("/")[0] : "X"}
                                                                </S.TeacherName>
                                                            )}
                                                        </div>
                                                        <div>
                                                            {isEditing ? (
                                                                <SearchDropdown
                                                                    target="선생님"
                                                                    name={selectedTeacher[`${dayData.date}-common_teacher-night_teacher`]?.name || dayData["night_teacher"] ? dayData["night_teacher"].split("/")[0] : "X"}
                                                                    axios={(event) => searchTeacher(event)}
                                                                    isOpen={dropdownOpen[`${dayData.date}-common_teacher-night_teacher-right`] || false}
                                                                    change={(value) => handleTeacherChange(dayData.date, "common_teacher", "night_teacher", value)}
                                                                    click={() => toggleDropdown(`${dayData.date}-common_teacher-night_teacher-right`)}
                                                                    isNull={true}
                                                                />
                                                            ) : (
                                                                <S.TeacherName>
                                                                    {dayData["night_teacher"] ? dayData["night_teacher"].split("/")[0] : "X"}
                                                                </S.TeacherName>
                                                            )}
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
                {isModalOpen && (
                    <S.ModalOverlay onClick={() => { setIsModalOpen(false) }}>
                        <S.Modal onClick={(e) => { e.stopPropagation() }}>
                            <SupervisionCreateModal closeModal={() => { setIsModalOpen(false) }} />
                        </S.Modal>
                    </S.ModalOverlay>
                )}
            </S.MainWrap>
        </S.Wrapper>
    );
}
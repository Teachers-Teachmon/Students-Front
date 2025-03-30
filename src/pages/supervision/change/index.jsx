import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import ConfirmBtn from '../../../components/button/confirm/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Rotate from '../../../assets/rotate.svg';
import { useGetMonthlySupervision, useGetFixedTeachers, useSendChangeRequest } from '../../../hooks/useChange.js';
import LeftBlueButton from '../../../assets/LeftBlueButton.svg';
import RightBlueButton from '../../../assets/RightBlueButton.svg';
import LeftEmptyGrayButton from '../../../assets/LeftEmptyGrayButton.svg';
import RightEmptyGrayButton from '../../../assets/RightEmptyGrayButton.svg';

export default function SupervisionChange() {
    let navigate = useNavigate();

    const [exchangeReason, setExchangeReason] = useState("");
    const [selectedTeacher, setSelectedTeacher] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSelfSelected, setIsSelfSelected] = useState(false);
    const [disabledTeachers, setDisabledTeachers] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedType, setselectedType] = useState();
    const [selectedPeriod, setSelectedPeriod] = useState("");
    const [weeks, setWeeks] = useState([]);
    const { data: TeacherList = { data: [] }, isLoading, isError } = useGetMonthlySupervision(currentMonth);
    const { data: fixedTeacherList, isLoading: isLoadingFixed, isError: isErrorFixed } = useGetFixedTeachers(selectedDay, selectedType, selectedPeriod);
    const { mutate: sendChangeRequest } = useSendChangeRequest();

    const convertPeriod = (periodKey) => {
        if (periodKey.includes("7th")) return "SEVEN_PERIOD";
        if (periodKey.includes("8th")) return "EIGHT_AND_NINE_PERIOD";
        if (periodKey.includes("10th")) return "TEN_AND_ELEVEN_PERIOD";
        if (periodKey.includes("night")) return "NIGHT_PERIOD";
        return "";
    };
    const convertPeriodKorean = (periodKey) => {
        if (periodKey === "7교시") return "7th_teacher";
        if (periodKey === "8~9교시") return "8th_teacher";
        if (periodKey === "10~11교시") return "10th_teacher";
        return "";
    };

    useEffect(() => {
        if (isSelfSelected && fixedTeacherList) {
            const disabledKeys = fixedTeacherList.map(item => {
                return `${item.date}-${item.type}-${convertPeriodKorean(item.period)}`;
            });
            setDisabledTeachers(disabledKeys);
        }
    }, [isSelfSelected, fixedTeacherList]);
    useEffect(() => {
        if (TeacherList?.data && JSON.stringify(weeks) !== JSON.stringify(TeacherList.data)) {
            setWeeks(TeacherList.data);
        }
    }, [TeacherList]);

    const handleSelectTeacher = (uniqueKey, teacherId, isSelf, teacherName) => {
        if (teacherName === "X") {
            alert("미배정된 선생님과 교체할 수 없습니다.");
            return;
        }

        const isAlreadySelected = selectedTeacher.some(item => item.uniqueKey === uniqueKey);
        if (isAlreadySelected) {
            if (isSelf) setIsSelfSelected(false);
            setSelectedTeacher(prev => prev.filter(item => item.uniqueKey !== uniqueKey));
            return;
        }

        if (isSelf && selectedTeacher.some(item => item.teacherId === teacherId)) {
            alert("자신과 교체할 수 없습니다.");
            return;
        }

        if (isSelf) {
            setIsSelfSelected(true);
            const parts = uniqueKey.split('-');
            setSelectedDay(parts.slice(3).join('-'));
            const typeKey = parts[1];
            const type =
                typeKey === "self_study_teacher"
                    ? "SELF_STUDY_SUPERVISION"
                    : typeKey === "leave_seat_teacher"
                        ? "LEAVE_SEAT_SUPERVISION"
                        : typeKey === "night_teacher"
                            ? "NIGHT_SUPERVISION"
                            : "COMMON_SUPERVISION";
            setselectedType(type);
            setSelectedPeriod(convertPeriod(parts[2]));
            setSelectedTeacher(prev => [...prev, { uniqueKey, teacherId, teacherName }]);
            return;
        }

        setSelectedTeacher(prev => {
            const updated = [...prev, { uniqueKey, teacherId, teacherName }];
            if (updated.length === 2) {
                setIsModalOpen(true);
            }
            return updated;
        });
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
    const handleNextMonth = () => {
        if (currentMonth < 12) {
            const nextMonth = currentMonth + 1;
            setCurrentMonth(nextMonth);
        }
    };
    const handlePrevMonth = () => {
        if (currentMonth > 1) {
            const prevMonth = currentMonth - 1;
            setCurrentMonth(prevMonth);
        }
    };

    const allData = TeacherList?.data || [];
    const groupedWeeks = groupByWeek(allData);

    const handleSendRequest = () => {
        if (selectedTeacher.length !== 2) {
            alert("교체할 선생님을 두 명 선택해주세요.");
            return;
        }

        const sender = selectedTeacher[0];
        const recipient = selectedTeacher[1];
        const senderInfo = sender.uniqueKey.split("-");
        const recipientInfo = recipient.uniqueKey.split("-");

        const requestBody = {
            sender: {
                teacher_id: sender.teacherId,
                day: `${senderInfo[3]}-${senderInfo[4]}-${senderInfo[5]}`,
                period: convertPeriod(senderInfo[2]),
                type: senderInfo[1] === "self_study_teacher" ? "SELF_STUDY_SUPERVISION" : senderInfo[1] === "leave_seat_teacher" ? "LEAVE_SEAT_SUPERVISION" : senderInfo[1] === "night_teacher" ? "NIGHT_SUPERVISION" : "COMMON_SUPERVISION"
            },
            recipient: {
                teacher_id: recipient.teacherId,
                day: `${recipientInfo[3]}-${recipientInfo[4]}-${recipientInfo[5]}`,
                period: convertPeriod(recipientInfo[2]),
                type: recipientInfo[1] === "self_study_teacher" ? "SELF_STUDY_SUPERVISION" : recipientInfo[1] === "leave_seat_teacher" ? "LEAVE_SEAT_SUPERVISION" : recipientInfo[1] === "night_teacher" ? "NIGHT_SUPERVISION" : "COMMON_SUPERVISION"
            },
            cause: exchangeReason || "사유 없음"
        };

        sendChangeRequest(requestBody, {
            onSuccess: () => {
                alert("교체 요청이 성공적으로 전송되었습니다.");
                setIsModalOpen(false);
                setSelectedTeacher([]);
            },
            onError: (err) => {
                alert("교체 요청 전송 실패: " + err);
            }
        });
    };

    const convertType = (type) => {
        if (type === "self_study_teacher") return "SELF_STUDY_SUPERVISION";
        if (type === "leave_seat_teacher") return "LEAVE_SEAT_SUPERVISION";
        if (type === "night_teacher") return "NIGHT_SUPERVISION";
        if (type === "common_teacher") return "COMMON_SUPERVISION";
    }

    return (
        <S.Wrapper>
            <Header />
            <S.MainWrap>
                <S.NavButton onClick={handlePrevMonth}><img src={currentMonth === 1 ? LeftEmptyGrayButton : LeftBlueButton} /></S.NavButton>
                <S.MainContent>
                    <S.MainHeader>
                        <h1>자습감독 교체요청 <S.Warning>* 바꾸고 싶은 자신의 시간을 선택해 주세요.</S.Warning></h1>
                        <SquareBtn name="돌아가기" status={true} On={() => { navigate(-1) }} />
                    </S.MainHeader>
                    <S.TableWrap>
                        {groupedWeeks && Object.entries(groupedWeeks).map(([weekName, dayArray], wIndex) => (
                            <S.Table key={weekName}>
                                <h2>{weekName}</h2>
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
                                        {dayArray.map((dayData, dayIndex) => (
                                            <S.TableRightContent key={dayIndex} $isEmpty={dayData.empty}>
                                                {dayData.empty ? (
                                                    <span style={{ visibility: "hidden" }}>
                                                        <h3>{dayData.day || "날짜 없음"}</h3>
                                                        <S.TableRightHeader>
                                                            <div>자습</div>
                                                            <div>이석</div>
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
                                                        <h3>{dayData.day}</h3>
                                                        <S.TableRightHeader>
                                                            <div>자습</div>
                                                            <div>이석</div>
                                                        </S.TableRightHeader>
                                                        <S.TeacherList>
                                                            {['7th_teacher', '8th_teacher', '10th_teacher'].map((classKey) =>
                                                                ['self_study_teacher', 'leave_seat_teacher'].map((typeKey) => {
                                                                    if (dayData.empty) return <div key={`${dayData.day}-${typeKey}`} style={{ visibility: "hidden" }} />;

                                                                    const teacherInfo = dayData?.[typeKey]?.[classKey];
                                                                    const teacherName = teacherInfo ? teacherInfo.split('/')[0] : "X";
                                                                    const uniqueKey = `${dayData.day}-${typeKey}-${classKey}-${dayData.date}`;
                                                                    const compareKey = `${uniqueKey.slice(-10)}-${convertType(uniqueKey.split('-')[1])}-${uniqueKey.split('-')[2]}`;
                                                                    const isPastDay = new Date(dayData.date) < new Date();

                                                                    return (
                                                                        <div
                                                                            key={uniqueKey}
                                                                            onClick={() => {
                                                                                if (isPastDay) return;
                                                                                if (teacherInfo && teacherInfo.includes('/me')) {
                                                                                    handleSelectTeacher(uniqueKey, teacherInfo ? parseInt(teacherInfo.split('/')[1]) || null : null, true, teacherName);
                                                                                } else {
                                                                                    if (!isSelfSelected) return;
                                                                                    handleSelectTeacher(uniqueKey, teacherInfo ? parseInt(teacherInfo.split('/')[1]) || null : null, false, teacherName);
                                                                                }
                                                                            }}
                                                                            style={{
                                                                                backgroundColor: selectedTeacher.some(t => t.uniqueKey === uniqueKey) ? '#2E6FF2' : '#FFF',
                                                                                color: selectedTeacher.some(t => t.uniqueKey === uniqueKey) ? '#FFF' : '#000',
                                                                                cursor: (!isSelfSelected && !(teacherInfo && teacherInfo.includes('/me'))) || isPastDay ? 'not-allowed' : 'pointer',
                                                                                opacity: (disabledTeachers.includes(compareKey) || (!isSelfSelected && !(teacherInfo && teacherInfo.includes('/me')))) || isPastDay ? 0.5 : 1
                                                                            }}
                                                                        >
                                                                            {teacherName}
                                                                        </div>
                                                                    );
                                                                })
                                                            )}
                                                            {['night_teacher'].map((classKey) => ['night_teacher'].map((typeKey) => {
                                                                if (dayData.empty) return <div key={`${dayData.day}-${typeKey}`} style={{ visibility: "hidden" }} />;

                                                                const teacherInfo = dayData[classKey];
                                                                const teacherName = teacherInfo ? teacherInfo.split('/')[0] : "X";
                                                                const uniqueKey = `${dayData.day}-${typeKey}-${classKey}-${dayData.date}`;
                                                                const compareKey = `${uniqueKey.slice(-10)}-${convertType(uniqueKey.split('-')[1])}-${uniqueKey.split('-')[2]}`;
                                                                const isPastDay = new Date(dayData.date) < new Date();

                                                                return (
                                                                    <>
                                                                        <div
                                                                            key={uniqueKey}
                                                                            onClick={() => {
                                                                                if (isPastDay) return;
                                                                                if (teacherInfo && teacherInfo.includes('/me')) {
                                                                                    handleSelectTeacher(uniqueKey, teacherInfo ? parseInt(teacherInfo.split('/')[1]) || null : null, true, teacherName);
                                                                                } else {
                                                                                    if (!isSelfSelected) return;
                                                                                    handleSelectTeacher(uniqueKey, teacherInfo ? parseInt(teacherInfo.split('/')[1]) || null : null, false, teacherName);
                                                                                }
                                                                            }}
                                                                            style={{
                                                                                backgroundColor: selectedTeacher.some(t => t.uniqueKey === uniqueKey) ? '#2E6FF2' : '#FFF',
                                                                                color: selectedTeacher.some(t => t.uniqueKey === uniqueKey) ? '#FFF' : '#000',
                                                                                cursor: (!isSelfSelected && !(teacherInfo && teacherInfo.includes('/me'))) || isPastDay ? 'not-allowed' : 'pointer',
                                                                                opacity: (disabledTeachers.includes(compareKey) || (!isSelfSelected && !(teacherInfo && teacherInfo.includes('/me')))) || isPastDay ? 0.5 : 1
                                                                            }}
                                                                        >
                                                                            {teacherName}
                                                                        </div>
                                                                        <div
                                                                            key={`${uniqueKey}-under`}
                                                                            onClick={() => {
                                                                                if (isPastDay) return;
                                                                                if (teacherInfo && teacherInfo.includes('/me')) {
                                                                                    handleSelectTeacher(uniqueKey, teacherInfo ? parseInt(teacherInfo.split('/')[1]) || null : null, true, teacherName);
                                                                                } else {
                                                                                    if (!isSelfSelected) return;
                                                                                    handleSelectTeacher(uniqueKey, teacherInfo ? parseInt(teacherInfo.split('/')[1]) || null : null, false, teacherName);
                                                                                }
                                                                            }}
                                                                            style={{
                                                                                backgroundColor: selectedTeacher.some(t => t.uniqueKey === uniqueKey) ? '#2E6FF2' : '#FFF',
                                                                                color: selectedTeacher.some(t => t.uniqueKey === uniqueKey) ? '#FFF' : '#000',
                                                                                cursor: (!isSelfSelected && !(teacherInfo && teacherInfo.includes('/me'))) || isPastDay ? 'not-allowed' : 'pointer',
                                                                                opacity: (disabledTeachers.includes(compareKey) || (!isSelfSelected && !(teacherInfo && teacherInfo.includes('/me')))) || isPastDay ? 0.5 : 1
                                                                            }}
                                                                        >
                                                                            {teacherName}
                                                                        </div>
                                                                    </>
                                                                )
                                                            }))}
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
                </S.MainContent>
                <S.NavButton onClick={handleNextMonth}><img src={currentMonth === 12 ? RightEmptyGrayButton : RightBlueButton} /></S.NavButton>
            </S.MainWrap>

            {isModalOpen && (
                <S.ModalOverlay onClick={() => { setIsModalOpen(false); setSelectedTeacher([]); setIsSelfSelected(false); setDisabledTeachers([]); }}>
                    <S.Modal onClick={(e) => { e.stopPropagation() }}>
                        <h2>교체요청을 보내시겠습니까?</h2>
                        <S.ExchangeInfo>
                            <div>
                                <span>{selectedTeacher[0].uniqueKey.split('-')[0]}</span>
                                <p>{selectedTeacher[0].uniqueKey.split('-')[2].includes('7th') ? '7교시' : selectedTeacher[0].uniqueKey.split('-')[2].includes('8th') ? '8~9교시' : selectedTeacher[0].uniqueKey.split('-')[2].includes('10th') ? '10~11교시' : "야간"}</p>
                                <p>{selectedTeacher[0].uniqueKey.split('-')[1].includes('self') ? '자습' : selectedTeacher[0].uniqueKey.split('-')[1].includes('leave') ? '이석' : selectedTeacher[0].uniqueKey.split('-')[1].includes('night') ? "야간" : "공통"}</p>
                                <p>{selectedTeacher[0].teacherName ? `${selectedTeacher[0].teacherName}선생님` : "이름 없음"}</p>
                            </div>
                            <S.Arrow><img src={Rotate} /></S.Arrow>
                            <div>
                                <span>{selectedTeacher[1].uniqueKey.split('-')[0]}</span>
                                <p>{selectedTeacher[1].uniqueKey.split('-')[2].includes('7th') ? '7교시' : selectedTeacher[1].uniqueKey.split('-')[2].includes('8th') ? '8~9교시' : selectedTeacher[1].uniqueKey.split('-')[2].includes('10th') ? '10~11교시' : "야간"}</p>
                                <p>{selectedTeacher[1].uniqueKey.split('-')[1].includes('self') ? '자습' : selectedTeacher[1].uniqueKey.split('-')[1].includes('leave') ? '이석' : selectedTeacher[0].uniqueKey.split('-')[1].includes('night') ? "야간" : "공통"}</p>
                                <p>{selectedTeacher[1].teacherName ? `${selectedTeacher[1].teacherName}선생님` : "이름 없음"}</p>
                            </div>
                        </S.ExchangeInfo>
                        <textarea value={exchangeReason} onChange={(e) => setExchangeReason(e.target.value)} placeholder="사유를 입력해 주세요"></textarea>
                        <S.ModalButtons>
                            <ConfirmBtn text="취소" color="red" image="reject" onClick={() => { setIsModalOpen(false); setSelectedTeacher([]); setIsSelfSelected(false); setDisabledTeachers([]); }} />
                            <ConfirmBtn text="전송" color="blue" image="fly" onClick={handleSendRequest} />
                        </S.ModalButtons>
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Wrapper>
    );
}
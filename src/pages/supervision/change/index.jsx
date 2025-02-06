import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import ConfirmBtn from '../../../components/button/confirm/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Rotate from '../../../assets/rotate.svg';
import { useGetMonthlySupervision, useGetFixedTeachers, useSendChangeRequest } from '../../../hooks/useChange.js';

export default function SupervisionChange() {

    let navigate = useNavigate();

    const [exchangeReason, setExchangeReason] = useState("");
    const [selectedTeacher, setSelectedTeacher] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isSelfSelected, setIsSelfSelected] = useState(false);
    const [disabledTeachers, setDisabledTeachers] = useState([]);

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedGrade, setSelectedGrade] = useState();
    const [selectedPeriod, setSelectedPeriod] = useState("");

    const convertPeriod = (periodKey) => {
        if (periodKey.includes("7th")) return "SEVEN_PERIOD";
        if (periodKey.includes("8th")) return "EIGHT_AND_NINE_PERIOD";
        if (periodKey.includes("10th")) return "TEN_AND_ELEVEN_PERIOD";
        return "";
    };

    const convertPeriodKorean = (periodKey) => {
        if (periodKey === "7교시") return "7th_teacher";
        if (periodKey === "8~9교시") return "8th_teacher";
        if (periodKey === "10~11교시") return "10th_teacher";
        return "";
    }

    const { data: TeacherList = { data: [] }, isLoading, isError } = useGetMonthlySupervision(currentMonth);
    const { data: fixedTeacherList, isLoading: isLoadingFixed, isError: isErrorFixed } = useGetFixedTeachers(selectedDay, selectedGrade, selectedPeriod);
    useEffect(() => {
        if (isSelfSelected && fixedTeacherList) {
            const disabledKeys = fixedTeacherList.map(item => {
                return `${item.date}-${item.grade === 1 ? "first_grade" : item.grade === 2 ? "second_grade" : "third_grade"}-${convertPeriodKorean(item.period)}`;
            });
            setDisabledTeachers(disabledKeys);
        }
    }, [isSelfSelected, fixedTeacherList]);

    const { mutate: sendChangeRequest } = useSendChangeRequest();

    const [weeks, setWeeks] = useState([]);

    useEffect(() => {
        if (TeacherList?.data && JSON.stringify(weeks) !== JSON.stringify(TeacherList.data)) {
            setWeeks(TeacherList.data);
        }
    }, [TeacherList]);

    const handleSelectTeacher = (uniqueKey, teacherId, isSelf) => {
        if (isSelf) {
            if (!selectedTeacher.some(item => item.uniqueKey === uniqueKey)) {
                setIsSelfSelected(true);
                setSelectedDay(uniqueKey.split('-').slice(3).join('-'));
                setSelectedGrade(uniqueKey.split('-')[1] === "first_grade" ? 1 : uniqueKey.split('-')[1] === "second_grade" ? 2 : 3);
                setSelectedPeriod(convertPeriod(uniqueKey.split('-')[2]));
                setSelectedTeacher(prev => [...prev, { uniqueKey, teacherId }]);
            }
            return;
        }

        setSelectedTeacher((prev) => {
            const alreadySelected = prev.some(item => item.uniqueKey === uniqueKey);
            const updated = alreadySelected
                ? prev.filter(item => item.uniqueKey !== uniqueKey)
                : [...prev, { uniqueKey, teacherId }];

            if (updated.length === 2) {
                setIsModalOpen(true);
            }
            return updated;
        });
    };

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

    function groupByWeek(dataArray) {
        return dataArray.reduce((acc, item) => {
            const w = item.week;
            if (!acc[w]) acc[w] = [];
            acc[w].push(item);
            return acc;
        }, {});
    }

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
                grade: senderInfo[1] === "first_grade" ? 1 : senderInfo[1] === "second_grade" ? 2 : 3
            },
            recipient: {
                teacher_id: recipient.teacherId,
                day: `${recipientInfo[3]}-${recipientInfo[4]}-${recipientInfo[5]}`,
                period: convertPeriod(recipientInfo[2]),
                grade: recipientInfo[1] === "first_grade" ? 1 : recipientInfo[1] === "second_grade" ? 2 : 3
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
                        {groupedWeeks && Object.entries(groupedWeeks).map(([weekName, dayArray], wIndex) => (
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
                                                            const teacherInfo = dayData?.[gradeKey]?.[classKey];
                                                            const teacherName = teacherInfo ? teacherInfo.split('/')[0] : "미배정";
                                                            const uniqueKey = `${dayData.day}-${gradeKey}-${classKey}-${dayData.date}`;
                                                            const compareKey = `${uniqueKey.slice(-10)}-${uniqueKey.split('-')[1]}-${uniqueKey.split('-')[2]}`;

                                                            return (
                                                                <div
                                                                    key={uniqueKey}
                                                                    onClick={() => {
                                                                        if (!isSelfSelected) {
                                                                            if (!(teacherInfo && teacherInfo.includes('/me'))) return;
                                                                            handleSelectTeacher(uniqueKey, teacherInfo ? parseInt(teacherInfo.split('/')[1]) || null : null, true);
                                                                        } else {
                                                                            handleSelectTeacher(uniqueKey, teacherInfo ? parseInt(teacherInfo.split('/')[1]) || null : null, false);
                                                                        }
                                                                    }}
                                                                    style={{
                                                                        backgroundColor: selectedTeacher.some(t => t.uniqueKey === uniqueKey) ? '#2E6FF2' : '#FFF',
                                                                        color: selectedTeacher.some(t => t.uniqueKey === uniqueKey) ? '#FFF' : '#000',
                                                                        cursor: !isSelfSelected && !(teacherInfo && teacherInfo.includes('/me'))
                                                                            ? 'not-allowed'
                                                                            : 'pointer',
                                                                        opacity: (disabledTeachers.includes(compareKey) || (!isSelfSelected && !(teacherInfo && teacherInfo.includes('/me'))))
                                                                            ? 0.5
                                                                            : 1,
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
                                <span>{selectedTeacher[0].uniqueKey.split('-')[0]}</span>
                                <p>{selectedTeacher[0].uniqueKey.split('-')[2].includes('7th') ? '7교시' : selectedTeacher[0].uniqueKey.split('-')[2].includes('8th') ? '8~9교시' : '10~11교시'}</p>
                                <p>{selectedTeacher[0].uniqueKey.split('-')[1].includes('first') ? '1학년' : selectedTeacher[0].uniqueKey.split('-')[1].includes('second') ? '2학년' : '3학년'}</p>
                                <p>{selectedTeacher[0].teacherId ? `ID: ${selectedTeacher[0].teacherId}` : "ID 없음"}</p>
                            </div>
                            <S.Arrow><img src={Rotate} /></S.Arrow>
                            <div>
                                <span>{selectedTeacher[1].uniqueKey.split('-')[0]}</span>
                                <p>{selectedTeacher[1].uniqueKey.split('-')[2].includes('7th') ? '7교시' : selectedTeacher[1].uniqueKey.split('-')[2].includes('8th') ? '8~9교시' : '10~11교시'}</p>
                                <p>{selectedTeacher[1].uniqueKey.split('-')[1].includes('first') ? '1학년' : selectedTeacher[1].uniqueKey.split('-')[1].includes('second') ? '2학년' : '3학년'}</p>
                                <p>{selectedTeacher[1].teacherId ? `ID: ${selectedTeacher[1].teacherId}` : "ID 없음"}</p>
                            </div>
                        </S.ExchangeInfo>
                        <textarea value={exchangeReason} onChange={(e) => setExchangeReason(e.target.value)} placeholder="사유를 입력해 주세요"></textarea>
                        <S.ModalButtons>
                            <ConfirmBtn text="취소" color="red" image="reject" onClick={() => { setIsModalOpen(false); setSelectedTeacher([]); }} />
                            <ConfirmBtn text="전송" color="blue" image="fly" onClick={handleSendRequest} />
                        </S.ModalButtons>
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Wrapper>
    );
}
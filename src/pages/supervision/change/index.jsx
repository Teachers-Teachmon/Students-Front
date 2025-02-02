import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import ConfirmBtn from '../../../components/button/confirm/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Rotate from '../../../assets/rotate.svg';
import { useGetMonthlySupervision, useGetFixedTeachers, useSendChangeRequest } from '../../../hooks/useChange.js';

export default function SupervisionChange() {

    let navigate = useNavigate();

    const [exchangeReason, setExchangeReason] = useState("");
    const [selectedTeacher, setSelectedTeacher] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

    // const { data: TeacherList, isLoading, isError } = useGetMonthlySupervision(currentMonth);
    const { data: TeacherList = { data: [] }, isLoading, isError } = useGetMonthlySupervision(currentMonth);
    const { data: fixedTeacherList, isLoading: isLoadingFixed, isError: isErrorFixed } = useGetFixedTeachers();
    const { mutate: sendChangeRequest } = useSendChangeRequest();

    const [weeks, setWeeks] = useState([]);

    useEffect(() => {
        if (TeacherList?.data) {
            setWeeks(TeacherList.data);
        }
    }, [TeacherList]);


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

    const convertPeriod = (periodKey) => {
        if (periodKey.includes("7th")) return "SEVEN_PERIOD";
        if (periodKey.includes("8th")) return "EIGHT_AND_NINE_PERIOD";
        if (periodKey.includes("10th")) return "TEN_AND_ELEVEN_PERIOD";
        return "";
    };

    const handleSendRequest = () => {
        if (selectedTeacher.length !== 2) {
            alert("교체할 선생님을 두 명 선택해주세요.");
            return;
        }

        const senderInfo = selectedTeacher[0].split("-");
        const recipientInfo = selectedTeacher[1].split("-");

        const requestBody = {
            sender: {
                teacher_id: parseInt(senderInfo[3]),
                day: senderInfo[0],
                period: convertPeriod(senderInfo[2]),
                grade: senderInfo[1] === "first" ? 1 : senderInfo[1] === "second" ? 2 : 3
            },
            recipient: {
                teacher_id: parseInt(recipientInfo[3]),
                day: recipientInfo[0],
                period: convertPeriod(recipientInfo[2]),
                grade: recipientInfo[1] === "first" ? 1 : recipientInfo[1] === "second" ? 2 : 3
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
                                <p>{selectedTeacher[0].split('-')[2].includes('7th') ? '7교시' : selectedTeacher[0].split('-')[2].includes('8th') ? '8~9교시' : '10~11교시'}</p>
                                <p>{selectedTeacher[0].split('-')[1].includes('first') ? '1학년' : selectedTeacher[0].split('-')[1].includes('second') ? '2학년' : '3학년'}</p>
                                <p>{selectedTeacher[0]} 선생님</p>
                            </div>
                            <S.Arrow><img src={Rotate} /></S.Arrow>
                            <div>
                                <span>{selectedTeacher[1].split('-')[0]}</span>
                                <p>{selectedTeacher[1].split('-')[2].includes('7th') ? '7교시' : selectedTeacher[1].split('-')[2].includes('8th') ? '8~9교시' : '10~11교시'}</p>
                                <p>{selectedTeacher[1].split('-')[1].includes('first') ? '1학년' : selectedTeacher[1].split('-')[1].includes('second') ? '2학년' : '3학년'}</p>
                                <p>{selectedTeacher[1]} 선생님</p>
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
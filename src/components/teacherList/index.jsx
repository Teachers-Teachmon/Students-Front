import * as S from './style.jsx';

export default function TeacherList({ closeModal }) {

    let todayTeacher = [
        {
            "day": "2025년 1월 8일 (수)",
            "1학년": {
                "7th_teacher": "정유진",
                "8th_teacher": "최병준",
                "10th_teacher": "장나영"
            },
            "2학년": {
                "7th_teacher": "정유진",
                "8th_teacher": "최병준",
                "10th_teacher": "장나영"
            },
            "3학년": {
                "7th_teacher": "정유진",
                "8th_teacher": "최병준",
                "10th_teacher": "장나영"
            },
        }
    ];

    const handlePrevDay = () => {
        // 요청 보내서 값 불러오고 todayTeacher에 저장
        console.log('prev');
    };
    const handleNextDay = () => {
        // 요청 보내서 값 불러오고 todayTeacher에 저장
        console.log('next');
    };

    return (
        <S.Container>
            <S.HandleButton onClick={handlePrevDay}>{'<'}</S.HandleButton>
            <S.Wrapper>
                <S.Header>
                    <S.MainText>{todayTeacher[0].day}</S.MainText>
                    <S.CloseButton onClick={closeModal}>X</S.CloseButton>
                </S.Header>
                <S.Content>
                    {todayTeacher.map((data) => (
                        <S.Table key={data.day}>
                            <S.TeacherListTop>
                                <span></span>
                                <span>1학년</span>
                                <span>2학년</span>
                                <span>3학년</span>
                            </S.TeacherListTop>
                            <S.TeacherListContent>
                                <S.TeacherTable>
                                    <p>7교시</p>
                                    <p>{data['1학년']['7th_teacher']}</p>
                                    <p>{data['2학년']['7th_teacher']}</p>
                                    <p>{data['3학년']['7th_teacher']}</p>
                                </S.TeacherTable>
                                <S.TeacherTable>
                                    <p>8~9교시</p>
                                    <p>{data['1학년']['8th_teacher']}</p>
                                    <p>{data['2학년']['8th_teacher']}</p>
                                    <p>{data['3학년']['8th_teacher']}</p>
                                </S.TeacherTable>
                                <S.TeacherTable>
                                    <p>10~11교시</p>
                                    <p>{data['1학년']['10th_teacher']}</p>
                                    <p>{data['2학년']['10th_teacher']}</p>
                                    <p>{data['3학년']['10th_teacher']}</p>
                                </S.TeacherTable>
                            </S.TeacherListContent>
                        </S.Table>
                    ))}
                </S.Content>
            </S.Wrapper>
            <S.HandleButton onClick={handleNextDay}>{'>'}</S.HandleButton>
        </S.Container>
    )
}
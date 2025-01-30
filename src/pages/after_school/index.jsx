import * as S from './style.jsx'
import Header from '../../components/header/index.jsx'

export default function After_school() {

    const myTodayClasses = [
        {
            time: "8~9",
            grade: "1학년",
            name: "리액트",
            location: "객체지향 프로그래밍실"
        },
        {
            time: "10~11",
            grade: "1학년",
            name: "파이썬을 이용한 문제해결",
            location: "프로그래밍실"
        }
    ];

    return (
        <S.AfterSchoolContainer>
            <Header />
            <S.Content>
                <S.LeftContainer>
                    <S.TodayClasses>
                        <h1>나의 오늘 방과후</h1>
                        {myTodayClasses.map((cls, i) => (
                            <S.ClassCard key={i}>
                                <S.CardTime>{cls.time}</S.CardTime>
                                <div>{cls.grade}</div>
                                <S.CardData $length={190}>{cls.name}</S.CardData>
                                <S.CardData $length={150}>{cls.location}</S.CardData>
                            </S.ClassCard>
                        ))}
                    </S.TodayClasses>
                </S.LeftContainer>
            </S.Content>
        </S.AfterSchoolContainer>
    )
}
import * as S from './style.jsx';
import Header from '../../components/header/index.jsx';
import { useNavigate } from 'react-router-dom';

export default function Admin() {

  let navigate = useNavigate();

  const dayData = {
    "day": "2025년 1월 8일 (수)",
    "self_study_teacher": {
      "7th_teacher": "정유진/me",
      "8th_teacher": "최병준",
      "10th_teacher": "장나영"
    },
    "leave_seat_teacher": {
      "7th_teacher": "정유진/me",
      "8th_teacher": "최병준",
      "10th_teacher": "장나영"
    },
    "night_teacher": "정유진/me"
  }

  const periodGroups = [
    { period: "7교시", studyKey: "7th_teacher", leaveKey: "7th_teacher" },
    { period: "8~9교시", studyKey: "8th_teacher", leaveKey: "8th_teacher" },
    { period: "10~11교시", studyKey: "10th_teacher", leaveKey: "10th_teacher" }
  ];

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.AdminTop>
          <S.TodaySupervision>
            <S.TodaySupervisionTop>
              <h1>오늘의 자습감독 선생님</h1>
              <p onClick={() => { navigate('/admin/supervision') }}>자습감독 설정 ></p>
            </S.TodaySupervisionTop>
            <S.TodaySupervisionMain>
              <S.TodaySupervisionMainTop>
                <S.Top $length={18} >교시</S.Top>
                <S.Top $length={6} >자습</S.Top>
                <S.Top $length={3} >이석</S.Top>
              </S.TodaySupervisionMainTop>
              <S.SupervisionData>
                {[...periodGroups, { period: "야간", studyKey: "night_teacher", leaveKey: "night_teacher" }]
                  .map(({ period, studyKey, leaveKey }) => (
                    <S.Row key={period}>
                      <S.DataCell $length={19.5}>{period}</S.DataCell>
                      <S.DataCellSelf $length={6.5}>{(dayData.self_study_teacher?.[studyKey] || dayData[studyKey])?.replace("/me", "") || "-"}</S.DataCellSelf>
                      <S.DataCell $length={4}>{(dayData.leave_seat_teacher?.[leaveKey] || dayData[leaveKey])?.replace("/me", "") || "-"}</S.DataCell>
                    </S.Row>
                  ))}
              </S.SupervisionData>
          </S.TodaySupervisionMain>
        </S.TodaySupervision>
      </S.AdminTop>
    </S.Content>
    </S.Container >
  )
}
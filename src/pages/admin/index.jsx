import * as S from './style.jsx';
import Header from '../../components/header/index.jsx';
import { useNavigate } from 'react-router-dom';
import Left from '../../assets/left.svg';
import AfterSchoolClass from '../../assets/afterSchoolClass.svg';
import Student from '../../assets/student.svg';
import Teacher from '../../assets/teacher.svg';
import Supervision from '../../assets/supervision.svg';
import SelfStudy from '../../assets/selfStudy.svg';
import Left2 from '../../assets/left2.svg';
import { useState } from 'react';

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

  const supervisionTotal = [
    {
      "rank" : 1,
      "name" : "정유진",
      "count" : 36
    },
    {
      "name": "정유진",
      "teacher_id": 1,
      "SEVEN_PERIOD_COUNT": 2,
      "EIGHT_AND_ELEVEN_PERIOD_COUNT": 3,
      "NIGHT_COUNT": 3
    },
    {
      "name": "정유진",
      "teacher_id": 1,
      "SEVEN_PERIOD_COUNT": 2,
      "EIGHT_AND_ELEVEN_PERIOD_COUNT": 3,
      "NIGHT_COUNT": 3
    },
    {
      "name": "정유진",
      "teacher_id": 1,
      "SEVEN_PERIOD_COUNT": 2,
      "EIGHT_AND_ELEVEN_PERIOD_COUNT": 1,
      "NIGHT_COUNT": 3
    },
    {
      "name": "정유진",
      "teacher_id": 1,
      "SEVEN_PERIOD_COUNT": 2,
      "EIGHT_AND_ELEVEN_PERIOD_COUNT": 3,
      "NIGHT_COUNT": 3
    },
    {
      "name": "정유진",
      "teacher_id": 1,
      "SEVEN_PERIOD_COUNT": 2,
      "EIGHT_AND_ELEVEN_PERIOD_COUNT": 3,
      "NIGHT_COUNT": 3
    },
    {
      "name": "정유진",
      "teacher_id": 1,
      "SEVEN_PERIOD_COUNT": 2,
      "EIGHT_AND_ELEVEN_PERIOD_COUNT": 3,
      "NIGHT_COUNT": 3
    },
    {
      "name": "정유진",
      "teacher_id": 1,
      "SEVEN_PERIOD_COUNT": 2,
      "EIGHT_AND_ELEVEN_PERIOD_COUNT": 3,
      "NIGHT_COUNT": 3
    }
  ]

  const [leaveStudent, setLeaveStudent] = useState([
    {
      "weekday": "월",
      "leaveId": 2,
      "student": "1401 김동욱",
    },
    {
      "weekday": "월",
      "leaveId": 3,
      "student": "1401 김동욱",
    }
  ]);

  const handleDelete = (id) => {
    setLeaveStudent(leaveStudent.filter(student => student.leaveId !== id));
  };

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.AdminTop>
          <S.TodaySupervision>
            <S.TodaySupervisionTop>
              <h1>오늘의 자습감독 선생님</h1>
              <p onClick={() => { navigate('/admin/supervision') }}>자습감독 설정 <img src={Left} /></p>
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
                      <S.DataCellSelf $length={6.5}>{(dayData.self_study_teacher?.[studyKey] || dayData[studyKey])?.replace("/me", "")}</S.DataCellSelf>
                      <S.DataCell $length={4}>{(dayData.leave_seat_teacher?.[leaveKey] || dayData[leaveKey])?.replace("/me", "")}</S.DataCell>
                    </S.Row>
                  ))}
              </S.SupervisionData>
            </S.TodaySupervisionMain>
          </S.TodaySupervision>
          <S.AdminButtons>
            <S.AdminButtonsTop>
              <S.ClassEdit onClick={() => { navigate('/admin/after-school') }}>
                <S.AfterSchoolClass src={AfterSchoolClass} />
                <h3>방과후 설정</h3>
                <p>방과후 시간표 설정하기</p>
                <button><S.Left2Img src={Left2} /></button>
              </S.ClassEdit>
              <S.SelfStudyTime onClick={() => { navigate('/admin/self-study') }}>
                <S.SelfStudy src={SelfStudy} />
                <h3>자습시간</h3>
                <p>자습시간 설정하기</p>
                <button><S.Left2Img src={Left2} /></button>
              </S.SelfStudyTime>
              <S.SelfStudySupervision onClick={() => { navigate('/admin/supervision') }}>
                <S.Supervision src={Supervision} />
                <h3>자습감독 일정</h3>
                <p>자습감독 일정 설정하기</p>
                <button><S.Left2Img src={Left2} /></button>
              </S.SelfStudySupervision>
            </S.AdminButtonsTop>
            <S.AdminButtonsBottom>
              <S.StudentManage onClick={() => { navigate('/admin/student') }}>
                <S.Student src={Student} />
                <h3>학생 관리</h3>
                <p>학생 관리하기</p>
                <button><S.Left2Img src={Left2} /></button>
              </S.StudentManage>
              <S.TeacherManage onClick={() => { navigate('/admin/teacher') }}>
                <S.Teacher src={Teacher} />
                <h3>선생님 관리</h3>
                <p>선생님 관리하기</p>
                <button><S.Left2Img src={Left2} /></button>
              </S.TeacherManage>
            </S.AdminButtonsBottom>
          </S.AdminButtons>
        </S.AdminTop>
        <S.AdminBottom>
          <S.SupervisionTotal>
            <S.SupervisionTotalTop>
              <h2>자습감독 횟수</h2>
              <p onClick={() => { navigate('/admin/supervision') }}>자세히보기 <img src={Left} /></p>
            </S.SupervisionTotalTop>
            <S.SupervisionTotalMain>
              {supervisionTotal
                .map(teacher => ({
                  ...teacher,
                  total: teacher.SEVEN_PERIOD_COUNT + teacher.EIGHT_AND_ELEVEN_PERIOD_COUNT + teacher.NIGHT_COUNT,
                }))
                .sort((a, b) => b.total - a.total)
                .map((teacher, index) => (
                  <S.SupervisionTotalRow key={`${teacher.teacher_id}-${index}`} $isLast={index === 3 || index === 7} $isSecondRow={index >= 4}>
                    <S.SupervisionRank>{index + 1}위</S.SupervisionRank>
                    <S.SupervisionTeacher>{teacher.name}</S.SupervisionTeacher>
                    <S.SupervisionCount>{teacher.total}회</S.SupervisionCount>
                  </S.SupervisionTotalRow>
                ))}
            </S.SupervisionTotalMain>
          </S.SupervisionTotal>
          <S.LeaveStudent>
            <S.LeaveStudentTop>
              <h2>이번주 이탈학생</h2>
            </S.LeaveStudentTop>
            <S.LeaveStudentMain>
              {leaveStudent.map((student, index) => (
                <S.LeaveStudentRow key={student.leaveId}>
                  <S.LeaveStudentDate>{student.day} ({student.weekday})</S.LeaveStudentDate>
                  <S.LeaveStudentData>{student.student}</S.LeaveStudentData>
                  <S.Confirm onClick={() => handleDelete(student.leaveId)}>삭제</S.Confirm>
                </S.LeaveStudentRow>
              ))}
            </S.LeaveStudentMain>
          </S.LeaveStudent>
        </S.AdminBottom>
      </S.Content>
    </S.Container >
  )
}
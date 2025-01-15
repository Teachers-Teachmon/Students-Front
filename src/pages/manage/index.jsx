import * as S from './style.jsx'
import Header from '../../components/header/index.jsx'
import CircleBtn from "../../components/button/circle"
import SquareBtn from "../../components/button/square/index.jsx";
import dayjs from 'dayjs';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Record from "../../assets/record.svg";
import StudentGraph from '../../components/StudentGraph'
import Write from '../../components/modal/write';

export default function Manage(){
    const today = dayjs().format('YYYY-MM-DD dddd');
    const [day, setDay] = useState('');
    const navigate = useNavigate()
    const [grade, setGrade] = useState([
        true,false,false
    ]);

    // 렌더링시 오늘의 날짜를 계산해서 보여줌
    useEffect(() => {
        const pattern = /(\d{4}-\d{2}-\d{2})\s(\w+)/;
        const match = today.match(pattern);
        switch (match[2]) {
            case 'Monday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (월)`);
                break;
            case 'Tuesday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (화)`);
                break;
            case 'Wednesday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (수)`);
                break;
            case 'Thursday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (목)`);
                break;
            case 'Friday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (금)`);
                break;
            case 'Saturday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (토)`);
                break;
            case 'Sunday':
                setDay(`${today.slice(5, 7)}월 ${today.slice(8, 10)}일 (일)`);
                break;
        }
    }, []);
    const [isModal, setIsModal] = useState(false);

    // data 의 임시 데이터
    const data = [
        {id:1, name:'김동욱', status : '조퇴'},
        {id:2, name:'김동욱', status : '조퇴'},
        {id:3, name:'김동욱', status : '조퇴'},
        {id:4, name:'김동욱', status : '조퇴'},
        {id:5, name:'김동욱', status : '조퇴'},
        {id:6, name:'김동욱', status : '조퇴'},
        {id:7, name:'김동욱', status : '조퇴'},
        {id:8, name:'김동욱', status : '조퇴'},
        {id:9, name:'김동욱', status : '조퇴'},
        {id:10, name:'김동욱', status : '조퇴'},
        {id:11, name:'김동욱', status : '자습'},
        {id:12, name:'김동욱', status : '이석'},
        {id:13, name:'김동욱', status : '자습'},
        {id:14, name:'김동욱', status : '방과후'},
        {id:15, name:'김동욱', status : '자습'},
        {id:16, name:'김동욱', status : '조퇴'},
    ]

    // 이함수가 실행될때마다 학년이 바뀌고 그 데이터가 바뀌어야함
    const changeGrade = (idx) => {
        const newGrade = [false, false, false];
        newGrade[idx] = true;
        setGrade(newGrade);
    }
    return(
        <S.ManageContainer>
            <Header />
            <S.Wrap>
                <S.Info>
                    <h1>{day}</h1>
                    <S.InfoBtn>
                        <SquareBtn name={"학생위치"} status={true} On={()=>navigate('/')} />
                        <SquareBtn name={"이석작성"} status={true} On={()=>setIsModal(!isModal)} />
                    </S.InfoBtn>
                </S.Info>
                <S.Main>
                    <S.MainNav>
                        <S.MainBox>
                            <S.Grade>
                                <CircleBtn name={"1학년"} status={grade[0]} On={()=>changeGrade(0)} />
                                <CircleBtn name={"2학년"} status={grade[1]} On={()=>changeGrade(1)} />
                                <CircleBtn name={"3학년"} status={grade[2]} On={()=>changeGrade(2)} />
                            </S.Grade>
                            <S.Color>
                                <S.Colors>
                                    <S.Status>방과후 : </S.Status>
                                    <S.ColorBox color={"white"}></S.ColorBox>
                                </S.Colors>
                                <S.Colors>
                                    <S.Status>이석 : </S.Status>
                                    <S.ColorBox color={"#CCBCFF"}></S.ColorBox>
                                </S.Colors>
                                <S.Colors>
                                    <S.Status>조퇴 : </S.Status>
                                    <S.ColorBox color={"#FFDC93"}></S.ColorBox>
                                </S.Colors>
                                <S.Colors>
                                    <S.Status>이탈 : </S.Status>
                                    <S.ColorBox color={"#FF938C"}></S.ColorBox>
                                </S.Colors>
                                <S.Colors>
                                    <S.Status>자습 : </S.Status>
                                    <S.ColorBox color={"#72FAAA"}></S.ColorBox>
                                </S.Colors>
                            </S.Color>
                        </S.MainBox>
                        <S.Record onClick={()=>navigate('/')}>
                            <img src={Record} alt="" />
                            <p>기록</p>
                        </S.Record>
                    </S.MainNav>
                    <S.Section>
                        <StudentGraph data={data}/>
                        <StudentGraph data={data}/>
                        <StudentGraph data={data}/>
                        <StudentGraph data={[{id:1, name:'김동욱', status:'조퇴'}]}/>
                    </S.Section>
                </S.Main>
            </S.Wrap>
            {isModal ?
                <S.Black>
                    <Write isModal={isModal} setIsModal={setIsModal}/>
                </S.Black>
                :
                null
            }
        </S.ManageContainer>
    )
}
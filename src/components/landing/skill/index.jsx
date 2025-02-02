import * as S from './style.jsx';
import Skill1 from '../../../assets/skill1.svg';
import Skill2 from '../../../assets/skill2.svg';
import Skill3 from '../../../assets/skill3.svg';
import Skill4 from '../../../assets/skill4.svg';
import Down from '../../../assets/down.svg';
import Up from '../../../assets/up.svg';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Skill(){
    const navigate = useNavigate();
    const [skillShow, setSkillShow] = useState([
        false, false, false, false
    ]);
    const [skillHide, setSkillHide] = useState([
        false, false, false, false
    ])

    const [isImg, setIsImg] = useState(Skill1);
    // 클릭으로 활성화되어야할 요소가 바뀜 idx를 이용하여 활성화시킬 요소를 만듦
    const changeSkill = (idx) =>{
        const newSkill = [false, false, false, false];

        if(idx > 3){
            const hide = [false, false, false, false];
            hide[idx-4] = true;
            setSkillHide(hide);
            if(idx-4 === 0) setIsImg(Skill1);
            if(idx-4 === 1) setIsImg(Skill2);
            if(idx-4 === 2) setIsImg(Skill3);
            if(idx-4 === 3) setIsImg(Skill4);

            setTimeout(() => {
                const newSkill = [...skillShow];
                newSkill[idx - 4] = false;
                setSkillShow(newSkill);
                setSkillHide([false, false, false, false]);
            }, 300);
        }
        else {
            newSkill[idx] = true;
            setSkillShow(newSkill);
        }
    }
    const data = [
        {
            id:1,
            title:"자습감독 자동배정",
            content:'AI를 활용하여 선생님들의 일정과 학교 일정을 반영한 자습 감독 자동 배정 기능입니다. 필요한 경우, 자습 감독 관리 선생님께서 수동으로 수정할 수도 있습니다.',
            blueText:'자습감독 자동 배정하러 가기'
        },
        {
            id:2,
            title:"자습 관리",
            content:'기존 구글 시트의 낮은 가독성을 보완하기 위해 학교 도면을 활용하여 한눈에 보기 쉽게 구성되어 있습니다. 이를 통해 학생들의 이석 상태도 직관적으로 확인할 수 있습니다.',
            blueText:'자습감독 하러가기'
        },
        {
            id:3,
            title:"자습감독 알림",
            content:'선생님들께서는 매일 바쁜 일정을 소화하시느라 가끔 자습 감독을 잊으실 때가 있습니다. 이를 방지하기 위해 홈페이지에서 자습 감독까지의 남은 날짜와, 전날 에는 메시지로 알림을 보냅니다.',
            blueText:'자습감독 일정'
        },
        {
            id:4,
            title:"학생이석 관리",
            content:'기존 구글 시트에서는 이석 관리와 학생 관리 페이지가 분리되어 있어 확인 및 기록에 불편함이 있었습니다. 이를 개선하여, 학생 이석 관리 페이지에서 수정 하면 학생 관리 페이지에도 자동 반영되도록 구현하였습니다.',
            blueText:'학생이석 관리하기'
        },
    ]
    return(
        <>
            <S.UnBox />
            <S.Wrap>
                <S.Main>
                    {data.map((item, idx)=>{
                        if(!skillShow[idx]){
                            return(
                                <S.Section key={item.id} onClick={()=>changeSkill(idx)}>
                                    <p>{item.title}</p>
                                    <img src={Down} alt={'downIcon'} />
                                </S.Section>
                            )
                        }
                        else {
                            return(
                                <S.Dis key={item.id} $skill = {skillShow[idx]} $hide = {skillHide[idx]} onClick={()=>changeSkill(idx+4)}>
                                    <S.Name>
                                        <p>{item.title}</p>
                                        <img src={Up} alt={'upIcon'} />
                                    </S.Name>
                                    <p>{item.content}</p>
                                    <S.BlueText onClick={()=>navigate('/login')}>{item.blueText}</S.BlueText>
                                </S.Dis>
                            )}
                    })}
                </S.Main>
                <S.Img draggable="false" src={
                    skillShow[0] ? Skill1
                    : skillShow[1] ? Skill2
                    : skillShow[2] ? Skill3
                    : skillShow[3] ? Skill4
                     : isImg
                } alt={'skillImg'} />
            </S.Wrap>
        </>
    )
}
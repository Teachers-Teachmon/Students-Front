import * as S from './style.jsx';
import Role1 from '../../../assets/role1.svg';
import Role2 from '../../../assets/role2.svg';
import {useNavigate} from "react-router-dom";

export default function Role({isAnimation}){
    const navigate = useNavigate();
    return(
        <>
            <S.UnBox />
            <S.Wrap>
                <S.Section>
                    <S.Box>
                        <h2>자습 감독 관리 선생님</h2>
                        <S.TextBox>
                            <p>학교에서 자습 및 방과후를 1년간 담당하여 관리하시는 </p>
                            <p>선생님으로 각 날의 자습 감독 선생님을 배정하고 </p>
                            <p>학생, 자습 감독 선생님 전체를 확인 및 관리합니다.</p>
                        </S.TextBox>
                        <S.BlueText onClick={()=>navigate('/login')}>자습 감독 관리 하러 가기</S.BlueText>
                    </S.Box>
                    <S.Img draggable="false" $isAnimation={isAnimation} src={Role1} alt={'role1'} />
                </S.Section>
                <S.Section>
                    <S.Img draggable="false" $isAnimation={isAnimation} src={Role2} alt={'role1'} />
                    <S.Box>
                        <h2>자습 감독 선생님</h2>
                        <S.TextBox>
                            <p>자습 감독 날을 배정 받아 학교 방과후 학생이 자습을</p>
                            <p>잘하고 있는지 확인하고 기록하시는 선생님으로 학생들의 </p>
                            <p>상태를 점검하고 필요 사항등을 파악하며 적절한 대처를 합니다.</p>
                        </S.TextBox>
                        <S.BlueText onClick={()=>navigate('/login')}>자습 감독 하러 가기</S.BlueText>
                    </S.Box>
                </S.Section>
            </S.Wrap>
        </>
    )
}
import * as S from './style.jsx';
import Img from '../../../assets/main.svg'
import Logo from '../../../assets/teachmon.svg';
import SmallLogo from '../../../assets/small-logo.svg';
import Role from '../../../assets/role.svg';
import Skill from '../../../assets/skill.svg';
import Method from '../../../assets/method.svg';
import {useNavigate} from "react-router-dom";

export default function First(){
    const navigate = useNavigate()
    return(
        <>
            <S.UnBox />
            <S.Wrap>
                <S.Main>
                    <S.Section>
                        <S.Title>방과후 <S.BlueText> 자습감독</S.BlueText> 도우미 프로그램</S.Title>
                        <img draggable="false" src={Logo} alt={'logo'} width={360}/>
                        <S.Text>선생님들의 일을 보다 더 쉽게, 더 편리하게<br />자습감독의 일을 도와줍니다!</S.Text>
                        <S.Use onClick={()=>navigate('/login')}>사용하기</S.Use>
                    </S.Section>
                    <S.MainImg draggable="false" src={Img} alt={'mainIcon'}/>
                </S.Main>
                <S.Dis>
                    <S.Box>
                        <img draggable="false" src={SmallLogo} alt={'small-logo'} width={100} />
                        <h2>Teach Mon소개</h2>
                        <p>Teach Mon이 <S.BlueText>어떤 프로그램이고</S.BlueText><br /> <S.BlueText>무엇을 위해</S.BlueText> 만들어졌는지<br/>소개해드릴게요!</p>
                    </S.Box>
                    <S.Box>
                        <img draggable="false" src={Role} alt={'small-logo'} width={40} />
                        <h2>역할</h2>
                        <p>Teach Mon에는 <S.BlueText>2가지의 역할</S.BlueText>이 있어요. 어떤게 있는지 알아보아요</p>
                    </S.Box>
                    <S.Box>
                        <img src={Skill} alt={'small-logo'} width={40} />
                        <h2>기능소개</h2>
                        <p>Teach Mon에있는 <S.BlueText>주요기능</S.BlueText>에 대해서 소개해드릴게요!</p>
                    </S.Box>
                    <S.Box>
                        <img draggable="false" src={Method} alt={'small-logo'} width={40} />
                        <h2>사용방법</h2>
                        <p>Teach Mon의 기능들을 <S.BlueText>어떻게 사용</S.BlueText>하는지 알려드릴게요!</p>
                    </S.Box>
                </S.Dis>
            </S.Wrap>
        </>
    )
}
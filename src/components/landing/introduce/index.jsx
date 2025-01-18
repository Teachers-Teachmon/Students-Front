import * as S from './style.jsx';
import IntroduceImg from '../../../assets/introduce.svg';
import SmallLogo from '../../../assets/small-logo.svg';

export default function Introduce({isAnimation}) {

    return (
        <>
            <S.UnBox />
            <S.Wrap>
                <S.Main>
                    <img src={SmallLogo} alt={'small-logo'} width={150}/>
                    <h1>TeachMon 소개</h1>
                    <S.TagBox>
                        <S.Tag>개선</S.Tag>
                        <S.Tag>간단한 UI</S.Tag>
                        <S.Tag>편리</S.Tag>
                    </S.TagBox>
                    <S.TextBox>
                        <S.Text>Teach Mon은 학교 선생님들께서 자습감독을</S.Text>
                        <S.Text>보다 효율적이게 하실 수 있도록 돕고자 제작하게 되었습니다.</S.Text>
                        <S.Text>기존에 사용하던 <S.BlueText>구글시트의 불편했던 점</S.BlueText>들을 개선하여 전보다</S.Text>
                        <S.Text>보기 쉽고 편리하게 사용하실 수 있도록 제작하였습니다.</S.Text>
                    </S.TextBox>
                </S.Main>
                <S.Img $isAnimation={isAnimation} src={IntroduceImg} alt={'introduce'}/>
            </S.Wrap>
        </>
    )
}
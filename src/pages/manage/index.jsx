import * as S from './style.jsx'
import Header from '../../components/Header/index.jsx'
import CircleBtn from "../../components/button/circle"
import SquareBtn from "../../components/button/square/index.jsx";

export default function Manage(){
    return(
        <S.ManageContainer>
            <Header />
            <S.Wrap>
                <CircleBtn name={"1학년"} status={true}/>
                <SquareBtn name={"학생관리"} status={true} />
                <SquareBtn name={"취소"} status={false} />
            </S.Wrap>
        </S.ManageContainer>
    )
}
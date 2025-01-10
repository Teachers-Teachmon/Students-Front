import * as S from './style.jsx'
import Header from "../../components/header"
import CicleBtn from "../../components/button/circle"

export default function Manage(){
    return(
        <S.ManageContainer>
            <Header />
            <S.Wrap>
                <CicleBtn name={"1학년"} status={true}/>
            </S.Wrap>
        </S.ManageContainer>
    )
}
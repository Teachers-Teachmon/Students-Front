import * as S from './style.jsx'

export default function Student({ data, search }) {
    return (
        <S.StudentContainer>
            <S.Standard>
                <S.UnBox></S.UnBox>
                <S.Box $length={510}>학번/이름</S.Box>
                <S.Box $length={110}>8교시</S.Box>
                <S.Box $length={110}>9교시</S.Box>
                <S.Box $length={110}>10교시</S.Box>
                <S.Box $length={110}>11교시</S.Box>
            </S.Standard>


            {data.map((item) => {
                if(item.name.indexOf(search) > -1){
                    return(
                        <S.Content key={item.id}>
                            <S.UnBox></S.UnBox>
                            <S.Box2 $length={510}>{item.name}</S.Box2>
                            <S.Box2 $length={110}>
                                <S.Status color={"#FFF6E4"}>
                                    <S.Circle color={"#FF9000"}></S.Circle>
                                    <S.StatusText color={"#FF9000"}>조퇴</S.StatusText>
                                </S.Status>
                            </S.Box2>
                            <S.Box2 $length={110}>
                                <S.Status color={"#ECFDF3"}>
                                    <S.Circle color={"#14BA6D"}></S.Circle>
                                    <S.StatusText color={"#14BA6D"}>자습</S.StatusText>
                                </S.Status>
                            </S.Box2>
                            <S.Box2 $length={110}>
                                <S.Status color={"#FDF0EC"}>
                                    <S.Circle color={"#F87067"}></S.Circle>
                                    <S.StatusText color={"#F87067"}>이탈</S.StatusText>
                                </S.Status>
                            </S.Box2>
                            <S.Box2 $length={110}>
                                <S.Status color={"#ECF3FD"}>
                                    <S.Circle color={"#2E6FF2"}></S.Circle>
                                    <S.StatusText color={"#2E6FF2"}>방과후</S.StatusText>
                                </S.Status>
                            </S.Box2>
                        </S.Content>
                    )
                }
            })}
        </S.StudentContainer>
    );
}
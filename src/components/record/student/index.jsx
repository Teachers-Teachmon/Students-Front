import * as S from './style.jsx'

export default function Student({ data }) {
    return (
        <S.StudentContainer>
            <S.Standard>
                <div>
                    <S.UnBox></S.UnBox>
                    <S.Box $length={510}>학번/이름</S.Box>
                </div>
                <div>
                    <S.Box $length={110}>8교시</S.Box>
                    <S.Box $length={110}>9교시</S.Box>
                    <S.Box $length={110}>10교시</S.Box>
                    <S.Box $length={110}>11교시</S.Box>
                </div>
            </S.Standard>
            <S.ContentBox>
                {data&& data.length === 0 ? <S.NoData>데이터가 없습니다</S.NoData> : null}
                {data && data.map((item) => {
                    console.log(item)
                    return(
                        <S.Content key={item.id}>
                            <div>
                                <S.UnBox></S.UnBox>
                                <S.Box2 $length={510}>{item.student}</S.Box2>
                            </div>
                            <div>
                                {item['8th_schedule'] === "방과후" ?
                                    <S.Box2 $length={110}>
                                        <S.Status color={"#ECF3FD"}>
                                            <S.Circle color={"#2E6FF2"}></S.Circle>
                                            <S.StatusText color={"#2E6FF2"}>방과후</S.StatusText>
                                        </S.Status>
                                    </S.Box2> :
                                    item['8th_schedule'] === "조퇴" ?
                                        <S.Box2 $length={110}>
                                            <S.Status color={"#FFF6E4"}>
                                                <S.Circle color={"#FF9000"}></S.Circle>
                                                <S.StatusText color={"#FF9000"}>조퇴</S.StatusText>
                                            </S.Status>
                                        </S.Box2> :
                                        item['8th_schedule'] === "자습" ?
                                            <S.Box2 $length={110}>
                                                <S.Status color={"#ECFDF3"}>
                                                    <S.Circle color={"#14BA6D"}></S.Circle>
                                                    <S.StatusText color={"#14BA6D"}>자습</S.StatusText>
                                                </S.Status>
                                            </S.Box2> :
                                            item['8th_schedule'] === "이탈" ?
                                                <S.Box2 $length={110}>
                                                    <S.Status color={"#FDF0EC"}>
                                                        <S.Circle color={"#F87067"}></S.Circle>
                                                        <S.StatusText color={"#F87067"}>이탈</S.StatusText>
                                                    </S.Status>
                                                </S.Box2> : item['8th_schedule'] === "이석" ?
                                                    <S.Box2 $length={110}>
                                                        <S.Status color={"#F0ECFD"}>
                                                            <S.Circle color={"#6A1EC1"}></S.Circle>
                                                            <S.StatusText color={"#6A1EC1"}>이석</S.StatusText>
                                                        </S.Status>
                                                    </S.Box2> : <S.Box2 $length={110}>
                                                        <S.Status>
                                                            <S.StatusText>X</S.StatusText>
                                                        </S.Status>
                                                    </S.Box2>
                                }

                                {item['9th_schedule'] === "방과후" ?
                                    <S.Box2 $length={110}>
                                        <S.Status color={"#ECF3FD"}>
                                            <S.Circle color={"#2E6FF2"}></S.Circle>
                                            <S.StatusText color={"#2E6FF2"}>방과후</S.StatusText>
                                        </S.Status>
                                    </S.Box2> :
                                    item['9th_schedule'] === "조퇴" ?
                                        <S.Box2 $length={110}>
                                            <S.Status color={"#FFF6E4"}>
                                                <S.Circle color={"#FF9000"}></S.Circle>
                                                <S.StatusText color={"#FF9000"}>조퇴</S.StatusText>
                                            </S.Status>
                                        </S.Box2> :
                                        item['9th_schedule'] === "자습" ?
                                            <S.Box2 $length={110}>
                                                <S.Status color={"#ECFDF3"}>
                                                    <S.Circle color={"#14BA6D"}></S.Circle>
                                                    <S.StatusText color={"#14BA6D"}>자습</S.StatusText>
                                                </S.Status>
                                            </S.Box2> :
                                            item['9th_schedule'] === "이탈" ?
                                                <S.Box2 $length={110}>
                                                    <S.Status color={"#FDF0EC"}>
                                                        <S.Circle color={"#F87067"}></S.Circle>
                                                        <S.StatusText color={"#F87067"}>이탈</S.StatusText>
                                                    </S.Status>
                                                </S.Box2> : item['9th_schedule'] === "이석" ?
                                                    <S.Box2 $length={110}>
                                                        <S.Status color={"#F0ECFD"}>
                                                            <S.Circle color={"#6A1EC1"}></S.Circle>
                                                            <S.StatusText color={"#6A1EC1"}>이석</S.StatusText>
                                                        </S.Status>
                                                    </S.Box2> : <S.Box2 $length={110}>
                                                        <S.Status>
                                                            <S.StatusText>X</S.StatusText>
                                                        </S.Status>
                                                    </S.Box2>
                                }

                                {item['10th_schedule'] === "방과후" ?
                                    <S.Box2 $length={110}>
                                        <S.Status color={"#ECF3FD"}>
                                            <S.Circle color={"#2E6FF2"}></S.Circle>
                                            <S.StatusText color={"#2E6FF2"}>방과후</S.StatusText>
                                        </S.Status>
                                    </S.Box2> :
                                    item['10th_schedule'] === "조퇴" ?
                                        <S.Box2 $length={110}>
                                            <S.Status color={"#FFF6E4"}>
                                                <S.Circle color={"#FF9000"}></S.Circle>
                                                <S.StatusText color={"#FF9000"}>조퇴</S.StatusText>
                                            </S.Status>
                                        </S.Box2> :
                                        item['10th_schedule'] === "자습" ?
                                            <S.Box2 $length={110}>
                                                <S.Status color={"#ECFDF3"}>
                                                    <S.Circle color={"#14BA6D"}></S.Circle>
                                                    <S.StatusText color={"#14BA6D"}>자습</S.StatusText>
                                                </S.Status>
                                            </S.Box2> :
                                            item['10th_schedule'] === "이탈" ?
                                                <S.Box2 $length={110}>
                                                    <S.Status color={"#FDF0EC"}>
                                                        <S.Circle color={"#F87067"}></S.Circle>
                                                        <S.StatusText color={"#F87067"}>이탈</S.StatusText>
                                                    </S.Status>
                                                </S.Box2> : item['10th_schedule'] === "이석" ?
                                                    <S.Box2 $length={110}>
                                                        <S.Status color={"#F0ECFD"}>
                                                            <S.Circle color={"#6A1EC1"}></S.Circle>
                                                            <S.StatusText color={"#6A1EC1"}>이석</S.StatusText>
                                                        </S.Status>
                                                    </S.Box2> :  <S.Box2 $length={110}>
                                                        <S.Status>
                                                            <S.StatusText>X</S.StatusText>
                                                        </S.Status>
                                                    </S.Box2>
                                }

                                {item['11th_schedule'] === "방과후" ?
                                    <S.Box2 $length={110}>
                                        <S.Status color={"#ECF3FD"}>
                                            <S.Circle color={"#2E6FF2"}></S.Circle>
                                            <S.StatusText color={"#2E6FF2"}>방과후</S.StatusText>
                                        </S.Status>
                                    </S.Box2> :
                                    item['11th_schedule'] === "조퇴" ?
                                        <S.Box2 $length={110}>
                                            <S.Status color={"#FFF6E4"}>
                                                <S.Circle color={"#FF9000"}></S.Circle>
                                                <S.StatusText color={"#FF9000"}>조퇴</S.StatusText>
                                            </S.Status>
                                        </S.Box2> :
                                        item['11th_schedule'] === "자습" ?
                                            <S.Box2 $length={110}>
                                                <S.Status color={"#ECFDF3"}>
                                                    <S.Circle color={"#14BA6D"}></S.Circle>
                                                    <S.StatusText color={"#14BA6D"}>자습</S.StatusText>
                                                </S.Status>
                                            </S.Box2> :
                                            item['11th_schedule'] === "이탈" ?
                                                <S.Box2 $length={110}>
                                                    <S.Status color={"#FDF0EC"}>
                                                        <S.Circle color={"#F87067"}></S.Circle>
                                                        <S.StatusText color={"#F87067"}>이탈</S.StatusText>
                                                    </S.Status>
                                                </S.Box2> : item['11th_schedule'] === "이석" ?
                                                    <S.Box2 $length={110}>
                                                        <S.Status color={"#F0ECFD"}>
                                                            <S.Circle color={"#6A1EC1"}></S.Circle>
                                                            <S.StatusText color={"#6A1EC1"}>이석</S.StatusText>
                                                        </S.Status>
                                                    </S.Box2> :  <S.Box2 $length={110}>
                                                        <S.Status>
                                                            <S.StatusText>X</S.StatusText>
                                                        </S.Status>
                                                    </S.Box2>
                                }
                            </div>


                        </S.Content>
                    )
                })}
            </S.ContentBox>
        </S.StudentContainer>
    );
}
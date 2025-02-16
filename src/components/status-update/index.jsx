import styled from "styled-components";
export default function StatusUpdate({changeStatus, name, nowStatus, up}) {
    const now = () =>{
        switch(nowStatus){
            case '조퇴' :
            case '이탈' :
            case 'EXIT' :
            case 'LEAVE_EARLY' :
                return (
                    <>
                        <Status color={"#ECFDF3"} onClick={()=>changeStatus(name, "자습")}>
                            <Circle color={"#14BA6D"}></Circle>
                            <StatusText color={"#14BA6D"}>자습</StatusText>
                        </Status>
                        <Status color={"#F0ECFD"} onClick={()=>changeStatus(name, "이석")}>
                            <Circle color={"#6A1EC1"}></Circle>
                            <StatusText color={"#6A1EC1"}>이석</StatusText>
                        </Status>
                    </>
                )
            case '자습' :
            case '이석' :
            case "SELF_STUDY" :
            case "LEAVE_SEAT" :
                return (
                    <>
                        <Status color={"#FFF6E4"} onClick={()=>changeStatus(name, "조퇴")}>
                            <Circle color={"#FF9000"}></Circle>
                            <StatusText color={"#FF9000"}>조퇴</StatusText>
                        </Status>
                        <Status color={"#FDF0EC"} onClick={()=>changeStatus(name, "이탈")}>
                            <Circle color={"#F87067"}></Circle>
                            <StatusText color={"#F87067"}>이탈</StatusText>
                        </Status>
                    </>
                )
            case 'TEACHER' :
                return(
                    <>
                        <Status color={"#ECF3FD"} onClick={()=>changeStatus(name, "일반")}>
                            <Circle color={"#2E6FF2"}></Circle>
                            <StatusText color={"#2E6FF2"}>일반</StatusText>
                        </Status>
                        <Status color={"#FDF0EC"} onClick={()=>changeStatus(name, "관리자")}>
                            <Circle color={"#F87067"}></Circle>
                            <StatusText color={"#F87067"}>관리자</StatusText>
                        </Status>
                    </>
                )
            default :
                return (
                    <>
                        <Status color={"#ECFDF3"} onClick={()=>changeStatus(name, "자습")}>
                            <Circle color={"#14BA6D"}></Circle>
                            <StatusText color={"#14BA6D"}>자습</StatusText>
                        </Status>
                        <Status color={"#FFF6E4"} onClick={()=>changeStatus(name, "조퇴")}>
                            <Circle color={"#FF9000"}></Circle>
                            <StatusText color={"#FF9000"}>조퇴</StatusText>
                        </Status>
                        <Status color={"#FDF0EC"} onClick={()=>changeStatus(name, "이탈")}>
                            <Circle color={"#F87067"}></Circle>
                            <StatusText color={"#F87067"}>이탈</StatusText>
                        </Status>
                    </>
                )
        }
    }
    return (
        <StatusBox $up = {up} onClick={(e) => e.stopPropagation()} >
            {now()}
        </StatusBox>
    )
}

export const StatusBox = styled.div`
    display: flex;
    width: max-content;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    position: absolute;
    border: 2px solid #F5F5F5;
    border-radius: 8px;
    gap: 10px;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, ${(props)=>props.$up ? `${props.$up}%` : "-150%"});
    color: white;
    font-size: 12px;
    font-weight: 500;
    background: white;
    padding: 10px;
    z-index: 15;
`
export const Status = styled.div`
    display: flex;
    align-items: center;
    background: ${(props)=> props.color};
    gap: 8px;
    border-radius: 22px;
    padding: 2px 5px;
    cursor: pointer;
`

export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${(props)=> props.color};
`
export const StatusText = styled.p`
    color: ${props=>props.color};
    font-size: 16px;
    
`
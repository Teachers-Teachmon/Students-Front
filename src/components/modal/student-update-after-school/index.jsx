import * as S from './style.jsx';
import X from '../../../assets/X.svg'
import SquareBtn from "../../button/square/index.jsx";
import Dropdown from "../../dropdown/nosearch/index.jsx";
import {useEffect, useState} from "react";
import {useGetSupplementList} from "../../../hooks/useAfterSchool.js";

export default function StudentUpdateAfterSchool({setIsModal, day, period, patchAfterSchool}) {
    const [isOpen, setIsOpen] = useState(false);
    const [className, setClassName] = useState("방과후");
    const {data : afterSchoolList = [], refetch} = useGetSupplementList(day, period);
    console.log(afterSchoolList)
    useEffect(() => {
        if (day && period !== null) {
            refetch();
        }
    }, [day, period, refetch]);
    return (
        <S.Black onClick={()=>{setIsModal(false)}}>
            <S.Content onClick={(e)=>e.stopPropagation()}>
                <S.Box $justify = {'space-between'}>
                    <h2>방과후선택</h2>
                    <img src={X} alt={'X'}  onClick={()=>{setIsModal(false)}}/>
                </S.Box>
                <Dropdown name={className}  item={afterSchoolList.map(item => item.name)} change={(event) => {setClassName(event)}} isOpen={isOpen} click={() => {setIsOpen(!isOpen)}}/>
                <S.Box $justify = {'space-around'}>
                    <SquareBtn name={"취소"} status={false} On={()=>{setIsModal(false)}}/>
                    <SquareBtn name={"완료"} status={true} On={()=>{patchAfterSchool(className); setIsModal(false)}}/>
                </S.Box>
            </S.Content>
        </S.Black>
    )
}
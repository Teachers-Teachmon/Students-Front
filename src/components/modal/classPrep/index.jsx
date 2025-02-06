import * as S from './style.jsx';
import Confirm from '../../button/confirm/index.jsx';
import Square from '../../button/square/index.jsx';
import PrepDate from '../../prepDate/index.jsx';
import { useEffect, useState } from 'react';
import Dropdown from '../../dropdown/nosearch/index.jsx';
import { useClassPrep } from '../../../hooks/useAfterSchool.js';
import { useGetSupplementList } from '../../../hooks/useAfterSchool.js';



export default function ClassPrep({ closeModal, selectedClass }) {
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [isOpen, setIsOpen] = useState([false, false]);
    const { mutate: createClassPrep } = useClassPrep();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedAfterSchool, setSelectedAfterSchool] = useState(null);

    const getPeriodNumber = (period) => (period === '8~9교시' ? 8 : period === '10~11교시' ? 10 : null);
    const selectedPeriodNumber = getPeriodNumber(selectedPeriod);


    const periods = ['8~9교시', '10~11교시'];

    const { data: afterSchoolList = [], refetch } = useGetSupplementList(selectedDate, selectedPeriod);

    const handleDateChange = (day) => {
        setSelectedDate(day);
    };

    useEffect(() => {
        if (selectedDate && selectedPeriodNumber !== null) {
            refetch();
        }
    }, [selectedDate, selectedPeriod, refetch]);

    const handleCreate = () => {
        if (!selectedDate || !selectedAfterSchool) {
            alert("보강 날짜와 방과후를 선택해주세요.");
            return;
        }

        const requestBody = {
            originalAfterSchool: {
                day: selectedDate,
                type: selectedAfterSchool.type,
                id: selectedAfterSchool.id
            },
            newAfterSchool: {
                afterSchoolId: selectedClass.id
            }
        }

        createClassPrep(requestBody,{});
        closeModal();
    };

    return (
        <S.Wrapper>
            <S.ClassTop>
                <h2>방과후 보강</h2>
                <S.ChangeClass>바꾸고싶은 방과후</S.ChangeClass>
            </S.ClassTop>
            <S.DateMain>
                <PrepDate onChange={handleDateChange}/>
            </S.DateMain>

            <S.Place>
                <Dropdown
                    name={selectedPeriod || '시간'}
                    item={periods}
                    change={(currentItem) => {
                        setSelectedPeriod(currentItem);
                        setIsOpen([false, false]);
                    }}
                    click={() => setIsOpen([!isOpen[0], false])}
                    isOpen={isOpen[0]}
                />

                <Dropdown
                    name={selectedAfterSchool ? selectedAfterSchool.name : '방과후'}
                    item={afterSchoolList}
                    change={(currentItem) => {
                        setSelectedAfterSchool(currentItem);
                        setIsOpen([false, false]);
                    }}
                    click={() => setIsOpen([false, !isOpen[1]])}
                    isOpen={isOpen[1]}
                />
            </S.Place>

            <S.Buttons>
                <Square name="취소" color="#999999" background="white" border="#999999" On={ closeModal } />
                <Confirm text="완료" color="blue" image="" onClick={handleCreate} />
            </S.Buttons>
        </S.Wrapper>
    );
}

import * as S from './style.jsx';
import Confirm from '../../button/confirm/index.jsx';
import Square from '../../button/square/index.jsx';
import PrepDate from '../../prepDate/index.jsx';
import { useState } from 'react';
import Dropdown from '../../dropdown/nosearch/index.jsx';
import { useClassPrep } from '../../../hooks/useAfterSchool.js';



export default function ClassPrep({ closeModal, selectedClass }) {
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [isOpen, setIsOpen] = useState([false, false]);
    const [selectedDate, setSelectedDate] = useState(null);
    const { mutate: createClassPrep } = useClassPrep();

    const periods = ['8~9교시', '10~11교시'];
    const classesPeriod = {
        '8~9교시': ['파이썬', '리액트', '스프링 부트'],
        '10~11교시': ['C언어', '웹 개발', '스프링'],
    };

    const handleCreate = () => {
        const requestBody = {
            sender: {
                afterSchoolId: selectedClass.id,
                day: selectedClass.weekday
            },
            // recipient: {
            //     type: ,
            //     do_id: ,
            //     day: 
            // }
        }

        if (!selectedDate) {
            alert("보강 날짜를 입력해주세요.");
            return;
        }

        console.log(selectedDate, selectedClass);
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
                <PrepDate onChange={(d) => setSelectedDate(d)}/>
            </S.DateMain>

            <S.Place>
                <Dropdown
                    name={selectedPeriod || '시간'}
                    item={periods}
                    change={(currentItem) => {
                        setSelectedPeriod(currentItem);
                        //setSelectedClass(null); // 방과후 초기화
                        setIsOpen([false, false]);
                    }}
                    click={() => setIsOpen([!isOpen[0], false])}
                    isOpen={isOpen[0]}
                />

                <Dropdown
                    name={selectedClass || '방과후'}
                    item={classesPeriod[selectedPeriod] || []}
                    change={(currentItem) => {
                        //setSelectedClass(currentItem);
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

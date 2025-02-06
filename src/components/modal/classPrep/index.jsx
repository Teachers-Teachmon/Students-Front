import * as S from './style.jsx';
import Confirm from '../../button/confirm/index.jsx';
import Square from '../../button/square/index.jsx';
import PrepDate from '../../prepDate/index.jsx';
import { useState } from 'react';
import Dropdown from '../../dropdown/nosearch/index.jsx';
import { useClassPrep } from '../../../hooks/useAfterSchool.js';
import DateInput from '../../dateInput/index.jsx';



export default function ClassPrep({ closeModal, selectedClass }) {
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [isOpen, setIsOpen] = useState([false, false]);
    const { mutate: createClassPrep } = useClassPrep();
    const [localSender, setLocalSender] = useState(null);
    const [localRecipient, setLocalRecipient] = useState(null);

    const periods = ['8~9교시', '10~11교시'];
    const classesPeriod = {
        '8~9교시': ['파이썬', '리액트', '스프링 부트'],
        '10~11교시': ['C언어', '웹 개발', '스프링'],
    };

    const handleDateChange = (date, type) => {
        if (type === "sender") {
            setLocalSender(date);
        } else {
            setLocalRecipient(date);
        }
    };

    const handleCreate = () => {
        const requestBody = {
            sender: {
                afterSchoolId: selectedClass.id,
                day: localSender
            },
            // recipient: {
            //     type: ,
            //     do_id: ,
            //     day: localRecipient
            // }
        }

        if (!localSender || !localRecipient) {
            alert("보강 날짜를 입력해주세요.");
            return;
        }

        setsender(localSender);
        setrecipient(localRecipient);
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
                <PrepDate onChange={(date) => handleDateChange(date, "sender")}/>
                <PrepDate onChange={(date) => handleDateChange(date, "recipient")}/>
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

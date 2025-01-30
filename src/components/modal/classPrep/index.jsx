import * as S from './style.jsx';
import Confirm from '../../button/confirm/index.jsx';
import Square from '../../button/square/index.jsx';
import PrepDate from '../../PrepDate/index.jsx';
import { useState } from 'react';
import Dropdown from '../../dropdown/nosearch/index.jsx';



export default function ClassPrep({ closeModal }) {
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [isOpen, setIsOpen] = useState([false, false]);

    const periods = ['8~9교시', '10~11교시'];
    const classesPeriod = {
        '8~9교시': ['파이썬', '리액트', '스프링 부트'],
        '10~11교시': ['C언어', '웹 개발', '스프링'],
    };

    return (
        <S.Wrapper>
            <S.ClassTop>
                <h2>방과후 보강</h2>
                <S.ChangeClass>바꾸고싶은 방과후</S.ChangeClass>
            </S.ClassTop>
            <S.DateMain>
                <PrepDate />
            </S.DateMain>

            <S.Place>
                <Dropdown
                    name={selectedPeriod || '시간'}
                    item={periods}
                    change={(currentItem) => {
                        setSelectedPeriod(currentItem);
                        setSelectedClass(''); // 방과후 초기화
                        setIsOpen([false, false]);
                    }}
                    click={() => setIsOpen([!isOpen[0], false])}
                    isOpen={isOpen[0]}
                />

                <Dropdown
                    name={selectedClass || '방과후'}
                    item={classesPeriod[selectedPeriod] || []}
                    change={(currentItem) => {
                        setSelectedClass(currentItem);
                        setIsOpen([false, false]);
                    }}
                    click={() => setIsOpen([false, !isOpen[1]])}
                    isOpen={isOpen[1]}
                />
            </S.Place>

            <S.Buttons>
                <Square name="취소" color="#999999" background="white" border="#999999" onClick={closeModal} />
                <Confirm text="완료" color="blue" />
            </S.Buttons>
        </S.Wrapper>
    );
}

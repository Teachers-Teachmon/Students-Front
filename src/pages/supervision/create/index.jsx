import * as S from './style.jsx';
import { useEffect, useState } from 'react';
import Header from '../../../components/header/index.jsx';
import SupervisionCreateModal from '../../../components/modal/supervisionCreate/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import { searchTeacher } from '../../../api/search.js';
import DropdownNS from '../../../components/dropdown/nosearch/index.jsx';
import DropdownS from '../../../components/dropdown/search/index.jsx';

export default function SupervisionCreate() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedRows, setSelectedRows] = useState([[], [], [], []]);
    const [isOpen, setIsOpen] = useState({});


    const periods = ['7교시', '8~9교시', '10~11교시'];

    const handleInputChange = (classIndex, rowIndex, field, value) => {
        setSelectedRows(prev => {
            const newRows = [...prev];
            newRows[classIndex][rowIndex] = {
                ...newRows[classIndex][rowIndex],
                [field]: value,
            };
            return newRows;
        });
    };

    const handleDropdownClick = (classIndex, rowIndex, field) => {
        setIsOpen(prev => ({
            ...prev,
            [classIndex]: {
                ...prev[classIndex],
                [rowIndex]: {
                    ...prev[classIndex]?.[rowIndex],
                    [field]: !prev[classIndex]?.[rowIndex]?.[field],
                },
            },
        }));
    };

    useEffect(() => {
        setIsOpen(selectedRows.map(() => []));
    }, [selectedRows.length]);

    const addRow = (classIndex) => {
        setSelectedRows(prev => {
            const newRows = [...prev];
            newRows[classIndex] = [...newRows[classIndex], { period: '', teacherName: '' }];
            return newRows;
        });
    };

    const removeRow = (classIndex, rowIndex) => {
        setSelectedRows(prev => {
            const newRows = [...prev];
            newRows[classIndex] = newRows[classIndex].filter((_, index) => index !== rowIndex);
            return newRows;
        });

        setIsOpen(prev => {
            const newIsOpen = [...prev];
            newIsOpen[classIndex] = newIsOpen[classIndex]?.filter((_, index) => index !== rowIndex);
            return newIsOpen;
        });
    };


    return (
        <S.Container>
            <Header />
            <S.Content>
                {Object.values(isOpen).some(classObj =>
                    Object.values(classObj).some(rowObj =>
                        Object.values(rowObj).includes(true)
                    )
                ) && (
                        <S.Black onClick={() => setIsOpen({})} />
                    )}

                <S.MainHeader>
                    <h1>금지날짜 입력</h1>
                    <SquareBtn name="다음" status={true} On={() => setIsCreateModalOpen(true)}>다음</SquareBtn>
                </S.MainHeader>
                <S.MainContent>
                    {selectedRows.map((rows, classIndex) => (
                        <S.EditMainData key={classIndex}>
                            <S.EditMainTop>
                                <S.TopData $length={9}>교시</S.TopData>
                                <S.TopData $length={9}>선생님</S.TopData>
                            </S.EditMainTop>

                            {rows.map((row, rowIndex) => (
                                <S.EditRow key={rowIndex}>
                                    <S.RowData $length={10}>
                                        <DropdownNS
                                            name={row?.period || '교시'}
                                            item={periods}
                                            change={(value) => handleInputChange(classIndex, rowIndex, 'period', value)}
                                            isOpen={isOpen[classIndex]?.[rowIndex]?.period}
                                            click={() => handleDropdownClick(classIndex, rowIndex, 'period')}
                                        />
                                    </S.RowData>
                                    <S.RowData $length={8.5}>
                                        <DropdownS
                                            target="선생님"
                                            name={row?.teacherName || "선생님"}
                                            change={(value) => handleInputChange(classIndex, rowIndex, 'teacherName', value.name)}
                                            isOpen={isOpen[classIndex]?.[rowIndex]?.teacherName}
                                            click={() => handleDropdownClick(classIndex, rowIndex, 'teacherName')}
                                            axios={(event) => searchTeacher(event)}
                                        />
                                    </S.RowData>
                                    <S.P onClick={() => removeRow(classIndex, rowIndex)}>-</S.P>
                                </S.EditRow>
                            ))}
                            <S.PlusBtn onClick={() => addRow(classIndex)}>+</S.PlusBtn>
                        </S.EditMainData>
                    ))}
                </S.MainContent>
            </S.Content>
            {isCreateModalOpen && (
                <S.ModalOverlay onClick={() => setIsCreateModalOpen(false)}>
                    <S.Modal onClick={(e) => e.stopPropagation()}>
                        <SupervisionCreateModal closeModal={() => { setIsCreateModalOpen(false) }} />
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Container>
    )
}

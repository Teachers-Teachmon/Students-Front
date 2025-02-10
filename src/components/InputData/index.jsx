import { useEffect, useState } from 'react';
import { searchTeacher } from '../../api/search.js';
import * as S from '../../components/InputData/style.jsx';
import DropdownNS from '../dropdown/nosearch/index.jsx';
import DropdownS from '../dropdown/search/index.jsx';

export default function InputData() {

    const [selectedRows, setSelectedRows] = useState([]);
    const [isOpen, setIsOpen] = useState([]);

    const periods = ['8~9교시', '10~11교시'];

    const handleInputChange = (index, field, value) => {
        setSelectedRows(prev => {
            const newRows = [...prev];
            newRows[index] = {
                ...newRows[index],
                [field]: value,
            };
            return newRows;
        });
    };

    const handleDropdownClick = (index, field) => {
        setIsOpen((prev) => {
            const newIsOpen = [...prev];
            newIsOpen[index] = {
                ...newIsOpen[index],
                [field]: !newIsOpen[index]?.[field],
            };
            return newIsOpen;
        });
    };

    useEffect(() => {
        setIsOpen(
            Array(selectedRows.length)
                .fill()
                .map(() => ({ period: false, teacherName: false }))
        );
    }, [selectedRows.length]);

    const addRow = () => {
        setSelectedRows(prev => [
            ...prev,
            { period: '', teacherName: '' }
        ]);
    };    

    return (
        <S.EditContent>
            <S.EditMain>
                <S.EditMainData>
                    <S.EditMainTop>
                        <S.TopData $length={9}>교시</S.TopData>
                        <S.TopData $length={9}>선생님</S.TopData>
                    </S.EditMainTop>

                    {selectedRows.map((row, index) => (
                        <S.EditRow key={index}>
                            <S.RowData $length={9}>
                                <DropdownNS
                                    name={row?.period || '교시'}
                                    item={periods}
                                    change={(value) => handleInputChange(index, 'period', value)}
                                    isOpen={isOpen[index]?.period}
                                    click={() => handleDropdownClick(index, 'period')}
                                />
                            </S.RowData>
                            <S.RowData $length={8.5}>
                                <DropdownS
                                    target="선생님"
                                    name={row?.teacherName || "선생님"}
                                    change={(value) => handleInputChange(index, 'teacherName', value.name)}
                                    isOpen={isOpen[index]?.teacherName}
                                    click={() => handleDropdownClick(index, 'teacherName')}
                                    axios={(event) => searchTeacher(event)}
                                />
                            </S.RowData>
                        </S.EditRow>
                    ))}
                    <S.PlusBtn onClick={() => addRow()}>+</S.PlusBtn>
                </S.EditMainData>
            </S.EditMain>
        </S.EditContent>
    );
}
import * as S from './style.jsx';
import { useEffect, useState } from 'react';
import Header from '../../../components/header/index.jsx';
import SupervisionCreateModal from '../../../components/modal/supervisionCreate/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import { searchTeacher } from '../../../api/search.js';
import DropdownNS from '../../../components/dropdown/nosearch/index.jsx';
import DropdownS from '../../../components/dropdown/search/index.jsx';
import { useGetBannedList, useSetBannedList } from '../../../hooks/useSupervision.js';

export default function SupervisionCreate() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedRows, setSelectedRows] = useState([[], [], [], []]);
    const [isOpen, setIsOpen] = useState([]);
    const { mutate } = useSetBannedList();
    const { data: bannedList, isLoading: bannedLoading, isError: bannedError } = useGetBannedList();
    const week = ['MON', 'TUE', 'WED', 'THU'];
    const periods = ['7교시', '7교시', '8~9교시', '10~11교시'];
    const mapPeriod = (p) => {
        switch (p) {
            case "7교시":
                return "SEVEN_PERIOD";
            case "8~9교시":
                return "EIGHT_AND_NINE_PERIOD";
            case "10~11교시":
                return "TEN_AND_ELEVEN_PERIOD";
            default:
                return "";
        }
    };

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
        setIsOpen(prev => {
            const newIsOpen = [...prev];
            newIsOpen[classIndex][rowIndex] = {
                ...newIsOpen[classIndex][rowIndex],
                [field]: !newIsOpen[classIndex][rowIndex]?.[field],
            };
            return newIsOpen;
        });
    };

    useEffect(() => {
        setIsOpen(selectedRows.map(() => []));
    }, [selectedRows.length]);

    const addRow = (classIndex) => {
        setSelectedRows(prev => {
            const newRows = [...prev];
            newRows[classIndex] = [...newRows[classIndex], { period: '', teacher: null }];
            return newRows;
        });
    };

    const handleSubmit = () => {
        const payload = selectedRows.flatMap((rows, classIndex) =>
            rows.map(row => {
                if (row.period && row.teacher && row.teacher.id) {
                    return {
                        week_day: week[classIndex],
                        period: mapPeriod(row.period),
                        teacher_id: row.teacher.id,
                    };
                }
                return null;
            }).filter(item => item !== null)
        );
        console.log('Payload:', payload);
        mutate(payload);
    };
    useEffect(() => {
        if (bannedList && Array.isArray(bannedList)) {
            const weekMapping = { "월": 0, "화": 1, "수": 2, "목": 3 };
            const newRows = [[], [], [], []];
            bannedList.forEach(item => {
                const idx = weekMapping[item.week_day];
                if (idx !== undefined) {
                    const [teacherName, teacherIdStr] = item.teacher.split('/');
                    const teacherObj = { name: teacherName, id: parseInt(teacherIdStr) };
                    newRows[idx].push({
                        period: item.period,
                        teacher: teacherObj,
                    });
                }
            });
            setSelectedRows(newRows);
        }
    }, [bannedList]);

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
                <S.MainHeader>
                    <h1>금지날짜 입력</h1>
                    <SquareBtn name="다음" status={true} On={() => { handleSubmit(); setIsCreateModalOpen(true);}} />
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
                                            name={row?.teacher ? row.teacher.name : "선생님"}
                                            change={(value) => handleInputChange(classIndex, rowIndex, 'teacher', value)}
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
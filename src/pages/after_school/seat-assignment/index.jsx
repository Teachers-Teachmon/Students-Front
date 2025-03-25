import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import LocationBox from '../../../components/modal/LocationBox/index.jsx';
import { useState, useEffect } from 'react';
import { useGetStudentLocation, useGetBusinessTripStudents, useSetBusinessTripStudents, useGetAbleAfterSchool } from '../../../hooks/useAfterSchool.js';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useLocation } from 'react-router-dom';

const STUDENT_TYPE = 'STUDENT';

function DragStudent({ student }) {
    const [{ isDragging }, drag] = useDrag({
        type: STUDENT_TYPE,
        item: { student },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    return (
        <S.Student ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {student.number} {student.name}
        </S.Student>
    );
}

function DropZone({ classNumber, onDropStudent, children, enabled }) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: STUDENT_TYPE,
        canDrop: () => enabled,
        drop: (item) => {
            if (enabled) {
                onDropStudent(item.student, classNumber);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    return (
        <S.ClassDivisionBox ref={drop} $isOver={isOver} $enabled={enabled}>
            {children}
        </S.ClassDivisionBox>
    );
}

export default function SeatAssignment() {
    const location = useLocation();
    const afterSchoolData = location.state || {};

    const { data: businessTripStudents } = useGetBusinessTripStudents(afterSchoolData.id, afterSchoolData.day);
    const { data: studentLocation, refetch } = useGetStudentLocation(afterSchoolData.day, afterSchoolData.id, { enabled: false });
    const { data: ableAfterSchool } = useGetAbleAfterSchool(afterSchoolData.id, afterSchoolData.day);
    const { mutate } = useSetBusinessTripStudents();
    const [assignedStudent, setAssignedStudent] = useState([]);
    const [locationMessage, setLocationMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (businessTripStudents && assignedStudent.length === 0) {
            const assigned = businessTripStudents.flatMap((classStudents, index) =>
                classStudents.map(student => ({ ...student, classNumber: index + 1 }))
            );
            setAssignedStudent(assigned);
        }
    }, [businessTripStudents]);    

    const handleAssignStudent = (student, targetClassNumber) => {
        setAssignedStudent(prev => {
            const updated = prev.filter(s => s.number !== student.number);
            return [...updated, { ...student, classNumber: targetClassNumber }];
        });
    };

    const handleSave = () => {
        const payload = {
            day: afterSchoolData.day,
            period: afterSchoolData.period,
            student: assignedStudent.map(student => ({
                number: student.number,
                classNumber: String(student.classNumber)
            }))
        }

        mutate(payload, {
            onSuccess: async () => {
                const res = await refetch();
                setLocationMessage((res && res.data) || "학생 위치 불러오기 실패");
                setIsModalOpen(true);
            },
            onError: () => {
                alert("배정에 실패했습니다.");
            }
        });
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <S.Container>
                <Header />
                <S.Content>
                    <S.Title>
                        <h1>자습공간 처리</h1>
                        <h2>{afterSchoolData.name || "없음"}</h2>
                        <SquareBtn name="완료" status={true} On={handleSave} />
                    </S.Title>
                    <h1>{afterSchoolData.grade || 0}학년</h1>
                    <S.ClassDivision>
                        {[1, 2, 3, 4].map((classNumber) => (
                            <S.ClassDivisionContent key={classNumber}>
                                <span>{classNumber}반</span>
                                <DropZone classNumber={classNumber} onDropStudent={handleAssignStudent} enabled={ableAfterSchool ? !ableAfterSchool[classNumber - 1] : false}>
                                    {assignedStudent
                                        .filter(student => student.classNumber === classNumber)
                                        .sort((a, b) => a.number - b.number)
                                        .map(student => (
                                            <DragStudent key={`${student.number}-${student.classNumber}`} student={student} />
                                        ))}
                                </DropZone>
                            </S.ClassDivisionContent>
                        ))}
                    </S.ClassDivision>
                    {isModalOpen && (
                        <S.ModalOverlay onClick={() => setIsModalOpen(false)}>
                            <S.Modal onClick={e => e.stopPropagation()}>
                                <LocationBox data={locationMessage} closeModal={() => setIsModalOpen(false)} afterSchoolData={afterSchoolData} />
                            </S.Modal>
                        </S.ModalOverlay>
                    )}
                </S.Content>
            </S.Container>
        </DndProvider>
    );
}
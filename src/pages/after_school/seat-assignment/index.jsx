import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import LocationBox from '../../../components/modal/LocationBox/index.jsx';
import { useState, useEffect } from 'react';
import { useGetStudentLocation, useSetBusinessTripStudents } from '../../../hooks/useAfterSchool.js';
import { useBusinessTrip } from '../../../hooks/useAfterSchool.js';
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

function DropZone({ classNumber, onDropStudent, children }) {
    const [{ isOver }, drop] = useDrop({
        accept: STUDENT_TYPE,
        drop: (item) => {
            console.log("Dropped on class", classNumber, "item:", item);
            onDropStudent(item.student, classNumber);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });
    return (
        <S.ClassDivisionBox ref={drop} $isOver={isOver}>
            {children}
        </S.ClassDivisionBox>
    );
}

export default function SeatAssignment() {
    const location = useLocation();
    const afterSchoolData = location.state || {};

    //   const { data: businessTripStudents } = useGetClassList(afterSchoolData.id, afterSchoolData.day);
    const businessTripStudents = [
        [],
        [
            { number: 1201, name: "김동욱" },
            { number: 1202, name: "김민석" }
        ],
        [],
        []
    ];
    const { data: studentLocation, refetch } = useGetStudentLocation(afterSchoolData.day, afterSchoolData.id, { enabled: false });
    const { mutate } = useSetBusinessTripStudents();
    const [assignedStudent, setAssignedStudent] = useState([]);
    const [locationMessage, setLocationMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { mutate: createBusinessTrip } = useBusinessTrip();

    useEffect(() => {
        if (businessTripStudents) {
            const assigned = businessTripStudents.flatMap((classStudents, index) =>
                classStudents.map(student => ({ ...student, classNumber: index + 1 }))
            );
            setAssignedStudent(assigned);
        }
    }, []);

    const handleAssignStudent = (student, targetClassNumber) => {
        console.log("Assigning student", student, "to class", targetClassNumber);
        setAssignedStudent(prev => {
            const updated = prev.filter(s => s.number !== student.number);
            return [...updated, { ...student, classNumber: targetClassNumber }];
        });
        console.log("Assigned students", assignedStudent);
    };

    const handleSave = () => {
        createBusinessTrip({
            day: afterSchoolData.day || new Date(),
            period: afterSchoolData.period,
            afterSchoolId: afterSchoolData.id,
            branch: afterSchoolData.branch
        });

        const payload = {
            data: assignedStudent.map(student => ({
                number: student.number,
                class: student.classNumber
            }))
        };

        mutate(payload, {
            onSuccess: async () => {
                const res = await refetch();
                setLocationMessage(res.data?.message || "학생 위치 불러오기 실패");
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
                                <DropZone classNumber={classNumber} onDropStudent={handleAssignStudent}>
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
                                <LocationBox data={locationMessage} closeModal={() => setIsModalOpen(false)} />
                            </S.Modal>
                        </S.ModalOverlay>
                    )}
                </S.Content>
            </S.Container>
        </DndProvider>
    );
}
import * as S from './style.jsx';
import Header from '../../../components/header/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useLocation } from 'react-router-dom';

const STUDENT_TYPE = 'STUDENT';

function DragStudent({ student, onClick }) {
    const [{ isDragging }, drag] = useDrag({
        type: STUDENT_TYPE,
        item: { student },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    return (
        <S.Student ref={drag} onClick={onClick} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {student.number}{student.name}
        </S.Student>
    );
}

function DropZone({ classNumber, onDropStudent, children }) {
    const [{ isOver }, drop] = useDrop({
        accept: STUDENT_TYPE,
        drop: (item) => onDropStudent(item.student, classNumber),
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
    const [afterSchoolName, setAfterSchoolName] = useState('정보처리산업기사 과정형 평가 실기 JAVA(1-3)');
    const [grade, setGrade] = useState(1);
    const [notAssignedStudent, setNotAssignedStudent] = useState([
        {
            number: 1301,
            name: "오주현"
        },
        {
            number: 1302,
            name: "오주현"
        },
        {
            number: 1303,
            name: "오주현"
        }
    ]);
    const [assignedStudent, setAssignedStudent] = useState([
        {
            class: 1,
            number: 1100,
            name: "오주현"
        },
        {
            class: 1,
            number: 1101,
            name: "오주현"
        },
        {
            class: 1,
            number: 1102,
            name: "오주현"
        },
        {
            class: 1,
            number: 1103,
            name: "오주현"
        },
        {
            class: 1,
            number: 1104,
            name: "오주현"
        },
        {
            class: 1,
            number: 1105,
            name: "오주현"
        },
        {
            class: 1,
            number: 1106,
            name: "오주현"
        },
        {
            class: 1,
            number: 1107,
            name: "오주현"
        },
        {
            class: 1,
            number: 1108,
            name: "오주현"
        },
        {
            class: 1,
            number: 1109,
            name: "오주현"
        },
        {
            class: 1,
            number: 1110,
            name: "오주현"
        },
        {
            class: 1,
            number: 1111,
            name: "오주현"
        },
        {
            class: 1,
            number: 1112,
            name: "오주현"
        },
        {
            class: 1,
            number: 1113,
            name: "오주현"
        },
        {
            class: 1,
            number: 1114,
            name: "오주현"
        },
        {
            class: 1,
            number: 1115,
            name: "오주현"
        },
        {
            class: 1,
            number: 1116,
            name: "오주현"
        },
        {
            class: 2,
            number: 1210,
            name: "오주현"
        },
        {
            class: 3,
            number: 1310,
            name: "오주현"
        },
        {
            class: 4,
            number: 1410,
            name: "오주현"
        }
    ]);

    const handleAssignStudent = (student, classNumber) => {
        setNotAssignedStudent((prev) => prev.filter((s) => s.number !== student.number));

        setAssignedStudent((prev) => {
            const updated = prev.filter((s) => s.number !== student.number);
            return [...updated, { ...student, class: classNumber }];
        })
    };
    const handleUnassignStudent = (student, classNumber) => {
        setAssignedStudent((prev) => prev.filter((s) => s.number !== student.number));
        setNotAssignedStudent((prev) => [...prev, student]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <S.Container>
                <Header />
                <S.Content>
                    <S.Title>
                        <h1>자습공간 처리</h1>
                        <h2>{afterSchoolData.name}</h2>
                        <SquareBtn name="완료" status={true} On={() => { console.log("요청 보내기 그리고 나가기") }} />
                    </S.Title>
                    <S.NotAssignedStudent>
                        {notAssignedStudent.map((student, _) => (
                            <DragStudent key={student.number} student={student} onClick={() => { }} />
                        ))}
                    </S.NotAssignedStudent>
                    <h1>{afterSchoolData.grade}학년</h1>
                    <S.ClassDivision>
                        {[1, 2, 3, 4].map((classNumber) => (
                            <S.ClassDivisionContent key={classNumber}>
                                <span>{classNumber}반</span>
                                <DropZone classNumber={classNumber} onDropStudent={handleAssignStudent}>
                                    {assignedStudent
                                        .filter((student) => student.class === classNumber)
                                        .sort((a, b) => a.number - b.number)
                                        .map((student) => (
                                            <DragStudent
                                                key={student.number}
                                                student={student}
                                                onClick={() => handleUnassignStudent(student, classNumber)}
                                            />
                                        ))}
                                </DropZone>
                            </S.ClassDivisionContent>
                        ))}
                    </S.ClassDivision>
                </S.Content>
            </S.Container>
        </DndProvider>
    )
}
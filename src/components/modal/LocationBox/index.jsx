import * as S from './style.jsx';
import SquareBtn from '../../button/square';
import { useNavigate } from 'react-router-dom';
import { useBusinessTrip } from '../../../hooks/useAfterSchool.js';

export default function LocationBox({ data, closeModal, afterSchoolData }) {
    const { mutate: createBusinessTrip } = useBusinessTrip();
    const parts = data.split(',');
    const handleCopy = () => {
        navigator.clipboard.writeText(data)
            .then(() => {
                alert("복사되었습니다.");
            })
            .catch((err) => {
                alert("복사에 실패했습니다.");
                console.error(err);
            });
    }

    const handleComplete = () => {
        closeModal();
        createBusinessTrip({
            day: afterSchoolData.day || new Date(),
            period: afterSchoolData.period,
            afterSchoolId: afterSchoolData.id,
            branch: afterSchoolData.branch
        });
    }

    return (
        <S.Container>
            <S.Header>
                <h2>자리배정 글</h2>
                <SquareBtn name="복사" status={false} On={handleCopy} />
            </S.Header>
            <S.Content>
                <h3>{parts[0]}</h3>
                {parts.slice(1).map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </S.Content>
            <SquareBtn name="완료" status={true} On={handleComplete} />
        </S.Container>
    )
}
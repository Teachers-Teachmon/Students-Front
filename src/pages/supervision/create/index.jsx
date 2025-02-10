import * as S from './style.jsx';
import { useState } from 'react';
import Header from '../../../components/header/index.jsx';
import SupervisionCreateModal from '../../../components/modal/supervisionCreate/index.jsx';

export default function SupervisionCreate() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    return (
        <S.Container>
            <Header />
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
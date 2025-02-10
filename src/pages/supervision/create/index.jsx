import * as S from './style.jsx';
import { useState } from 'react';
import Header from '../../../components/header/index.jsx';
import SupervisionCreateModal from '../../../components/modal/supervisionCreate/index.jsx';
import SquareBtn from '../../../components/button/square/index.jsx';
import { useGetBannedList, useSetBannedList } from '../../../hooks/useSupervision.js';

export default function SupervisionCreate() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    return (
        <S.Container>
            <Header />
            <S.Content>
                <S.MainHeader>
                    <h1>금지날짜 입력</h1>
                    <SquareBtn name="다음" status={true} On={() => setIsCreateModalOpen(true)}>다음</SquareBtn>
                </S.MainHeader>
                <S.MainContent>
                    <div>조아라가 만든거</div>
                    <div>조아라가 만든거</div>
                    <div>조아라가 만든거</div>
                    <div>조아라가 만든거</div>
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
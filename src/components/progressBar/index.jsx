import * as S from './style.jsx';

export default function ProgressBar({rate}) {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar rate={rate} />
    </S.ProgressBarContainer>
  );
}
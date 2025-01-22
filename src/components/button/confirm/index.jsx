import * as S from './style.jsx'

export default function Confirm({ text, color, image }) {
  return (
    <S.ConfirmContainer color={color}>
      <S.Icon image={image} />
      <S.Text>{text}</S.Text>
    </S.ConfirmContainer>
  )
}
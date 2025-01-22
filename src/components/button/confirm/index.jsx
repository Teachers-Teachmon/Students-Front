import * as S from './style.jsx'

export default function Confirm({ text, color, image, onClick }) {
  return (
    <S.ConfirmContainer color={color} onClick={onClick}>
      <S.Icon image={image} />
      <S.Text>{text}</S.Text>
    </S.ConfirmContainer>
  )
}
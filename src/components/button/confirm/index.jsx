import * as S from './style.jsx'

export default function Confirm({ text, color, image, click }) {
  return (
    <S.ConfirmContainer color={color} onClick={()=>click()}>
      <S.Icon image={image} />
      <S.Text>{text}</S.Text>
    </S.ConfirmContainer>
  )
}
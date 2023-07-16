import { css } from "@emotion/react"
import { FC } from "react"

const cardStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  border: '1px solid white',
  borderRadius: '16px',
  paddingBottom: '8px',
  backgroundColor: 'transparent'
})

const cardImgStyle = css({
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  width: '100%'
})

const cardTitleStyle = css({
  color: 'white'
})

interface CardProps {
  title: string,
  image: string,
  onClick: () => void
}

const Card: FC<CardProps> = ({title, image, onClick}) => {
  return (
    <button css={cardStyle} onClick={onClick}>
      <img css={cardImgStyle} src={image} />
      <p css={cardTitleStyle}>{title}</p>
    </button>
  )
}

export default Card
import styled from 'src/styled'

interface IMarginProps {
  isInline?: boolean
  margin?: string
  horizontal?: number
  vertical?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}

const Margin = styled.div<IMarginProps>`
  ${({ isInline }) =>
    isInline &&
    `
    display: inline;
  `}

  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
  `}

  ${({ horizontal }) =>
    horizontal &&
    `
    margin-left: ${horizontal}rem;
    margin-right: ${horizontal}rem;
  `}

  ${({ vertical }) =>
    vertical &&
    `
    margin-left: ${vertical}rem;
    margin-right: ${vertical}rem;
  `}

  ${({ top }) =>
    top &&
    `
    margin-top: ${top}rem;
  `}

  ${({ right }) =>
    right &&
    `
    margin-right: ${right}rem;
  `}

  ${({ bottom }) =>
    bottom &&
    `
    margin-bottom: ${bottom}rem;
  `}

  ${({ left }) =>
    left &&
    `
    margin-left: ${left}rem;
  `}
`

export default Margin

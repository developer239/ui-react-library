import styled from 'src/styled'
import { css } from 'styled-components'
import { animation } from 'src/styles'
import { hexToRgb } from 'src/utils/color'

const alertColorsMixin = (
  color: string,
  borderColor?: string,
  bgColor?: string
) => css`
  color: ${color};
  border: 0.1rem solid ${hexToRgb(borderColor || color, 0.15)};
  background-color: ${hexToRgb(bgColor || color, 0.15)};
`

export const Container = styled.div<{
  isSuccess?: boolean
  isWarning?: boolean
  isError?: boolean
}>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 1.1rem 3.2rem 1.3rem;
  animation: ${animation.fadeIn} 300ms linear;

  ${({ theme: { color } }) =>
    alertColorsMixin(color.black, color.interface, color.interface)}

  ${({ isSuccess, theme: { color } }) =>
    isSuccess && alertColorsMixin(color.success)}
  ${({ isWarning, theme: { color } }) =>
    isWarning && alertColorsMixin(color.warning)}
  ${({ isError, theme: { color } }) => isError && alertColorsMixin(color.error)}
`

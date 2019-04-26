import styled, { IStyledProps } from 'src/styled'
import { css } from 'styled-components'
import is from 'styled-is'
import { path } from 'ramda'
import { animation } from 'src/styles'
import { hexToRgb } from 'src/utils/color'
import { IContainerProps } from './types'

const alertColorsMixin = (type: string) => ({
  theme: { color },
}: IStyledProps) => css`
  color: ${color[type]};
  border: 0.1rem solid ${hexToRgb(color[type], 0.15)};
  background-color: ${hexToRgb(color[type], 0.15)};
`

export const Container = styled.div<IContainerProps>`
  border-radius: 0.4rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 1.5rem 2rem;
  animation: ${animation.fadeIn} 300ms linear;
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'black'])};
  border: 0.1rem solid ${({ theme }) => hexToRgb(theme.color.interface, 0.15)};
  background-color: ${({ theme }) => hexToRgb(theme.color.interface, 0.15)};

  ${is('isSuccess')`
    ${alertColorsMixin('success')}
  `};

  ${is('isWarning')`
    ${alertColorsMixin('warning')}
  `};

  ${is('isError')`
    ${alertColorsMixin('error')}
  `};
`

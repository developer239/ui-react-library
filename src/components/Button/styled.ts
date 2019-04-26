import styled from 'src/styled'
import is from 'styled-is'
import { path } from 'ramda'
import { darkenLighten } from 'src/utils/color'

export const BaseButton = styled.button<{
  type?: 'primary' | 'success' | 'warning' | 'error'
}>`
  position: relative;
  font-family: ${path(['theme', 'fontFamily'])};
  transition: all 300ms linear;
  padding: 1rem 1.25rem;
  font-size: 1.6rem;
  line-height: 2.1rem;
  background-color: ${({ theme, type }) => theme.color[type || 'interface']};
  color: ${({ theme, type }) => theme.color[type ? 'white' : 'black']};
  opacity: 1;
  border: none;
  border-radius: 0.4rem;
  font-weight: 300;

  ${is('disabled')`
    opacity: 0.6;
  `};

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${({ theme, type, disabled }) =>
      darkenLighten(theme.color[type || 'interface'], disabled ? 0 : -20)};
  }

  &:active {
    background-color: ${({ theme, type, disabled }) =>
      darkenLighten(theme.color[type || 'interface'], disabled ? 0 : 15)};
  }
`

import styled from 'src/styled'
import { darkenLighten } from 'src/utils/color'

export const BaseButton = styled.button<{
  type?: 'primary' | 'success' | 'warning' | 'error'
}>`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily};
  transition: all 300ms linear;
  padding: 0.5em 1em;
  font-size: 1.4rem;
  line-height: 2.1rem;
  background-color: ${({ theme, type }) => theme.color[type || 'interface']};
  color: ${({ theme, type }) => theme.color[type ? 'white' : 'black']};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  border: none;

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  &:hover {
    background-color: ${({ theme, type, disabled }) =>
      darkenLighten(theme.color[type || 'interface'], disabled ? 0 : -20)};
  }

  &:active {
    background-color: ${({ theme, type, disabled }) =>
      darkenLighten(theme.color[type || 'interface'], disabled ? 0 : 20)};
  }
`

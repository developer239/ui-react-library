import { css } from 'styled-components'
import { path } from 'ramda'
import is from 'styled-is'

export const inputMixin = () => css`
  border-radius: 0.4rem;
  font-family: ${({ theme }) => theme.fontFamily};
  display: inline-block;
  font-size: 1.4rem;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 2rem 1rem 1.25rem;
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.interfaceDark};

  &:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.color.primary};

    ${is('error')`
      border-color: ${path(['theme', 'color', 'error'])};
    `}
  }

  ${is('error')`
    color: ${path(['theme', 'color', 'error'])};
    border-color: ${path(['theme', 'color', 'error'])};
  `}

  ${is('disabled')`
    cursor: not-allowed;
    background-color: ${path(['theme', 'color', 'disabledBackground'])};
    color: ${path(['theme', 'color', 'black'])};
  `}
`

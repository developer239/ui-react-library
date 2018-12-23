import styled from 'src/styled'

export const StyledInput = styled.input<{ error?: string }>`
  font-family: ${({ theme }) => theme.fontFamily};
  padding: 0.5em 0.6em;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.color.interfaceDark};
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.black};

  ${({ error, theme: { color } }) =>
    error &&
    `
    color: ${color.error};
    border-color: ${color.error};
  `}

  &:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.color.primary}
      ${({ error, theme: { color } }) =>
        error &&
        `
      border-color: ${color.error};
    `};
  }

  ${({ disabled, theme: { color } }) =>
    disabled &&
    `
    cursor: not-allowed;
    background-color: ${color.disabledBackground};
    color: ${color.disabledColor};
  `}
`

import styled from '../../styled'

export const StyledTextarea = styled.textarea<{ error?: string }>`
  font-family: ${({ theme }) => theme.fontFamily};
  padding: 1rem 0.75em;
  font-size: 1.4rem;
  width: 100%;
  height: 10rem;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.color.interfaceDark};
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.text};

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

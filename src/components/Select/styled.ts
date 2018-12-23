import styled from 'src/styled'

export const StyledSelect = styled.select<{ error?: string }>`
  font-family: ${({ theme }) => theme.fontFamily};
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.color.interfaceDark};
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.black};
  padding: 0.55rem 2rem 0.55rem 0.5rem;

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

  -webkit-appearance: none;
  -webkit-border-radius: 0;
  background-color: ${({ theme }) => theme.color.white};
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({ error, theme }) => (error ? theme.color.error : 'grey')} 50%
    ),
    linear-gradient(
      135deg,
      ${({ error, theme }) => (error ? theme.color.error : 'grey')} 50%,
      transparent 50%
    );
  background-position: calc(100% - 10px) calc(1rem), calc(100% - 5px) calc(1rem);
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
`

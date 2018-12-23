import styled from 'src/styled'

export const Container = styled.div``

export const Label = styled.label<{ for?: string }>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.4rem;
  display: block;
  text-align: left;
  margin: 0 0 0.4em 0;
`

export const Error = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color.error};
  font-size: 1.4rem;
  display: block;
  text-align: left;
  margin: 0.4rem 0 0 0;
`

import styled from 'src/styled'
import { path } from 'ramda'

export const Container = styled.div``

export const Label = styled.label<{ for?: string }>`
  font-family: ${path(['theme', 'fontFamily'])};
  font-size: 1.6rem;
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  font-weight: 300;
`

export const Error = styled.span`
  border-radius: 0.4rem;
  font-family: ${path(['theme', 'fontFamily'])};
  color: ${path(['theme', 'color', 'white'])};
  font-size: 1.4rem;
  font-weight: 300;
  display: block;
  text-align: left;
  margin-top: 0.5rem;
  padding: 1rem 1.2rem;
  background-color: ${path(['theme', 'color', 'error'])};
`

import * as React from 'react'
import { Container, Label, Error } from './styled'
import { InnerProps } from './types'

const FormElement: React.FC<InnerProps> = ({ id, label, error, children }) => (
  <Container>
    {label && <Label for={id}>{label}</Label>}
    {children}
    {error && <Error>{error}</Error>}
  </Container>
)

export default FormElement

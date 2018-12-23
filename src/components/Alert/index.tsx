import * as React from 'react'
import { Container } from './styled'

export interface InnerProps {
  children?: React.ComponentType | string
  isSuccess?: boolean
  isWarning?: boolean
  isError?: boolean
}

const Alert: React.FC<InnerProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
)

export default Alert

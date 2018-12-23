import * as React from 'react'
import { StyledInput } from './styled'
import FormElement from '../FormElement'
import { InnerProps } from './types'

const Input: React.FC<InnerProps> = ({ id, error, label, ...rest }) => (
  <FormElement id={id} error={error} label={label}>
    <StyledInput id={id} error={error} {...rest} />
  </FormElement>
)

export default Input

import * as React from 'react'
import { StyledTextarea } from './styled'
import { InnerProps } from './types'
import FormElement from '../FormElement'

const Textarea: React.FC<InnerProps> = ({ id, error, label, ...rest }) => (
  <FormElement id={id} error={error} label={label}>
    <StyledTextarea id={id} error={error} {...rest} />
  </FormElement>
)

export default Textarea

import styled from 'src/styled'
import { inputMixin } from '../FormElement/utils'

export const StyledInput = styled.input<{ error?: string }>`
  ${inputMixin()}
`

import styled from 'src/styled'
import { inputMixin } from '../FormElement/utils'

export const StyledTextarea = styled.textarea<{ error?: string }>`
  height: 10rem;

  ${inputMixin()}
`

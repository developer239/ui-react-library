import styled from 'src/styled'
import { inputMixin } from '../FormElement/utils'

export const StyledSelect = styled.select<{ error?: string }>`
  ${inputMixin()}

  -webkit-appearance: none;
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
  background-position: calc(100% - 10px) calc(50%), calc(100% - 5px) calc(50%);
  background-size: 5px 5px, 5px 5px, 1px 1.5rem;
  background-repeat: no-repeat;
`

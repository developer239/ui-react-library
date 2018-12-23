import * as React from 'react'
import { StyledSelect } from './styled'
import { InnerProps } from './types'
import FormElement from '../FormElement'

const Select: React.FC<InnerProps> = ({
  id,
  error,
  label,
  value,
  options,
  ...rest
}) => (
  <FormElement id={id} error={error} label={label}>
    <StyledSelect id={id} error={error} {...rest}>
      {options.map(({ label: optionLabel, value: optionValue }) => (
        <option
          selected={value === optionValue}
          key={optionValue}
          value={optionValue}
        >
          {optionLabel}
        </option>
      ))}
    </StyledSelect>
  </FormElement>
)

export default Select

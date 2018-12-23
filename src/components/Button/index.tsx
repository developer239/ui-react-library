import * as React from 'react'
import { BaseButton } from './styled'
import { InnerProps } from './types'

const Button: React.FC<InnerProps> = ({
  children,
  isLoading,
  disabled,
  ...rest
}) => (
  <BaseButton {...rest} disabled={disabled || isLoading}>
    {isLoading ? '...' : children}
  </BaseButton>
)

export default Button

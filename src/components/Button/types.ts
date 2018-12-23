import * as React from 'react'

export interface IOuterProps {
  type?: 'primary' | 'success' | 'warning' | 'error'
  isLoading?: boolean
}

export type InnerProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IOuterProps

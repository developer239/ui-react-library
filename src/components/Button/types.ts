import * as React from 'react'

export interface IOuterProps {
  bgType?: 'primary' | 'success' | 'warning' | 'error'
  isLoading?: boolean
}

export type InnerProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IOuterProps

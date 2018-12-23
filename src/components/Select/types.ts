import * as React from 'react'

interface IOption {
  label: string
  value: string | number
}

export interface IOuterProps {
  error?: string
  label?: string
  options: IOption[]
}

export type InnerProps = React.InputHTMLAttributes<HTMLSelectElement> &
  IOuterProps

import * as React from 'react'

export interface IOuterProps {
  error?: string
  label?: string
}

export type InnerProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  IOuterProps

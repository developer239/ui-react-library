import styled, { ThemedStyledInterface } from 'styled-components'
import { ITheme } from './styles/theme'

export interface IStyledProps {
  theme: ITheme
}

export default styled as ThemedStyledInterface<ITheme>

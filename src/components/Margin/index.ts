import styled from 'src/styled'
import { path } from 'ramda'
import is from 'styled-is'

interface IMarginProps {
  isInline?: boolean
  margin?: string
  horizontal?: number
  vertical?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}

const Margin = styled.div<IMarginProps>`
  ${is('isInline')`
    display: inline;
  `};

  ${is('margin')`
    margin: ${path(['margin'])};
  `};

  ${is('horizontal')`
    margin-right: ${path(['horizontal'])}rem;
    margin-left: ${path(['horizontal'])}rem;
  `};

  ${is('vertical')`
    margin-top: ${path(['vertical'])}rem;
    margin-bototm: ${path(['horizontal'])}rem;
  `};

  ${is('top')`
    margin-top: ${path(['top'])}rem;
  `};

  ${is('right')`
    margin-right: ${path(['right'])}rem;
  `};

  ${is('bottom')`
    margin-bottom: ${path(['bottom'])}rem;
  `};

  ${is('left')`
    margin-left: ${path(['left'])}rem;
  `};
`

export default Margin

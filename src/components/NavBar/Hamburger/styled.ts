import styled from 'src/styled'
import is from 'styled-is'
import { path } from 'ramda'
import { mq } from 'src/styles'

export const HamburgerComponent = styled.svg<{ onClick?: () => void }>`
  display: block;
  cursor: pointer;
  margin-left: 1.5rem;

  ${mq.md} {
    display: none;
  }
`

export const ToggleComponent = styled.g`
  fill: ${path(['theme', 'color', 'white'])};
  pointer-events: all;
  cursor: pointer;
`

export const Bar = styled.path<{ isOpen?: boolean }>`
  transform: rotate(0);
  opacity: 1;
  transform-origin: 2rem 1rem;
  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;

  &:nth-of-type(1) {
    transform-origin: 2rem 1rem;

    ${is('isOpen')`
      transform:rotate(-45deg) translateY(0) translateX(0);
    `};
  }

  &:nth-of-type(2) {
    ${is('isOpen')`
      opacity: 0;
    `};
  }

  &:nth-of-type(3) {
    transform-origin: 2rem 2rem;

    ${is('isOpen')`
      transform: rotate(45deg) translateY(0em) translateX(0em);
    `};
  }
`

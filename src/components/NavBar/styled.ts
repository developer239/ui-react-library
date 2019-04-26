import styled from 'src/styled'
import is from 'styled-is'
import { path } from 'ramda'
import { mq } from 'src/styles'

export const Container = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  background-color: ${path(['theme', 'color', 'primary'])};
`

export const LinksContainer = styled.div<{ isOpen?: boolean }>`
  display: none;
  flex-direction: column;
  width: 100%;

  ${is('isOpen')`
    display: flex;
  `}

  ${mq.md} {
    display: flex;
    flex-direction: row;
  }
`

export const StyledLink = styled.a<{ isOpen?: boolean; isActive?: boolean }>`
  color: ${path(['theme', 'color', 'white'])};
  font-family: ${path(['theme', 'fontFamily'])};
  font-size: 1.5rem;
  line-height: 1.6rem;
  border-bottom: 0.1rem solid ${path(['theme', 'color', 'white'])};
  padding: 2.2rem 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 250ms linear;
  text-decoration: none;

  &:hover {
    background-color: ${path(['theme', 'color', 'secondary'])};
    color: ${path(['theme', 'color', 'white'])};
  }

  ${mq.md} {
    border-bottom: none;
    width: auto;
    font-size: 1.5rem;
    line-height: 1.6rem;
    text-transform: uppercase;
    padding: 2.2rem 2.4rem;
  }

  ${is('isActive')`
    color: ${path(['theme', 'color', 'white'])};
    background-color: ${path(['theme', 'color', 'primary'])};

    &:visited {
      color: ${path(['theme', 'color', 'white'])};
    }
  `}
`

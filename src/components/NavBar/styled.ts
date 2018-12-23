import styled from 'src/styled'
import { mq } from 'src/styles'

export const Container = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
`

export const LinksContainer = styled.div<{ isOpen?: boolean }>`
  display: none;
  flex-direction: column;
  width: 100%;

  ${({ isOpen }) =>
    isOpen &&
    `
    display: flex;
  `};

  ${mq.md} {
    display: flex;
    flex-direction: row;
  }
`

export const StyledLink = styled.a<{ isOpen?: boolean; isActive?: boolean }>`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.6rem;
  line-height: 1.7rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.white};
  padding: 2.2rem 1.6rem;
  width: 100%;
  cursor: pointer;
  transition: all 250ms linear;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
  }

  ${mq.md} {
    border-bottom: none;
    width: auto;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 1.6rem;
    line-height: 1.7rem;
    text-transform: uppercase;
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    color: ${theme.color.primary};

    &:visited {
      color: ${theme.color.primary};
    }
  `};
`

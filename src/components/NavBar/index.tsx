import * as React from 'react'
import { useState } from 'react'
import Hamburger from './Hamburger'
import { Container, LinksContainer, StyledLink } from './styled'

export interface ILink {
  id: number
  to: string
  label: string
  component: React.ComponentType
}

interface InnerProps {
  links: ILink[]
  activeRoute: string
}

const NavBar: React.FC<InnerProps> = ({ links, activeRoute }) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleToggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <Container>
      <LinksContainer isOpen={isOpen}>
        {links.map(({ id, label, component, ...restLink }) => (
          <StyledLink
            key={id}
            isOpen={isOpen}
            as={component}
            isActive={
              (activeRoute.startsWith(restLink.to) && restLink.to.length > 1) ||
              restLink.to === activeRoute
            }
            {...restLink}
          >
            {label}
          </StyledLink>
        ))}
      </LinksContainer>
      <Hamburger toggleOpen={handleToggleIsOpen} isOpen={isOpen} />
    </Container>
  )
}

export default NavBar

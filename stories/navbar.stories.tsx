import * as React from 'react'
import styled from 'src/styled'
import { storiesOf } from '@storybook/react'
import NavBar, { ILink } from 'src/components/NavBar'

const LinkComponent: React.FC = ({ children, ...rest }) => (
  <span onClick={() => ({})} {...rest}>
    {children}
  </span>
)

const NAV_LINKS: ILink[] = [
  { id: 1, to: '/', label: 'Home', component: LinkComponent },
  { id: 2, to: '/counter', label: 'Counter', component: LinkComponent },
  { id: 3, to: '/posts', label: 'Blog', component: LinkComponent },
]

const MockContainer = styled.div`
  width: 100%;
`

storiesOf('NavBar', module).add('Default', () => (
  <MockContainer>
    <NavBar activeRoute="/" links={NAV_LINKS} />
  </MockContainer>
))

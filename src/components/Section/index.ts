import styled from 'src/styled'
import { mq } from 'src/styles'

const Layout = styled.section`
  padding: 0 2rem;
  max-width: 80rem;

  ${mq.md} {
    padding: 0 2.4rem;
  }
`

export default Layout

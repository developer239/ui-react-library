import * as React from 'react'
import styled from 'src/styled'

const SpinnerComponent = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
`

const Spinner = () => <SpinnerComponent>loading...</SpinnerComponent>

export default Spinner

import * as React from 'react'
import styled from 'src/styled'
import { animation } from 'src/styles'

const SpinnerComponent = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  border: 0.3rem solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.color.white};
  animation: ${animation.spin} 1.5s linear infinite;
`

const Spinner = () => <SpinnerComponent />

export default Spinner

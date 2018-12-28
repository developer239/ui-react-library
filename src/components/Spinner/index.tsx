import * as React from 'react'
import { path } from 'ramda'
import styled from 'src/styled'
import { animation } from 'src/styles'

const SpinnerComponent = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 0 auto;
  border: 0.3rem solid ${path(['theme', 'color', 'primary'])};
  border-top-color: ${path(['theme', 'color', 'white'])};
  animation: ${animation.spin} 1.5s linear infinite;
`

const Spinner = () => <SpinnerComponent />

export default Spinner

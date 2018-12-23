import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Alert from '../src/components/Alert'

const Block = styled.div`
  margin-bottom: 1rem;
`

storiesOf('Alert', module).add('Types', () => (
  <React.Fragment>
    <Block>
      <Alert>Default alert message.</Alert>
    </Block>
    <Block>
      <Alert isSuccess>Success alert message.</Alert>
    </Block>
    <Block>
      <Alert isWarning>Warning alert message.</Alert>
    </Block>
    <Block>
      <Alert isError>Error alert message.</Alert>
    </Block>
  </React.Fragment>
))

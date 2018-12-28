import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from 'src/components/Alert'
import Margin from 'src/components/Margin'

storiesOf('Alert', module).add('Types', () => (
  <React.Fragment>
    <Margin bottom={1}>
      <Alert>Default alert message.</Alert>
    </Margin>
    <Margin bottom={1}>
      <Alert isSuccess>Success alert message.</Alert>
    </Margin>
    <Margin bottom={1}>
      <Alert isWarning>Warning alert message.</Alert>
    </Margin>
    <Margin bottom={1}>
      <Alert isError>Error alert message.</Alert>
    </Margin>
  </React.Fragment>
))

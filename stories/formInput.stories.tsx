import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Input from 'src/components/Input'

storiesOf('Form Input', module)
  .add('Default [text]', () => (
    <Input id="someId" label="Some Label" placeholder="Some Placeholder" />
  ))
  .add('Default [number]', () => (
    <Input id="someId" label="Some Label" placeholder="1" type="number" />
  ))
  .add('Filled', () => (
    <Input id="someId" label="Some Label" value="Some Value" />
  ))
  .add('Error', () => (
    <Input
      id="someId"
      label="Some Label"
      value="Some Value"
      error="Some Error"
    />
  ))
  .add('Disabled', () => (
    <Input id="someId" label="Some Label" value="Disabled Value" disabled />
  ))

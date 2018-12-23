import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Textarea from '../src/components/Textarea'

storiesOf('Form Textarea', module)
  .add('Default [text]', () => (
    <Textarea id="someId" label="Some Label" placeholder="Some Placeholder" />
  ))
  .add('Filled', () => (
    <Textarea id="someId" label="Some Label" value="Some Value" />
  ))
  .add('Error', () => (
    <Textarea
      id="someId"
      label="Some Label"
      value="Some Value"
      error="Some Error"
    />
  ))
  .add('Disabled', () => (
    <Textarea id="someId" label="Some Label" value="Disabled Value" disabled />
  ))

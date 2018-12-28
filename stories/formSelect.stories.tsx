import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Select from 'src/components/Select'

const options = [
  { value: 1, label: 'first option' },
  { value: 2, label: 'second option' },
  { value: 3, label: 'third option' },
  { value: 4, label: 'fourth option' },
  { value: 5, label: 'fifth option' },
  { value: 6, label: 'some really long option text' },
]

storiesOf('Form Select', module)
  .add('Default', () => (
    <Select id="someId" label="Some Label" options={options} />
  ))
  .add('Selected', () => (
    <Select id="someId" label="Some Label" options={options} value={3} />
  ))
  .add('Error', () => (
    <Select
      id="someId"
      label="Some Label"
      options={options}
      value={3}
      error="Some Error"
    />
  ))
  .add('Disabled', () => (
    <Select
      id="someId"
      label="Some Label"
      options={options}
      value={3}
      disabled
    />
  ))

import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Button from '../src/components/Button'

const Block = styled.div`
  margin-bottom: 1rem;

  button {
    margin-right: 0.5rem;
  }
`

storiesOf('Button', module).add('Types', () => (
  <React.Fragment>
    <Block>
      <Button>Default</Button>
      <Button disabled>Default [disabled]</Button>
      <Button isLoading>Default [loading]</Button>
    </Block>
    <Block>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary [disabled]
      </Button>
      <Button type="primary" isLoading>
        Primary [loading]
      </Button>
    </Block>
    <Block>
      <Button type="success">Success</Button>
      <Button type="success" disabled>
        Success [disabled]
      </Button>
      <Button type="success" isLoading>
        Success [loading]
      </Button>
    </Block>
    <Block>
      <Button type="warning">Warning</Button>
      <Button type="warning" disabled>
        Warning [disabled]
      </Button>
      <Button type="warning" isLoading>
        Warning [loading]
      </Button>
    </Block>
    <Block>
      <Button type="error">Error</Button>
      <Button type="error" disabled>
        Error [disabled]
      </Button>
      <Button type="error" isLoading>
        Error [loading]
      </Button>
    </Block>
  </React.Fragment>
))

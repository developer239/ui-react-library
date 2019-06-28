import * as React from 'react'
import styled from 'src/styled'
import { storiesOf } from '@storybook/react'
import Button from 'src/components/Button'

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
      <Button bgType="primary">Primary</Button>
      <Button bgType="primary" disabled>
        Primary [disabled]
      </Button>
      <Button bgType="primary" isLoading>
        Primary [loading]
      </Button>
    </Block>
    <Block>
      <Button bgType="success">Success</Button>
      <Button bgType="success" disabled>
        Success [disabled]
      </Button>
      <Button bgType="success" isLoading>
        Success [loading]
      </Button>
    </Block>
    <Block>
      <Button bgType="warning">Warning</Button>
      <Button bgType="warning" disabled>
        Warning [disabled]
      </Button>
      <Button bgType="warning" isLoading>
        Warning [loading]
      </Button>
    </Block>
    <Block>
      <Button bgType="error">Error</Button>
      <Button bgType="error" disabled>
        Error [disabled]
      </Button>
      <Button bgType="error" isLoading>
        Error [loading]
      </Button>
    </Block>
  </React.Fragment>
))

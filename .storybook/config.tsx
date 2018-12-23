import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyles } from '../src/styles'
import theme from '../src/styles/theme'

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

const GlobalStyle = createGlobalStyles()

addDecorator(
  story => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {story()}
      </React.Fragment>
    </ThemeProvider>
  ))

configure(loadStories, module)

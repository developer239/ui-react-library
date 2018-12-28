import { createGlobalStyle } from 'styled-components'

const createGlobalStyles = () => createGlobalStyle`
  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    min-height: 100%;
    min-width: 326px;
  }
`

export default createGlobalStyles

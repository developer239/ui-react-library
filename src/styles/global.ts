import { createGlobalStyle } from 'styled-components'

const createGlobalStyles = () => createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);

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

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Serif', serif;
    list-style: none;
    text-decoration: none;
    // overflow: hidden;
  }
  body {
    background-color: #FFF8F2;
  }
`
export default GlobalStyle

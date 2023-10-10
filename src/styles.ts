import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  white: '#FFFFFF',
  lightGray: '#FFEBD9',
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Serif', serif;
    list-style: none;
    text-decoration: none;
    // overflow: hidden;
  }
  body {
    background-color: #FFF8F2;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }
`


export default GlobalStyle

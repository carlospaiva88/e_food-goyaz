import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  white: '#FFFFFF',
  lightGray: '#FFEBD9',
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
    background-color: #ebebeb;
    max-width: 1366px;
  }
`
export const ContainerHome = styled.div`
  width: 100%;

`

export default GlobalStyle

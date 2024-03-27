import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  lightRed: '#E66767',
  lightBeige: '#FFF8F2',
  beige: '#FFEBD9',
  white: '#FFF'
}
export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.lightRed};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export const Button = styled.button`
  margin-top: 8px;
  padding: 4px 0;
  width: 100%;
  color: ${colors.lightRed};
  background-color: ${colors.beige};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`

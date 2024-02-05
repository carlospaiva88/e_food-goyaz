import styled, { createGlobalStyle } from 'styled-components'
import { ButtonLight } from './Components/Button/styles'

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

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.7;
`
export const CartContainer = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;



  &.is-open {
    display: flex;
  }

  h2 {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    text-align: center;
    color: ${colors.red};
    padding-top: 8px;
    margin-bottom: 16px;
    color: white;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;

  }
`
export const SideBar = styled.div`

  background-color: ${colors.red};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  height: 100%;


`
export default GlobalStyle

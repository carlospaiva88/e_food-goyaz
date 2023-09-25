import styled from 'styled-components'
import imgBanner from '../assets/images/fundo.png'
import { breakpoints, colors } from '../styles'

export const FooterR = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBanner});
  color: ${colors.lightGray};
  padding: 60px;


  p {
    font-family: Roboto;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: ${colors.red};
    margin: 40px;


  }
`
export const Icons = styled.div`
  color: ${colors.red};
  margin-top: 30px;
  display: flex;

  div {
    margin-right: 5px;
  }
  `

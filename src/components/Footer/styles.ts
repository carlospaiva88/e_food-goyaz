import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.beige};
  height: 300px;

  p {
    font-size: 10px;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 40px;
  }
`
export const FooterImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 125px;
    padding-top: 40px;
  }
`

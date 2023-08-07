import styled from 'styled-components'
import imgBanner from '../../assets/images/fundo.png'

export const ContainerHome = styled.div`
  max-width: 1366px;
  width: 100%;
`
export const Hero = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-image: url(${imgBanner});
  color: #ffebd9;
  width: 100%;
`
export const TitleHero = styled.p`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  color: #e66767;
`

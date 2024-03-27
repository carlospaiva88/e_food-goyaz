import logo from '../../assets/images/logo.png'
import social_media from '../../assets/images/social_media.png'
import { FooterImages, Container } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterImages>
        <img src={logo} alt="logo" />
        <img src={social_media} alt="redes sociais" />
      </FooterImages>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </Container>
)

export default Footer

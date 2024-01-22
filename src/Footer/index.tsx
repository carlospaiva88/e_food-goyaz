import logo from '../assets/images/logo.jpg'
import { FooterR, Icons } from './styles'
import { FaInstagram, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer = () => (
  <>
        <FooterR>
          <div>
            <img />
            <img src={logo} />
          </div>
        <Icons>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaGoogle />
          </div>
          <div>
            <FaFacebook />
          </div>

        </Icons>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos,
          a responsabilidade pela entrega,
          qualidade dos produtos é toda do estabelecimento contratado.
        </p>
        </FooterR>


  </>
)

export default Footer

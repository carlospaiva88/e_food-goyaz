import logo from '../../assets/images/logo.png'
import backImage from '../../assets/images/fundo.png'
import { Image } from './styles'
import { Link } from 'react-router-dom'

export const HeaderPrincipal = () => (
  <Image style={{ backgroundImage: `url(${backImage})` }}>
    <div className="container">
      <div>
        <Link to={'/'}>
          <img src={logo} alt="logo efood" />
        </Link>

      </div>
      <h1>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </h1>
    </div>
  </Image>
)

export default HeaderPrincipal

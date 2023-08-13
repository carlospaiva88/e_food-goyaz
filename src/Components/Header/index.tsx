import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { ContainerHome } from '../../styles'
import { Hero, TitleHero } from './styles'
const Header = () => (
  <>
    <ContainerHome>
      <Hero>
        <div>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </div>
        <TitleHero>
          Viva experiências gastronômicas no conforto da sua casa
        </TitleHero>
      </Hero>
    </ContainerHome>
  </>
)

export default Header

import logo from '../../assets/images/logo.jpg'
import { ContainerHome, Hero, TitleHero } from './styles'
const Header = () => (
  <>
    <ContainerHome>
      <Hero>
        <div>
          <img />
          <img src={logo} />
        </div>
        <TitleHero>
          Viva experiências gastronômicas no conforto da sua casa
        </TitleHero>
      </Hero>
    </ContainerHome>
  </>
)

export default Header

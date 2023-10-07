import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { Hero, TitleHero } from './styles'
import { ProductProps } from '../../Pages/Product'



const Header: React.FC<ProductProps> = ({ profile }) => {
  return (
    <>
      <div>
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
      </div>
    </>
)}


export default Header

import { Banner, Hero, ProfileTitle} from "./styles"
import logo from '../../assets/images/logo.jpg'
import backgroundPasta from '../../assets/images/backgroundPasta.png'
import { Link } from "react-router-dom"

import Product from "../Product"


const Profile = () => {
  return (
    <>
    <div>
          <Hero>
              <Link to='/'>
              <ProfileTitle>Restaurantes</ProfileTitle>
            </Link>
            <img src={logo} />
            <ProfileTitle>0 produto(s) no carrinho</ProfileTitle>
          </Hero>
          <Banner>
            <img src={backgroundPasta}/>
            <h1>Italiana</h1>
            <h2>La Dolce Vitta Trattoria</h2>
          </Banner>
          <Product />
    </div>
      </>
  )
}
export default Profile

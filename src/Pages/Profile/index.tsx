import { Banner, Hero, ProfileTitle} from "./styles"
import logo from '../../assets/images/logo.jpg'
import { Link, useParams } from "react-router-dom"

import Product, { HeroProps } from "../Product"
import { useEffect, useState } from "react"
import { RestaurantType } from "../../Components/List"


const Profile: React.FC<HeroProps>  = ({ profile: profileHero}) => {
  const { id } = useParams();

  const [profile, setProfile] = useState<RestaurantType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
     fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
     .then((response) => response.json())
     .then((response) => {
       setProfile(response)
       setIsLoading(false)
     })
     .catch((error) => {
       console.log('Error', error)
     })
    },[id, profile])


      if (isLoading) {
        return <h3>Loading...</h3>
      }

  return (
            <>
              <Hero>
                <Link to='/'>
                  <ProfileTitle>Restaurantes</ProfileTitle>
                </Link>
                <img src={logo} />
                <ProfileTitle>0 produto(s) no carrinho</ProfileTitle>
              </Hero>

              <Banner>
                <img src={profile?.capa} />
                <h1>{profile?.tipo}</h1>
                <h2>{profile?.titulo}</h2>
              </Banner>
              <Product profile={profile} />
            </>
  )
}
export default Profile

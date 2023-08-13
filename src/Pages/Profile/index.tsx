import { Banner, Hero, ProfileButton, ProfileCard, ProfileCardList, ProfileTitle} from "./styles"
import logo from '../../assets/images/logo.jpg'
import marguerita from '../../assets/images/marguerita.png'
import backgroundPasta from '../../assets/images/backgroundPasta.png'
import { Link } from "react-router-dom"
import { ContainerHome } from "../../styles"


const Profile = () => (
  <>
  <ContainerHome>
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
      <ProfileCardList>
        <ProfileCard>
          <div>
          <img src={marguerita} alt="" />
          <h2>Pizza Margueritha</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento,
            mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!
          </p>
          <ProfileButton>Adicionar ao carrinho</ProfileButton>
          </div>
        </ProfileCard>
        <ProfileCard>
          <div>
          <img src={marguerita} alt="" />
          <h2>Pizza Margueritha</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento,
            mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!
          </p>
          <ProfileButton>Adicionar ao carrinho</ProfileButton>
          </div>
        </ProfileCard>
        <ProfileCard>
          <div>
          <img src={marguerita} alt="" />
          <h2>Pizza Margueritha</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento,
            mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!
          </p>
          <ProfileButton>Adicionar ao carrinho</ProfileButton>
          </div>
        </ProfileCard>
        <ProfileCard>
          <div>
          <img src={marguerita} alt="" />
          <h2>Pizza Margueritha</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento,
            mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!
          </p>
          <ProfileButton>Adicionar ao carrinho</ProfileButton>
          </div>
        </ProfileCard>
        <ProfileCard>
          <div>
          <img src={marguerita} alt="" />
          <h2>Pizza Margueritha</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento,
            mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!
          </p>
          <ProfileButton>Adicionar ao carrinho</ProfileButton>
          </div>
        </ProfileCard>
        <ProfileCard>
          <div>
          <img src={marguerita} alt="" />
          <h2>Pizza Margueritha</h2>
          <p>
            A clássica Marguerita: molho de tomate suculento,
            mussarela derretida, manjericão fresco e um toque de azeite.
            Sabor e simplicidade!
          </p>
          <ProfileButton>Adicionar ao carrinho</ProfileButton>
          </div>
        </ProfileCard>
      </ProfileCardList>
    </ContainerHome>
    </>
)
export default Profile

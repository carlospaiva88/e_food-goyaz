import { Card, CardList, ContainerCard, TextCard, TitleCard, DetailsContainer } from './styles'
import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'
import star from '../../assets/images/favorite-star.png'
import { Button } from '../Button/styles'
import Tag from '../../Tags'
import { Link, useRoutes, useNavigation, useNavigate } from 'react-router-dom'
import { MenuType } from '../../Pages/Product'
import { useEffect, useState } from 'react'

export interface RestaurantType  {
  id: number
  titulo: string
  cardapio: MenuType[]
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const List = () => {
  const [restaurantData, setRestaurantData] = useState<Array<RestaurantType>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => {
        console.log("It's working", data)
        setTimeout(() => {
          setRestaurantData(data)
          setIsLoading(false)
        }, 0)
      })
      .catch((error) => {
        console.log('Error searching data', error)
      })
  }, [])

  return (
    <ContainerCard>
      <CardList>

        {
        isLoading === true ? <div>Carregando</div> : restaurantData.map((item, index) => (
          <Card key={item.id}>
            <img src={item.capa}  alt={item.titulo} />
              <span>
                  {
                    item.destacado === true
                      ? <Tag size='big'>Destaque da semana</Tag>
                      : null
                  }
              </span>
              <Tag size='big'>{item.tipo}</Tag>
          <TitleCard>
            <h2>{index + 1} - {item.titulo}</h2>
            <div>
                <p>{item.avaliacao}</p>
            <img src={star} alt="" />
            </div>
          </TitleCard>
          <DetailsContainer>
            <TextCard title={item.descricao}>
              {item.descricao}
            </TextCard>
            <Button onClick={ () => {
              navigate(`/profile/${item.id}`);
            } }>Saiba mais</Button>
          </DetailsContainer>
        </Card>
        ))
        }


         {/* <Card>
            <img src={pasta} alt="sushi" />
              <Tag size='big'>Italiana</Tag>
          <TitleCard>
            <h2>La Dolce Vita Trattoria</h2>
            <div>
                <p>4.9</p>
            <img src={star} alt="" />
            </div>
          </TitleCard>
          <div>
            <TextCard>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
            Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
            tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
            sabor inesquecível. Peça já!
            </TextCard>
            <Link to='/profile'>
              <Button>Saiba mais</Button>
            </Link>
          </div>
        </Card> */}

      </CardList>
    </ContainerCard>
  )
}

export default List


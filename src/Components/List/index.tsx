import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Card, CardList, ContainerCard, TextCard, TitleCard, DetailsContainer } from './styles'
import star from '../../assets/images/favorite-star.png'
import { Button } from '../Button/styles'
import Tag from '../../Tags'

import { MenuType } from '../../Pages/Product'


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
        isLoading === true ? <div>Carregando</div> : restaurantData.map((item) => (
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
            <h2>{item.titulo}</h2>
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
      </CardList>
    </ContainerCard>
  )
}

export default List


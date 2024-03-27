import { Restaurant } from '../../pages/Home'
import RestaurantCard from '../RestaurantCard'
import { ListItem, RestaurantsContainer, RestaurantsList } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

export const Restaurants = ({ restaurants }: Props) => {
  return (
    <RestaurantsContainer>
      <div className="container">
        <RestaurantsList>
          {restaurants.map((restaurant) => (
            <ListItem key={restaurant.id}>
              <RestaurantCard
                title={restaurant.titulo}
                category={restaurant.tipo}
                highlight={restaurant.destacado}
                description={restaurant.descricao}
                image={restaurant.capa}
                avaliation={restaurant.avaliacao}
                id={restaurant.id}
              />
            </ListItem>
          ))}
        </RestaurantsList>
      </div>
    </RestaurantsContainer>
  )
}

export default Restaurants

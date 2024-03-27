import DishCard from '../DishCard'
import { CardapioList, MenuItem } from './styles'
import { DishItem } from '../../pages/Home'

export type Props = {
  dishes: DishItem[]
}

const MenuLista = ({ dishes }: Props) => (
  <div className="container">
    <CardapioList>
      {dishes.map((dish) => (
        <MenuItem key={dish.id}>
          <DishCard
            description={dish.descricao}
            name={dish.nome}
            image={dish.foto}
            price={dish.preco}
            id={dish.id}
            portion={dish.porcao}
            dish={dish}
          />
        </MenuItem>
      ))}
    </CardapioList>
  </div>
)

export default MenuLista

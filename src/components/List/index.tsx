import DishCard from '../Product'
import { CardapioList, MenuItem } from './styles'
import { ProductItem } from '../../pages/Home'

export type Props = {
  dishes: ProductItem[]
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

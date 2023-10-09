// import { useDispatch, useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { CartContainer, CartItem, ImgLixeira, Overlay, Prices, SideBar, TotalPrice } from './styles'
import { RootReducer } from '../../store'
import { add, close, remove } from '../../store/reducers/cart'
import { ButtonLight } from '../Button/styles'
import { useEffect } from 'react'
 export const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
      dispatch(close())
    }
    const removeItem = (id: number) => {
      dispatch((remove(id)))
    }
  const getTotalPrice = () => {
    return items.reduce((acumulador, item) => {
      return (acumulador += item.preco * item.quantity)
    }, 0)
  }

  useEffect(() => {
    console.log({ items })
  }, [ items ])

  return (
     <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                 <h2> {item.titulo} </h2>
                <Prices>R${item.preco}</Prices>
              </div>
              {
                item.quantity !== 1 &&
                <div>{item.quantity}</div>
              }
            <ImgLixeira>
                <img src={lixeira} alt="Remover"/>
            </ImgLixeira>
          </CartItem>
          ))}

        </ul>
        <TotalPrice>
            <h3>Valor Total</h3>
            <h4>{formatPrice(getTotalPrice())}</h4>
        </TotalPrice>
          <ButtonLight>Continuar com a entrega</ButtonLight>
      </SideBar>
    </CartContainer>
  )
}

export default Cart

import { useDispatch, useSelector } from 'react-redux'
import { SetStateAction, useEffect, useState } from 'react'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { CartItem, ImgLixeira, Prices, TotalPrice } from './styles'
import { open, close, remove } from '../../store/reducers/cart';
import { ButtonAside } from '../Button/styles'
import AsidePagamento from '../../Pages/Checkout/pagamento'
import AsideCliente from '../../Pages/Checkout/cliente'
import AsideAgradecimento from '../../Pages/Checkout/agradeciment'
import { CartContainer, Overlay, SideBar } from '../../styles'
import { RootState } from '../../store';


export const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }


const Cart = () => {
    const { isOpen, items } = useSelector((state: RootState) => state.cart)
    const [isCheckoutOpen, setCheckoutOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState('cliente')
    const dispatch = useDispatch()

    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
      setIsOpen(true)
    }
    const closeModal = () => {
      setIsOpen(false)
    }

    const openCart = () => {
      console.log('abrindo carrinho..')
      dispatch(open())
      setCheckoutOpen(true)
    }
    const closeCart = () => {
      console.log('fechando carrinho..')
      dispatch(close())
      setCheckoutOpen(false)

    }
    const navigateToPage = (page: SetStateAction<string>) => {
      setCurrentPage(page)
    }
    const removeItem = (id: number | string) => {
      dispatch((remove(Number(id))))
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
      <Overlay  onClick={closeCart}  />
      <SideBar>

      {currentPage === 'cliente' && <AsideCliente isCheckoutOpen={isCheckoutOpen} navigateToPage={navigateToPage} closeCart={closeCart}/>}
      {currentPage === 'pagamento' && <AsidePagamento isCheckoutOpen={isCheckoutOpen} navigateToPage={navigateToPage} />}
      {currentPage === 'agradecimento' && <AsideAgradecimento isCheckoutOpen={isCheckoutOpen} navigateToPage={navigateToPage} closeCart={closeCart}/>}

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
                <img src={lixeira} alt="Remover" onClick={() => removeItem(item.id)}/>
            </ImgLixeira>
          </CartItem>
          ))}

        </ul>
        <TotalPrice>
            <h3>Valor Total</h3>
            <h4>{formatPrice(getTotalPrice())}</h4>
        </TotalPrice>

        <ButtonAside onClick={openCart}>Continuar com a entrega</ButtonAside>
      </SideBar>

    </CartContainer>
  )
}

export default Cart

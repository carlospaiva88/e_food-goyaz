import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'
import backImage from '../../assets/images/fundo.png'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import { Image, LinkHome } from './styles'

const HeaderSec = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Image
        className="desk-display"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className="container">
          <LinkHome to={'/'}>Restaurantes</LinkHome>
          <LinkHome to={'/'}>
            <img src={logo} alt="logo e-food" />
          </LinkHome>
          <span onClick={openCart}>{items.length} produto(s) no carrinho</span>
        </div>
      </Image>
      <Image
        className="mobile-display"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className="container">
          <LinkHome to={'/'}>
            <img src={logo} alt="logo e-food" />
          </LinkHome>
          <LinkHome to={'/'}>Restaurantes</LinkHome>
          <span onClick={openCart}>{items.length} produto(s) no carrinho</span>
        </div>
      </Image>
    </>
  )
}
export default HeaderSec

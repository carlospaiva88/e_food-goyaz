import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import HeaderSec from '../../components/HeaderSec'
import MenuLista from '../../components/MenuList'
import Cart from '../../components/Cart'
import { Restaurant } from '../Home'

const RestaurantePage = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <HeaderSec />
      <Banner
        image={restaurante.capa}
        category={`${
          restaurante.tipo.charAt(0).toUpperCase() + restaurante.tipo.slice(1)
        }`}
        name={restaurante.titulo}
      />
      <MenuLista dishes={restaurante.cardapio} />
      <Cart />
    </>
  )
}

export default RestaurantePage

import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Restaurants from '../../components/Restaurants'

export interface DishItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: DishItem[]
}

const Home = () => {
  const [completeList, setCompleteList] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCompleteList(res))
  }, [])

  return (
    <>
      <Header />
      <Restaurants restaurants={completeList} />
    </>
  )
}

export default Home

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import close from '../../assets/images/close.png'

import { add, open } from '../../store/reducers/cart'
import { DishItem } from '../../pages/Home'

import { Button } from '../../styles'
import * as S from './styles'

type Props = {
  image: string
  price: number
  id: number
  name: string
  description: string
  portion: string
  dish: DishItem
}

type ModalState = {
  isVisible: boolean
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const DishCard = ({
  name,
  description,
  image,
  price,
  portion,
  dish
}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
    setModal({ isVisible: false })
  }

  const getDishDescription = (description: string) => {
    if (description.length > 165) {
      return description.slice(0, 162) + '...'
    }
    return description
  }
  return (
    <>
      <S.CardContainer>
        <img src={image} alt={name} />
        <S.CardText>
          <h4>{name}</h4>
          <p>{getDishDescription(description)}</p>
        </S.CardText>
        <Button type="button" onClick={() => setModal({ isVisible: true })}>
          Mais detalhes
        </Button>
      </S.CardContainer>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img
            src={close}
            alt="icone fechar"
            onClick={() => setModal({ isVisible: false })}
          />
          <S.ModalText>
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <p>
                {description} <br />
                <br /> Serve: de {portion}
              </p>
              <Button type="button" onClick={() => addToCart()}>
                Adicionar ao carrinho - {formatPrice(price)}
              </Button>
            </div>
          </S.ModalText>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => setModal({ isVisible: false })}
        ></div>
      </S.Modal>
    </>
  )
}

export default DishCard

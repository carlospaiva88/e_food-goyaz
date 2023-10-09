import { PropsWithChildren, useState, useEffect } from "react"
import { ModalContent, ModalOverlay} from "./styles"
import { ButtonLight, ButtonModal } from "../Button/styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { add, open } from '../../store/reducers/cart'

interface ModalProps {
  capa: string
  id: number | string
  titulo: string
  descricao: string
  porcao: string
  preco: number
  tabIndex: number
}

const ModalBox = (
  {
    capa,
    descricao,
    id,
    porcao,
    preco,
    titulo,
    tabIndex
  }: PropsWithChildren<ModalProps>
  ) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch((open()))
  }

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <ButtonLight onClick={openModal}>Mais detalhes</ButtonLight>
    {modalIsOpen && (
      <ModalOverlay>
        <ModalContent /*ref={modalRef}*/ tabIndex={tabIndex} className="content" onBlur={() => {
          console.log("ACONTECEU UM BLUR");
          setIsOpen(false);
        }}>
          <span onClick={closeModal}>x</span>
          <img src={ capa } alt="" />
          <div key={ id }>
            <h2>{ titulo }</h2>
            <p>
              { descricao }
                <br />
                <br />
                Serve: { porcao }
            </p>
            <ButtonModal onClick={() => {
                dispatch(add({
                  foto: capa,
                  id,
                  titulo,
                  preco,
                  quantity: 0
                }))
                dispatch(open())
            }}>Adicionar ao carrinho - R$ { preco }</ButtonModal>
          </div>
        </ModalContent>
      </ModalOverlay>
    )}
    </div>
  )
}
export default ModalBox


import { PropsWithChildren, useState, useEffect } from "react"
import { ModalContent, ModalOverlay} from "./styles"
import { ButtonLight } from "../Button/styles"

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
  // const modalRef = useRef<HTMLElement | null>(null)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    // if(modalRef !== null){
    //   (modalRef.current as HTMLElement).focus();
    // }
  }, [])

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
            <ButtonLight>Adicionar ao carrinho - R$ { preco }</ButtonLight>
          </div>
        </ModalContent>
      </ModalOverlay>
    )}
    </div>
  )
}
export default ModalBox


 {/* <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      >

      </Modal> */}

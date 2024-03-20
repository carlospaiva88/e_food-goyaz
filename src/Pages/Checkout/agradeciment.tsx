import { Link } from "react-router-dom"
import { usePurchaseMutation } from "../../services/api"
import { CartContainer, Overlay, SideBar } from "../../styles"
import { ContainerAgradecimento, DivAgradecimento, DivButton } from "./styles"
import { ButtonAside } from "../../Components/Button/styles"



interface AgradecimentoAsideProps {
  isCheckoutOpen: boolean
  navigateToPage: (page: string) => void
  closeCart: any
}

const AsideAgradecimento: React.FC<AgradecimentoAsideProps> = ({ isCheckoutOpen, closeCart }) => {
const [purchase, { data }] = usePurchaseMutation()
console.log(data)

  return (
            <CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
              <Overlay />
              <SideBar>
                <div className="content-wrapper">
                  <ContainerAgradecimento>
                    <span>Pedido realizado - </span>
                    <p>Seu código de pedido: {data?.orderId} </p>
                      <DivAgradecimento>
                          <p>
                          Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                          <br />
                          <br />
                          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                          <br />
                          <br />
                          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                          <br />
                          <br />
                          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                          <br />
                          <br />
                          </p>
                        <DivButton>
                          <Link to={'/'}>
                            <ButtonAside onClick={closeCart}>Concluir</ButtonAside>
                          </Link>
                        </DivButton>
                      </DivAgradecimento>
                  </ContainerAgradecimento>
                </div>

              </SideBar>
            </CartContainer>
  )
}

export default AsideAgradecimento

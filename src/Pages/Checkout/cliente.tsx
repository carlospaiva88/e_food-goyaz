import { ButtonAside} from "../../Components/Button/styles";
import { CartContainer, Overlay, SideBar } from "../../styles";
import { ContainerAside, DivButton, DivCep, DivCepContainer, DivNumero } from "./styles";


interface CheckoutProps {
  isCheckoutOpen: boolean
  navigateToPage: (page: string) => void;
  closeCart: any
}

const AsideCliente: React.FC<CheckoutProps> = ({ isCheckoutOpen, navigateToPage, closeCart}) => {

  return isCheckoutOpen ? (
    <div>
      {isCheckoutOpen && (
            <CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
              <Overlay onClick={closeCart} />
              <SideBar>
                    <ContainerAside>
                        <h2>Entrega</h2>
                        <label>Quem irá receber</label>
                        <input type="text" />
                        <label>Endereço</label>
                        <input type="text" />
                        <label>Cidade</label>
                        <input type="text" />
                          <DivCepContainer>
                              <DivCep>
                                <label>Cep</label>
                                <input type="text" />
                              </DivCep>
                              <DivNumero>
                                <label>Número</label>
                                <input type="text" />
                              </DivNumero>
                          </DivCepContainer>
                        <label>Complemento</label>
                        <input type="text" />
                        <DivButton>
                          <ButtonAside onClick={() => navigateToPage('pagamento')}>Continuar com o pagamento</ButtonAside>
                          <ButtonAside onClick={() => navigateToPage('/')}>Voltar para o carrinho</ButtonAside>
                        </DivButton>
                    </ContainerAside>
              </SideBar>
            </CartContainer>
      )}
    </div>
  ): null
}

export default AsideCliente

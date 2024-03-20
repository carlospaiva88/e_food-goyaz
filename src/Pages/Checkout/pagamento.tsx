import { useState } from "react";
import { ButtonAside } from "../../Components/Button/styles";
import { CartContainer, Overlay, SideBar } from "../../styles";
import { ContainerAside, DivButton, DivCard, DivCardCVV, DivCardMonth, DivCardNumber, DivCardYear, DivCardYearMonth, DivCepContainer } from "./styles";
import axios from "axios";

interface AsidePagamentoProps{
  navigateToPage: (page: string, orderId?: string) => void
  isCheckoutOpen: boolean
}

const AsidePagamento: React.FC<AsidePagamentoProps> = ({ navigateToPage, isCheckoutOpen}) => {
  const [clienteData, setClienteData] = useState({
    nome: '',
    numeroCartao: '',
    cvv: '',
    mesVencimento: '',
    anoVencimento: '',
  })


  const handleFinalizarPagamento = async () => {
    try {
      const data = {
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: "string",
          address: {
            description: "string",
            city: "string",
            zipCode: "string",
            number: 12,
            complement: "string"
          }
        },
        payment: {
          card: {
            name: "string",
            number: "string",
            code: 123,
            expires: {
              month: 12,
              year: 1234
            }
          }
        }
      }

      navigateToPage('agradecimento')

    } catch (error) {
      console.error('Erro ao finalizar pagamento:', error)
    }
  }

  return (
          <CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
              <Overlay />
              <SideBar>
                <div className="content-wrapper">
                  <ContainerAside>
                    <h2>Pagamento - Valor a pagar R$ 190,00</h2>
                          <label>Nome no cartão</label>
                          <input type="text"  onChange={(e) => setClienteData({ ...clienteData, nome: e.target.value })} />
                          <DivCard>
                            <DivCardNumber>
                              <label>Número do cartão</label>
                              <input type="text"  onChange={(e) => setClienteData({ ...clienteData, numeroCartao: e.target.value })} />
                            </DivCardNumber>
                            <DivCardCVV>
                              <label>CVV</label>
                              <input type="text"  onChange={(e) => setClienteData({ ...clienteData, cvv: e.target.value })} />
                            </DivCardCVV>
                          </DivCard>
                          <DivCardYearMonth>
                            <DivCardMonth>
                              <label>Mês de vencimento</label>
                              <input type="text"  onChange={(e) => setClienteData({ ...clienteData, mesVencimento: e.target.value })} />
                            </DivCardMonth>
                            <DivCardYear>
                              <label>Ano de vencimento</label>
                              <input type="text"  onChange={(e) => setClienteData({ ...clienteData, anoVencimento: e.target.value })} />
                            </DivCardYear>
                          </DivCardYearMonth>
                          <DivButton>
                            <ButtonAside onClick={handleFinalizarPagamento}>Finalizar pagamento</ButtonAside>
                            <ButtonAside onClick={() => navigateToPage('cliente')}>Editar informações de endereço</ButtonAside>
                          </DivButton>
                </ContainerAside>
                </div>
              </SideBar>
            </CartContainer>
  )
}

export default AsidePagamento;

import { CartContainer, Overlay, SideBar } from "../../styles";

interface AsidePagamentoProps{
  navigateToPage: (page: string) => void
  isCheckoutOpen: boolean
}

const AsidePagamento: React.FC<AsidePagamentoProps> = ({ navigateToPage, isCheckoutOpen}) => {
  return (
          <CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
              <Overlay />
              <SideBar>
              <button onClick={() => navigateToPage('agradecimento')}>Ir para o agradecimento</button>
              <button onClick={() => navigateToPage('cliente')}>Editar informações de endereço</button>
                <h2>Payment is ready to be written</h2>
              </SideBar>
            </CartContainer>
  )
}

export default AsidePagamento;

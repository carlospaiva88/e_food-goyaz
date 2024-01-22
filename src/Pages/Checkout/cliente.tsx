import { CartContainer, Overlay, SideBar } from "../../styles";


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
                <h2>Checkout is ready to be written</h2>
                <button onClick={() => navigateToPage('pagamento')}>Ir para o pagamento</button>
              </SideBar>
            </CartContainer>
      )}
    </div>
  ): null
}

export default AsideCliente

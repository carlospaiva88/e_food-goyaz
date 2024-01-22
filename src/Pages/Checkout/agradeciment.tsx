import { Link } from "react-router-dom";
import { CartContainer, Overlay, SideBar } from "../../styles";


interface AgradecimentoAsideProps {
  isCheckoutOpen: boolean
  navigateToPage: (page: string) => void
  closeCart: any
}
const AsideAgradecimento: React.FC<AgradecimentoAsideProps> = ({ isCheckoutOpen, navigateToPage, closeCart }) => {
  return (
            <CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
              <Overlay />
              <SideBar>
                <h2>Congratulations, you have done a great work and you are ready!</h2>
                <Link to={'/'}>
                  <button onClick={closeCart}>Retornar ao meu p/ realizar + um pedido!</button>
                </Link>
              </SideBar>
            </CartContainer>
  );
};

export default AsideAgradecimento;

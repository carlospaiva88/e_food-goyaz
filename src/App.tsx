import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import GlobalStyle from './styles'
import { RouteS } from './routes'
import { Provider } from 'react-redux'
import store from './store'
import Cart from './Components/Cart'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />

           <RouteS />
            <Footer />
            <Cart />


    </BrowserRouter>
    </Provider>

  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import GlobalStyle from './styles'
import { RouteS } from './routes'

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <div className='container'>
          <RouteS />
      </div>
      <Footer />

    </BrowserRouter>
    </>

  )
}

export default App

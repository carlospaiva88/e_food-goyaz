import Header from './Components/Header'
import List from './Components/List'
import GlobalStyle from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <List />
    </>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyles } from './Global.styles'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

function App() {
  return (
    <>
    
      <GlobalStyles />
      <Header />
      <Container>
      
        <Outlet/>
      
      </Container>
    </>
  )
}

export default App

import { AppRoutes } from './routes'
import { GlobalStyle } from './global.styles'
// import { useState } from 'react'



function App() {
  // const [token, setToken] = useState(null)
  // const handleLogin = () => {
  //   setToken({ login: 'admin' })
  // }
  // const handleLogout = setToken(null)

  return (
    <>
      <GlobalStyle />
 
      <AppRoutes  />
    </>
  )
}

export default App

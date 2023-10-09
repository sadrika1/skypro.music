import { AppRoutes } from './routes'
import { GlobalStyle } from './global.styles'
//import { getTracks } from './api'
// import { useEffect, useState } from 'react'

function App() {
  // const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   if(localStorage.getItem('auth')) {
  //     setIsAuth(true)
  //   }
  // }, [])
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App



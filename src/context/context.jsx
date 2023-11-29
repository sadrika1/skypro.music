import { createContext, useContext, useState } from 'react'
import { fetchLogin } from '../api'

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem('userData')
    return storedUserData ? JSON.parse(storedUserData) : null
  })

  const [error, setError] = useState(null)

  const loginUser = async ({ email, password }) => {
    try {
      const userData = await fetchLogin({ email, password })
      localStorage.setItem('userData', JSON.stryngify(userData))
      setUser(userData)
      setError(null)
    } catch (error) {
      setError(error.message)
      throw error
    }
  }

  const logoutUser = () => {
    setUser(null)
    localStorage.removeItem('userData')
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, setError, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

//context content

// const loginUser = async ({ email, password }) => {
//     try {
//         const userData = await fetchLogin({email, password})
//         localStorage.setItem('userData', JSON.stryngify(userData))
//         setUser(userData)
//     } catch (error) {
//         setError(error.message)
//     }
// }

// const logoutUser = () => {
//     setUser(null)
//     localStorage.removeItem('userData')
// }

// const [isAuth, setIsAuth] = useState(() => {
//     const storedValue = localStorage.getItem('isAuth')
//     return storedValue ? JSON.parse(storedValue) : false
//   })

//   const isLoginMode = () => {
//     setIsAuth(true)
//     localStorage.setItem('isAuth', JSON.stringify(true))
//   }

//   const handleLogout = () => {
//     setIsAuth(false)
//     localStorage.removeItem('isAuth')
//   }

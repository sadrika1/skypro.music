import { useEffect, useState } from 'react'
import * as S from './loginpage.style'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { fetchRegister } from '../../api'
import { useAuthContext } from '../../context/context'

export function Login() {
  const { setUser, loginUser } = useAuthContext()

  const [error, setError] = useState(null)
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [isAuthLoad, setIsAuthLoad] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setIsLoginMode(location.pathname === '/login')
  }, [location.pathname, isLoginMode])

  const handleAuth = async () => {
    if (isLoginMode) {
      if (!email || !password) {
        setError('Введите логин или пароль!')
        return
      }
      try {
        setIsAuthLoad(true)
        await loginUser({ email, password })
        setIsAuthLoad(false)
        navigate('/', { replace: true })
      } catch (error) {
        setError(error.message)
        setIsAuthLoad(false)
      }
    } else {
      if (!email || !password) setError('Заполните обязательные поля')
      return
    }
    if (repeatPassword !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }
    try {
      setIsAuthLoad(true)
      const userData = await fetchRegister({ email, password, username })
      localStorage.setItem('userData', JSON.stringify(userData))
      setIsLoginMode(true)
      setUser(userData)
      setError(null)
      setIsAuthLoad(false)
      navigate('/', { replace: true })
    } catch (error) {
      setError(error.message || 'Ошибка регистрации')
      setIsAuthLoad(false)
    }
  }

  // const handleLogin = async ({ email, password }) => {
  //   if (!email || !password) {
  //     setError('Введите логин или пароль')
  //     return;
  //   }
  //   try {
  //     setIsAuthLoad(true)
  //     await loginUser({ email, password })
  //     setIsAuthLoad(false)
  //     navigate('/', {replace: true})
  //   } catch (error) {
  //     console.log(email, password);
  //     navigate('/', {replace: true})
  //     setError(error.message)
  //     setIsAuthLoad(false)
  //   }
  // }

  // const handleRegister = async () => {
  //   if (!email || !password) {
  //     setError('Пожалуйста, заполните обязательные поля');
  //     return
  //   }
  //   if (repeatPassword !== password) {
  //     setError('Пароли не совпадают')
  //     return
  //   }
  //   try {
  //     setIsAuthLoad(true)
  //     const userData = await fetchRegister({email, password})
  //     localStorage.setItem('userData', JSON.stryngify(userData))
  //     setIsLoginMode(true)
  //     setUser(userData)
  //     setError(null)
  //     setIsAuthLoad(false)
  //     navigate('/', {replace: true})
  //   } catch (error) {
  //     setError(error.message || 'Ошибка регистрации')
  //   }
  //   setError('ошибка регистации')
  // }
  // сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.Wrapper>
      <S.MainLogin>
        <S.ModalLogin>
          <Link to="/login">
            <S.Logo src="img/logo_modal.png" alt="Logo"></S.Logo>
          </Link>
          {isLoginMode ? (
            <>
              <S.ModalInput
                placeholder="Имя пользователя"
                type="text"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <S.ModalInput
                placeholder="Почта"
                type="email"
                name="login"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                placeholder="Пароль"
                type="password"
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              {error && <S.Error>{error}</S.Error>}
              <S.LoginButton onClick={handleAuth} disabled={isAuthLoad}>
                Войти
              </S.LoginButton>
              <Link to="/register">
                <S.SingupButton >
                  Зарегистрироваться
                </S.SingupButton>
              </Link>
            </>
          ) : (
            <>
              <S.ModalInput
                placeholder="Имя пользователя"
                type="text"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <S.ModalInput
                placeholder="Почта"
                type="email"
                name="login"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                placeholder="Пароль"
                type="password"
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                placeholder="Повторите пароль"
                type="password"
                name="password"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
              {error && <S.Error>{error}</S.Error>}
              <Link to="/register">
                <S.SingupButton onClick={handleAuth}>
                  Зарегистрироваться
                </S.SingupButton>
              </Link>
            </>
          )}
        </S.ModalLogin>
      </S.MainLogin>
    </S.Wrapper>
  )
}

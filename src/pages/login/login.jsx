import { useState } from 'react';
import * as S from './loginpage.style'
import { Link } from 'react-router-dom'


export function Login() {
  const [user, setUser] = useState(
    localStorage.getItem('user') !== null
  );

  const handleLogin = () => {
    localStorage.setItem('user'),
    setUser(true)
  };
  
  return (
    <S.Wrapper>
      <S.MainLogin>
        <S.ModalLogin>
          <S.Logo src="img/logo_modal.png" alt="Logo"></S.Logo>
          <S.ModalInput placeholder="Почта"></S.ModalInput>
          <S.ModalInput placeholder="Пароль"></S.ModalInput>
          <Link to="/home">
            <S.LoginButton onClick={handleLogin}>Войти</S.LoginButton>
          </Link>
          <Link to="/register">
            <S.SinupButton>Зарегистрироваться</S.SinupButton>
          </Link>
        </S.ModalLogin>
      </S.MainLogin>
    </S.Wrapper>
  )
}

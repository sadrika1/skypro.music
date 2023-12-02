import { Link } from 'react-router-dom'
import { useState } from 'react';
import * as S from './navigation.styles'
import { useAuthContext } from '../../context/context';


 const Navigation = () => {
  const {logoutUser} = useAuthContext()
  const [menuActive, setMenuActive] = useState(false) // по дефолту меню закрыто
  const menuClose = () => {
    setMenuActive(!menuActive)
  }
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="./img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={menuClose}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {menuActive && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem >
              <Link to="/home"><S.MenuLink>Главная</S.MenuLink></Link>
            </S.MenuItem>
            <S.MenuItem >
              <Link to="/myplaylist"><S.MenuLink>Мой плейлист</S.MenuLink></Link>
            </S.MenuItem>
            <S.MenuItem onClick={logoutUser}>
              <Link to="/login"><S.MenuLink>Выйти</S.MenuLink></Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
};

export default Navigation;
import { useState } from 'react'
import * as S from './navigation.styles'

export default function Navigation() {
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
              <S.MenuLink href="#">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem >
              <S.MenuLink href="#" >Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem >
              <S.MenuLink href="../signin.html">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}
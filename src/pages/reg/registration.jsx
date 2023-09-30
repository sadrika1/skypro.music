import * as S from "./regpage.style"
import { Link } from "react-router-dom"

export const Register = () => {
    return(
        <S.Wrapper>
        <S.MainLogin>
          <S.ModalLogin>
            <S.Logo src="img/logo_modal.png" alt="Logo"></S.Logo>
            <S.ModalInput placeholder="Почта"></S.ModalInput>
            <S.ModalInput placeholder="Пароль"></S.ModalInput>
            <S.ModalInput placeholder="Повторите пароль"></S.ModalInput>
            <Link to="/home">
              <S.SinupButton>Зарегистрироваться</S.SinupButton>
            </Link>
          </S.ModalLogin>
        </S.MainLogin>
      </S.Wrapper>
    )
}
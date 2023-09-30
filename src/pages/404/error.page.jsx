import * as S from './404page.style'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.MainErrorPage>
        <S.ErrorBlock>
          <S.ErrorNumber>404</S.ErrorNumber>
          <S.ErrorMessage>
            Страница не найдена
            <S.CryingImg src="img/crying.svg" />
          </S.ErrorMessage>
          <S.AnotherErrorMessage>Возможно, она была удалена или перенесена на другой адрес</S.AnotherErrorMessage>
          <Link to="/home"><S.ReturnButton>Вернуться на главную</S.ReturnButton></Link>
        </S.ErrorBlock>
      </S.MainErrorPage>
    </S.Wrapper>
  )
}

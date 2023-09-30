import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #181818;
`

export const MainErrorPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181818;
  display: flex;
  justify-content: center;
`
export const ErrorBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ErrorNumber = styled.span`
  width: 255px;
  height: 168px;
  font-size: 160px;
  line-height: 168px;
  color: white;
`
export const ErrorMessage = styled.span`
  display: flex;
  color: white;
  font-size: 32px;
`
export const CryingImg = styled.img`
  width: 52px;
  height: 52px;
`
export const AnotherErrorMessage = styled.span`
  width: 272px;
  color: #4e4e4e;
  font-size: 18px;
  text-align: center;
`
export const ReturnButton = styled.button`
  width: 278px;
  height: 52px;
  border: none;
  border-radius: 10px;
  background: #580ea2;
  color: #ffffff;
  margin-top: 40px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`

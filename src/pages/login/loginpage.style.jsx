import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const MainLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181818;
  display: flex;
  align-items: center;
`

export const ModalLogin = styled.div`
  width: 366px;
  height: 439px;
  background: white;
  margin: auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  padding-top: 43px;
  padding-bottom: 20px;
`
export const ModalInput = styled.input`
  border-top: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  border-left: none;
  width: 278px;
  padding-top: 35px;
  padding-bottom: 10px;
  box-sizing: border-box;
  outline: none;
  font-size: 1.1rem;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`

export const LoginButton = styled.button`
  width: 278px;
  height: 52px;
  border: none;
  border-radius: 10px;
  background: #580ea2;
  color: #ffffff;
  margin-top: 57px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`
export const SingupButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 10px;
  border: 1px solid #d0cece;
  font-size: 18px;
  cursor: pointer;
  background: #ffffff;
  margin-top: 20px;

  &:hover {
    background-color: #e9e9e9;
  }

  &:active {
    background-color: #d0cece;
  }
`
export const Error = styled.div`
  color: coral;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`

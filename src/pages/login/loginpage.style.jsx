// import styled from 'styled-components'

// export const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `

// export const MainLogin = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: #181818;
//   display: flex;
//   align-items: center;
// `

// export const ModalLogin = styled.div`
//   width: 366px;
//   height: 439px;
//   background: white;
//   margin: auto;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// export const Logo = styled.img`
//   padding-top: 43px;
//   padding-bottom: 20px;
// `
// export const ModalInput = styled.input`
//   border-top: none;
//   border-right: none;
//   border-bottom: 1px solid #d0cece;
//   border-left: none;
//   width: 278px;
//   padding-top: 35px;
//   padding-bottom: 10px;
//   box-sizing: border-box;
//   outline: none;
//   font-size: 1.1rem;

//   &::placeholder {
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 24px;
//     letter-spacing: -0.05px;
//     color: #d0cece;
//   }
// `

// export const LoginButton = styled.button`
//   width: 278px;
//   height: 52px;
//   border: none;
//   border-radius: 10px;
//   background: #580ea2;
//   color: #ffffff;
//   margin-top: 57px;
//   font-size: 18px;
//   cursor: pointer;

//   &:hover {
//     background-color: #3f007d;
//   }

//   &:active {
//     background-color: #271a58;
//   }
// `
// export const SingupButton = styled.button`
//   width: 278px;
//   height: 52px;
//   border-radius: 10px;
//   border: 1px solid #d0cece;
//   font-size: 18px;
//   cursor: pointer;
//   background: #ffffff;
//   margin-top: 20px;

//   &:hover {
//     background-color: #e9e9e9;
//   }

//   &:active {
//     background-color: #d0cece;
//   }
// `
// export const Error = styled.div`
//   color: coral;
//   font-weight: 400;
//   line-height: 24px;
//   text-align: center;
// `

import { styled } from "styled-components";

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;

  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
`;
export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const ModalLogoImage = styled.img`
  width: 140px;
  height: 21px;
`;

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;
export const SecondaryButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
  text-decoration: none;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`;
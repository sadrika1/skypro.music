import styled, { keyframes } from 'styled-components'

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 210px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
`
// .sidebar__item:not(:last-child) {
//     margin-bottom: 30px;
//   }

export const SidebarLink = styled.span`
  width: 100%;
  height: 100%;
`
export const SidebarImage = styled.img`
  width: 100%;
  height: auto;
`
const loading = keyframes`
  from {
    background-color: #313131;
  }

  50% {
    background-color: #464545;
  }

  to {
    background-color: #313131;
  }
`
export const SidebarLoad = styled.div`
  width: 250px;
  height: 150px;
  animation: ${loading} 2s infinite;
`

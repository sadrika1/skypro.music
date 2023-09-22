import styled from 'styled-components'

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px
`
export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
`
// .sidebar__item:not(:last-child) {
//     margin-bottom: 30px;
//   }

export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`
export const SidebarImage = styled.img`
  width: 100%;
  height: auto;
`

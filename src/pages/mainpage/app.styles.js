import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
}
`
export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const MainCentroBlock = styled.div`
  width: auto;
  flex-grow: 3;
  // padding: 20px 40px 20px 111px;
`
export const CentroBlockContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const PlaylistContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 100px
`
export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`
export const SidebarPersonality = styled.div`

`
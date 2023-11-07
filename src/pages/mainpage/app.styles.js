import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`
export const Main = styled.main`
  flex: 1 1 auto;
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

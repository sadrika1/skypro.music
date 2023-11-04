import { AppRoutes } from './routes'
import { GlobalStyle } from './global.styles'
import { useState } from 'react'

function App() {
  const [selectedTrack, setSelectedTrack] = useState(null)

  return (
    <>
      <GlobalStyle />
      <AppRoutes
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </>
  )
}

export default App

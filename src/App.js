import './App.css'
import PlaylistItem from './components/PlaylistItem'
import Navigation from './components/Navigation'
import SongsInfo from './components/SongsInfo'
import Serching from './components/Searching'
import SidebarPersonality from './components/PersonalSidebar'
import SidebarPlaylist from './components/Sidebar'
import Playingbar from './components/Playingbar'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <div className="main__centerblock centerblock">
            <Serching />
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__content">
              <SongsInfo />
              <div className="content__playlist playlist">
                <PlaylistItem
                  trackname="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  timetrack="2:22"
                />
                <PlaylistItem
                  trackname="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  timetrack="2:22"
                />
                <PlaylistItem
                  trackname="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  timetrack="2:22"
                />
                <PlaylistItem
                  trackname="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  timetrack="2:22"
                />
                <PlaylistItem
                  trackname="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  timetrack="2:22"
                />
                <PlaylistItem
                  trackname="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  timetrack="2:22"
                />
                <PlaylistItem
                  trackname="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  timetrack="2:22"
                />
              </div>
            </div>
          </div>
          <div className="main__sidebar sidebar">
          <SidebarPersonality userName="Sergey.Ivanov"/>
          <SidebarPlaylist/>
          </div>
        </main>
        <Playingbar/>
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App

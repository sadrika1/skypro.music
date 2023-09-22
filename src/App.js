import './App.css'
import PlaylistItem from './components/playlistitems/PlaylistItem'
import Navigation from './components/nav/Navigation'
import SongsInfo from './components/SongsInfo'
import Serching from './components/search/Searching'
import SidebarPersonality from './components/sidebars/PersonalSidebar'
import SidebarPlaylist from './components/sidebars/Sidebar'
import Playingbar from './components/playingbar/Playingbar'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true);
  const isLoading = () => setLoading(!loading);

  useEffect(() => {
    const timeLoading = setTimeout(() => {
      isLoading()
    }, 5000);

    return () => {clearTimeout(timeLoading)}
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <div className="main__centerblock centerblock">
            <Serching />
            
            <div className="centerblock__content">
              <SongsInfo />
              <div className="content__playlist playlist">
                <PlaylistItem
                  trackname="Knives n Cherries"
                  author="minthaze"
                  album="Captivating"
                  timetrack="2:22"
                  load={loading}
                />
                <PlaylistItem
                  trackname="I'm Fire"
                  author="Ali Bakgor"
                  album="I'm Fire"
                  timetrack="4:22"
                  load={loading}
                />
                <PlaylistItem
                  trackname="Non Stop"
                  author="Psychopath"
                  album="Non Stop"
                  timetrack="3:12"
                  load={loading}
                />
                <PlaylistItem
                  trackname="Guilt"
                  author="Nero"
                  album="Welcome Reality"
                  timetrack="2:46"
                  load={loading}
                />
                <PlaylistItem
                  trackname="Morena"
                  author="Tom Boxer"
                  album="Soundz Made in Romania"
                  timetrack="2:54"
                  load={loading}
                />
                <PlaylistItem
                  trackname="How Deep Is Your Love"
                  author="Calvin Harris, Disciples"
                  album="How Deep Is Your Love"
                  timetrack="2:22"
                  load={loading}
                />
                <PlaylistItem
                  trackname="Elektro"
                  author="Dynoro, Outwork, Mr. Gee"
                  album="Elektro"
                  timetrack="2:22"
                  load={loading}
                />
              </div>
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <SidebarPersonality userName="Sergey.Ivanov" />
            <SidebarPlaylist load={loading}/>
          </div>
        </main>
        <Playingbar load={loading}/>
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App

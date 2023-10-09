import * as S from './app.styles'
import PlaylistItem from '../../components/playlistitems/PlaylistItem'
import Navigation from '../../components/nav/Navigation'
import SongsInfo from '../../components/infosongs/SongsInfo'
import Serching from '../../components/search/Searching'
import SidebarPersonality from '../../components/sidebars/PersonalSidebar'
import SidebarPlaylist from '../../components/sidebars/Sidebar'
import Playingbar from '../../components/playingbar/Playingbar'
import { useEffect, useState } from 'react'
//import { getAllTracks } from '../../api'

export function MainPage() {
  const [loading, setLoading] = useState(true)
  const isLoading = () => setLoading(!loading)

  useEffect(() => {
    const timeLoading = setTimeout(() => {
      isLoading()
    }, 1000)

    return () => {
      clearTimeout(timeLoading)
    }
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation />
          <S.MainCentroBlock>
            <Serching />
            <S.CentroBlockContent>
              <SongsInfo />
              <S.PlaylistContent>
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
              </S.PlaylistContent>
            </S.CentroBlockContent>
          </S.MainCentroBlock>
          <S.MainSidebar>
            <SidebarPersonality userName="Sergey.Ivanov" />
            <SidebarPlaylist load={loading} />
          </S.MainSidebar>
        </S.Main>
        <Playingbar load={loading} />
        {/* <footer className="footer"></footer> */}
      </S.Container>
    </S.Wrapper>
  )
}

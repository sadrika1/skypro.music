import * as S from './app.styles'
import PlaylistItem from '../../components/playlistitems/PlaylistItem'
import Navigation from '../../components/nav/Navigation'
import SongsInfo from '../../components/infosongs/SongsInfo'
import Serching from '../../components/search/Searching'
import SidebarPersonality from '../../components/sidebars/PersonalSidebar'
import Playingbar from '../../components/playingbar/Playingbar'
import { useEffect, useState } from 'react'
import Playlists from '../../components/playlists/Playlists'
import { getAllTracks } from '../../api'

export function MainPage({ selectedTrack, setSelectedTrack }) {
  const [tracks, setTracks] = useState([])
  const [tracksError, setTracksError] = useState(null)
  const [loading, setLoading] = useState(true)

  // const getAllTracks = () => {
  //   return new Promise((resolve, reject) => {
  //     reject(new Error('Error fetching tracks'))
  //   })
  // }

  useEffect(() => {
    getAllTracks().then((data) => {
      console.log(data)
      setTracks(data)
    }).catch((error) => {
      setTracksError(error.message)
    })
  }, [])

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
              {tracksError ? (
                <S.ErrorBlock>Не удалось загрузить плейлист, попробуйте позже!</S.ErrorBlock>
              ) : (
                <S.PlaylistContent>
                  {tracks.map((track) => {
                    return (
                      <PlaylistItem
                        setSelectedTrack={setSelectedTrack}
                        key={track.id}
                        track={track}
                        load={loading}
                      />
                    )
                  })}
                </S.PlaylistContent>
              )}
            </S.CentroBlockContent>
          </S.MainCentroBlock>
          <S.MainSidebar>
            <SidebarPersonality userName="Sergey.Ivanov" />
            <Playlists load={loading} />
          </S.MainSidebar>
        </S.Main>
        {selectedTrack && <Playingbar track={selectedTrack} />}
      </S.Container>
    </S.Wrapper>
  )
}

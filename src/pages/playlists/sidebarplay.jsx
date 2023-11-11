import { useParams } from 'react-router-dom'
import { SidebarArray } from '../../components/playlists/constanst'

export function Category() {
  const params = useParams()
  const sidePlay = SidebarArray.find((item) => item.id === Number(params.id))

  const playlistName = sidePlay.title

  return <div>{playlistName}</div>
}

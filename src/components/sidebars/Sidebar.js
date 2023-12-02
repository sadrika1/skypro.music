import { Link } from 'react-router-dom'
import * as S from './sidebar.styled'

export default function SidebarPlaylist(props) {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <Link to="/playlistpage/1">
            {props.load ? (
              <S.SidebarLoad></S.SidebarLoad>
            ) : (
              <S.SidebarLink>
                <S.SidebarImage src="img/playlist01.png" alt="day's playlist" />
              </S.SidebarLink>
            )}
          </Link>
        </S.SidebarItem>
        <S.SidebarItem>
          <Link to="/playlistpage/2">
            {props.load ? (
              <S.SidebarLoad></S.SidebarLoad>
            ) : (
              <S.SidebarLink>
                <S.SidebarImage src="img/playlist02.png" alt="day's playlist" />
              </S.SidebarLink>
            )}
          </Link>
        </S.SidebarItem>
        <S.SidebarItem>
          <Link to="/playlistpage/3">
            {props.load ? (
              <S.SidebarLoad></S.SidebarLoad>
            ) : (
              <S.SidebarLink>
                <S.SidebarImage src="img/playlist03.png" alt="day's playlist" />
              </S.SidebarLink>
            )}
          </Link>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  )
}

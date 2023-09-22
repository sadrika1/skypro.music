import * as S from './sidebar.styled'

export default function SidebarPlaylist(props) {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          {props.load ? (
            <div className="sidebar__skeleton"></div>
          ) : (
            <S.SidebarLink href="#">
              <S.SidebarImage src="img/playlist01.png" alt="day's playlist" />
            </S.SidebarLink>
          )}
        </S.SidebarItem>
        <S.SidebarItem>
          {props.load ? (
            <div className="sidebar__skeleton"></div>
          ) : (
            <S.SidebarLink href="#">
              <S.SidebarImage src="img/playlist02.png" alt="day's playlist" />
            </S.SidebarLink>
          )}
        </S.SidebarItem>
        <S.SidebarItem>
          {props.load ? (
            <div className="sidebar__skeleton"></div>
          ) : (
            <S.SidebarLink href="#">
              <S.SidebarImage src="img/playlist03.png" alt="day's playlist" />
            </S.SidebarLink>
          )}
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  )
}

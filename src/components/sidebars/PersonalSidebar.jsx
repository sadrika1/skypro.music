import styled from 'styled-components'
import { useAuthContext } from '../../context/context'
import { Link } from 'react-router-dom'

export default function SidebarPersonality() {
  const { user, logoutUser } = useAuthContext()
  return (
    <SidebarPersonal>
      <SidebarPersonalName>{user.username}</SidebarPersonalName>
      <LogoutBtn onClick={logoutUser}>
        <Link to="/login">
          <SidebarIcon alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </SidebarIcon>
        </Link>
      </LogoutBtn>
    </SidebarPersonal>
  )
}

const SidebarPersonal = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`
const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`
const SidebarIcon = styled.svg`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`

const LogoutBtn = styled.div``

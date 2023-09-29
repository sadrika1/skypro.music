import styled from 'styled-components'

export default function SongsInfo() {
  return (
    <PlaylistTitle>
      <PlaylistCol_1 >ТРЕК</PlaylistCol_1>
      <PlaylistCol_2 >ИСПОЛНИТЕЛЬ</PlaylistCol_2>
      <PlaylistCol_3 >АЛЬБОМ</PlaylistCol_3>
      <PlaylistCol_4>
        <svg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </PlaylistCol_4>
    </PlaylistTitle>
  )
}

const PlaylistTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

const PlaylistCol_1 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 447px;
`

const PlaylistCol_2 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 321px;
`

const PlaylistCol_3 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 245px;
`

const PlaylistCol_4 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 60px;
  text-align: end;

  & svg {
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
`


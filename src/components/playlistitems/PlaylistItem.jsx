import { useDispatch, useSelector } from 'react-redux'
import * as S from './PlaylistItem.styles'
import { selectSelectedTrack } from '../../store/selectors/tracks'
import { selectTrack } from '../../store/actions/creators/tracks'

export default function PlaylistItem({ load, track }) {
  const dispatch = useDispatch()
  const selectedTrack = useSelector(selectSelectedTrack)
  const handleSelectTrack = (track) => {
    dispatch(selectTrack(track))
  }

  let sec = track.duration_in_seconds % 60
  if (sec < 10) {
    sec = '0' + sec
  }
  let min = ~~(track.duration_in_seconds / 60)

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack onClick={() => handleSelectTrack(track)}>
        <S.TrackTitle>
          {load ? (
            <S.TrackImageLoad />
          ) : (
            <S.TrackTitleImage>
              <S.TrackTitleSVG alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSVG>
            </S.TrackTitleImage>
          )}

          <div>
            {load ? (
              <S.TrackNameLoad></S.TrackNameLoad>
            ) : (
              <S.TrackTitleLink>
                {track.name}
                <span className="track__title-span"></span>
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {load ? (
            <S.TrackAuthorLoad></S.TrackAuthorLoad>
          ) : (
            <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>

        <S.TrackAlbum>
          {load ? (
            <S.TrackAlbumLoad></S.TrackAlbumLoad>
          ) : (
            <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSVG alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSVG>
          {load ? (
            <S.TrackTimeText>00:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>
              {min}:{sec}
            </S.TrackTimeText>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

import * as S from './PlaylistItem.styles'

export default function PlaylistItem(props) {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack >

        <S.TrackTitle>
          {props.load ? (
            <S.TrackImageLoad></S.TrackImageLoad> // add here
          ) : (
            <S.TrackTitleImage >
              <S.TrackTitleSVG alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSVG>
            </S.TrackTitleImage>
          )}

        <div> 
          {props.load ? (
            <S.TrackNameLoad></S.TrackNameLoad>
          ) : (
            <S.TrackTitleLink href="http://">{props.trackname}
              <span className="track__title-span"></span>
            </S.TrackTitleLink>
          )}
        </div>
      </S.TrackTitle>
        <S.TrackAuthor>
          {props.load ? (
            <S.TrackAuthorLoad></S.TrackAuthorLoad>
          ) : (
            <S.TrackAuthorLink href="http://">{props.author}
            </S.TrackAuthorLink>
          )}
        </S.TrackAuthor>

        <S.TrackAlbum>
          {props.load ? (
            <S.TrackAlbumLoad></S.TrackAlbumLoad>
          ) : (
            <S.TrackAlbumLink href="http://">{props.album}
            </S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSVG alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSVG>
          {props.load ? (
            <S.TrackTimeText>00:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>{props.timetrack}</S.TrackTimeText>
          )} 
        </div> 
      </S.PlaylistTrack>
    </S.PlaylistItem>
    
  )
}

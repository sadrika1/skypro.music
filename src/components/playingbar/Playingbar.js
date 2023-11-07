import * as S from './playingbar.styles'

export default function Playingbar(props) {
  const { track } = props;

  if (!track) {
    return null
  }

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerBProgress></S.BarPlayerBProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.BarPLayerControls>
              {/* buttons on player */}
              <S.ButtonPrev>
                <svg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </S.ButtonPrev>
              <S.ButtonPlay>
                <svg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </svg>
              </S.ButtonPlay>
              <S.ButtonNext>
                <svg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </svg>
              </S.ButtonNext>
              <S.ButtonRepeat>
                <svg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </S.ButtonRepeat>
              <S.ButtonShuffle>
                <svg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </S.ButtonShuffle>
            </S.BarPLayerControls>

            <S.PlayerTrack>
              <S.PlayerTrackContain>
                <S.PlayerTrackImage>
                  <svg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </S.PlayerTrackImage>
                <S.TrackPlayName><span>{track.name}</span></S.TrackPlayName>
                <S.TrackPlayAuthor><span>{track.author}</span></S.TrackPlayAuthor>
              </S.PlayerTrackContain>

              <S.PlayerLikeButtons>
                <S.LikeButtonIcon>
                  <svg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </S.LikeButtonIcon>
                <S.DislikeButtonIcon>
                  <svg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </S.DislikeButtonIcon>
              </S.PlayerLikeButtons>
            </S.PlayerTrack>
          </S.BarPlayer>
          <S.VolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <svg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <input className="_btn" type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.VolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

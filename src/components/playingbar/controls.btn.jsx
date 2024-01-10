import * as S from './playingbar.styles'

export const BarPLayerControl = ({
  togglePlay,
  isPlaying,
  toggleLoop,
  isLoop,
}) => {
  return (
    <S.BarPLayerControls>
      <S.ButtonPrev onClick={() => alert('in progress')}>
        <svg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </svg>
      </S.ButtonPrev>
      <S.ButtonPlay onClick={togglePlay}>
        {isPlaying ? (
          <svg alt="pause">
            <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
          </svg>
        ) : (
          <svg alt="play">
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          </svg>
        )}
      </S.ButtonPlay>
      <S.ButtonNext>
        <svg alt="next" onClick={() => alert('in progress')}>
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </svg>
      </S.ButtonNext>
      <S.ButtonRepeat onClick={toggleLoop}>
        <svg alt="repeat" >
          {isLoop ? (
            <use xlinkHref="img/icon/sprite.svg#icon-repeat-active"></use>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          )}
        </svg>
      </S.ButtonRepeat>
      <S.ButtonShuffle>
        <svg alt="shuffle" onClick={() => alert('in progress')}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </S.ButtonShuffle>
    </S.BarPLayerControls>
  )
}
export const LikeDislike = () => {
  return (
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
  )
}

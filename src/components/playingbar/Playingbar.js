import * as S from './playingbar.styles'
import { BarPLayerControl, LikeDislike } from './controls.btn'
import { useEffect, useRef, useState } from 'react';

export default function Playingbar({ track }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null);
 
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    setIsPlaying(true);
  }, [track]);

  if (!track) {
    return null
  }

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerBProgress></S.BarPlayerBProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <audio 
            autoPlay
            src={track.track_file}
            ref={audioRef}
            ></audio>
            <BarPLayerControl togglePlay={togglePlay} isPlaying={isPlaying}/>

            <S.PlayerTrack>
              <S.PlayerTrackContain>
                <S.PlayerTrackImage>
                  <svg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </S.PlayerTrackImage>
                <S.TrackPlayName>
                  <span>{track.name}</span>
                </S.TrackPlayName>
                <S.TrackPlayAuthor>
                  <span>{track.author}</span>
                </S.TrackPlayAuthor>
              </S.PlayerTrackContain>
              <LikeDislike />
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

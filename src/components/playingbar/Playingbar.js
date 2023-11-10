import * as S from './playingbar.styles'
import { BarPLayerControl, LikeDislike } from './controls.btn'
import { useEffect, useRef, useState } from 'react'
import ProgressBar from './progressbar/progressbar'

export default function Playingbar({ track }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoop, setIsLoop] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef(null)

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }
  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  useEffect(() => {
    setIsPlaying(true)
  }, [track])

  const toggleLoop = () => {
    setIsLoop((repeat) => !repeat)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
    setDuration(audioRef.current.duration)
  }

  const handleSeekTrackTime = (e) => {
    audioRef.current.currentTime = e.target.value
    setCurrentTime(e.target.value)
  }

  if (!track) {
    return null
  }

  return (
    <>
      <S.Bar>
        <S.BarContent>
          <ProgressBar
            duration={duration}
            currentTime={currentTime}
            handleSeekTrackTime={handleSeekTrackTime}
          ></ProgressBar>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <audio
                autoPlay
                src={track.track_file}
                ref={audioRef}
                loop={isLoop}
                onTimeUpdate={handleTimeUpdate}
              ></audio>
              <BarPLayerControl
                togglePlay={togglePlay}
                isPlaying={isPlaying}
                toggleLoop={toggleLoop}
                isLoop={isLoop}
              />

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
    </>
  )
}

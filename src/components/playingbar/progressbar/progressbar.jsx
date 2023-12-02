import { ProgressBarLine } from './progressbar.style'
import { BarTime } from '../playingbar.styles'

export default function ProgressBar({
  handleSeekTrackTime,
  duration,
  currentTime,
}) {
  let sec
  let min

  const correctTime = (x) => {
    sec = Math.ceil(x % 60)
    if (sec < 10) {
      sec = '0' + sec
    }
    min = ~~(x / 60)
    return `${min}:${sec}`
  }
  return (
    <>
      <BarTime>
        <div>{correctTime(currentTime)}</div>
        <div>{correctTime(duration)}</div>
      </BarTime>
      <ProgressBarLine
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={handleSeekTrackTime}
        $color="#B672FF"
      />
    </>
  )
}

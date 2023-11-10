import styled, { keyframes } from 'styled-components'

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const BarTime = styled.div`
  text-align: right;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0px 5px 10px 10px;
`

export const BarPlayerBProgress = styled.div`
  width: 100%;
  height: 10px;
  background: #2e2e2e;
`
export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(28, 28, 28);
`
export const BarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const VolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
  & svg {
    width: 13px;
    height: 18px;
    fill: transparent;
  }
`
export const VolumeProgress = styled.div`
  width: 109px;

  & input {
    width: 109px;
  }
`

// buttons on player
export const BarPLayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

export const ButtonPrev = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 23px;

  & svg {
    width: 15px;
    height: 20px;
  }
`
export const ButtonPlay = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 23px;

  & svg {
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
  }
`

export const ButtonNext = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 28px;
  fill: #a53939;

  & svg {
    width: 15px;
    height: 20px;
    fill: inherit;
    stroke: #d9d9d9;
  }
`

export const ButtonRepeat = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 24px;

  & svg {
    width: 18px;
    height: 19px;
    fill: transparent;
    stroke: #696969;
  }
`

export const ButtonShuffle = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;

  & svg {
    width: 19px;
    height: 16px;
    fill: transparent;
    stroke: #696969;
  }
`
// playing track styles

export const PlayerTrack = styled.div`
  display: flex;
  flex-direction: row;
`
export const PlayerTrackContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`
export const PlayerTrackImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;

  & svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
  }
`
export const PlayerLikeButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`
export const LikeButtonIcon = styled.div`
  padding: 5px;

  & svg {
    width: 15px;
    height: 20px;
    fill: transparent;
    stroke: #696969;
  }
`
export const DislikeButtonIcon = styled.div`
  margin-left: 28.5px;

  & svg {
    width: 15px;
    height: 20px;
    fill: transparent;
    stroke: #696969;
  }
`
export const TrackPlayName = styled.div`
  grid-area: author;
  min-width: 49px;

  & span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
    text-decoration: none;
  }
`
export const TrackPlayAuthor = styled.div`
  grid-area: album;
  min-width: 250px;

  & span {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
  }
`

// skeletons
const loading = keyframes`
  from {
    background-color: #313131;
  }

  50% {
    background-color: #464545;
  }
  to {
    background-color: #313131;
  }
`

export const TrackPlayLoad = styled.div`
  width: 60px;
  height: 15px;
  animation: ${loading} 2s infinite;
`

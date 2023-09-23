import styled, { keyframes } from 'styled-components'

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`
export const TrackTitleSVG = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
  cursor: pointer;
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-decoration: none;
`
// .track__title-span {
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #4e4e4e;
// }

export const TrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`
export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  text-decoration: none;
`
export const TrackAlbum = styled.div`
  width: 245px;
`
export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-decoration: none;
`
export const TrackTime = styled.div``

export const TrackTimeSVG = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;
`
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
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
export const TrackImageLoad = styled.div`
  width: 51px;
  height: 51px;
  margin-right: 17px;
  animation: ${loading} 2s infinite;
`

export const TrackNameLoad = styled.div`
  width: 356px;
  height: 19px;
  animation: ${loading} 2s infinite;
`
export const TrackAuthorLoad = styled.div`
  width: 271px;
  height: 19px;
  animation: ${loading} 2s infinite;
`
export const TrackAlbumLoad = styled.div`
  width: 245px;
  height: 19px;
  animation: ${loading} 2s infinite;
`

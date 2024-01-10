import { compareRandom } from '../../utils/comparerandom'
import {
  SELECT_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  SHUFFLE_PLAYLIST,
  LOOP_TRACK,
  GET_TRACKS,
} from '../actions/types/tracks'

const initialState = {
  isPlayng: false,
  track: null,
  isLoop: false,
  shuffleTracks: [],
  isShuffle: false,
  playlist: [],
  selectTrackId: null
}

export const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS: {
      return {
        ...state,
        playlist: action.payload,
      }
    }

    case SELECT_TRACK: {
      const { track, trackId } = action.payload
      return {
        ...state,
        track,
        selectTrackId: trackId,
        isLoop: false,
        isShuffle: false,
      }
    }

    case PLAY_TRACK: {
      return {
        ...state,
        isPlayng: true,
      }
    }

    case PAUSE_TRACK: {
      return {
        ...state,
        isPlayng: false,
      }
    }

    case PREV_TRACK: {
      // добавить логику перемешенного плейлиста
      const prevTrack = state.track - 1
      if (prevTrack >= 0) {
        return {
          ...state,
          track: state.playlist[prevTrack],
          selectTrack: prevTrack,
          isLoop: false,
          isShuffle: false,
        }
      }
      return state
    }

    case NEXT_TRACK: {
      const nextTrack = state.track + 1
      if (nextTrack >= 0 && nextTrack < state.playlist.length) {
        return {
          ...state,
          track: state.playlist[nextTrack],
          selectTrackId: nextTrack,
          isLoop: false,
        }
      }
      return state
    }

    case SHUFFLE_PLAYLIST: {
      if (!state.isShuffle) {
        const shuffledTracks = compareRandom([...state.playlist])
        return {
          ...state,
          shuffledTracks,
          isShuffle: true,
        }
      }
      return state
    }

    case LOOP_TRACK: {
      return {
        ...state,
        isLoop: !state.isLoop, 
      }
    }

    default:
      return state
  }
}

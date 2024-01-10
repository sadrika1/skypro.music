import {
  SELECT_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  SHUFFLE_PLAYLIST,
  LOOP_TRACK,
  GET_TRACKS,
} from '../types/tracks'

export const selectTrack = (trackId, track) => ({
  type: SELECT_TRACK,
  payload: {trackId, track}
});

export const getTracks = (playlist) => ({
  type: GET_TRACKS,
  payload: playlist,
});

export const nextTrack = (track, trackId) => ({
  type: NEXT_TRACK,
  payload: {track, trackId}
})

export const prevTrack = (track, trackId) => ({
  type: PREV_TRACK,
  payload: {track, trackId}
})

export const playTrack = () => ({
  type: PLAY_TRACK,
})

export const pauseTrack = () => ({
  type: PAUSE_TRACK,
})

export const shufflePlaylist = () => ({
  type: SHUFFLE_PLAYLIST
})

export const loopTrack = () => ({
  type: LOOP_TRACK,
})

// export const fetchTracks = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(
//         'https://skypro-music-api.skyeng.tech/catalog/track/all/'
//       );
//       const data = await response.json();
//       dispatch(getTracks(data));
//     } catch (error) {
//       console.error('Ошибка получения треков:', error);
//     }
//   };
// };

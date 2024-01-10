// select - получить состояние, dispatch - изменить
// 1 параметр - функция, 
// 2 функция принимает состояние, 
// 3 из состояния получаем нужную переменную
export const playlistSelector = (store) => store.player.playlist
export const selectIsPlaying = (state) => state.player.isPlaying
export const selectAllTracks = (state) => state.player.playlist
export const selectSelectedTrack = (state) => state.player.track
export const selectIsShuffle = (state) => state.player.isShuffle
export const selectSelectedTrackId = (state) => state.player.selectTrackId
export const selectIsLoop = (state) => state.player.isLoop

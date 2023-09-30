//import React from 'react'

export default function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">

        <div className="track__title">
          {props.load ? (
            <div className="track__skeleton"></div>
          ) : (
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
          )}

        <div className="track__title-text">
          {props.load ? (
            <div className="track__title_skeleton"></div>
          ) : (
            <a className="track__title-link" href="http://">{props.trackname}
              <span className="track__title-span"></span>
            </a>
          )}
        </div>
      </div>
        <div className="track__author">
          {props.load ? (
            <div className="track__author_skeleton"></div>
          ) : (
            <a className="track__author-link" href="http://">{props.author}
            </a>
          )}
        </div>

        <div className="track__album">
          {props.load ? (
            <div className="track__album_skeleton"></div>
          ) : (
            <a className="track__album-link" href="http://">{props.album}
            </a>
          )}
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          {props.load ? (
            <span className="track__time-text">00:00</span>
          ) : (
            <span className="track__time-text">{props.timetrack}</span>
          )} 
        </div> 
      </div>
    </div>
    
  )
}

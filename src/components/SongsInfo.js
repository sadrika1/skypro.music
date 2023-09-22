
export default function SongsInfo() {
    return (
        <div className="content__title playlist-title">
        <div className="playlist-title__col col01">ТРЕК</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
    )
}

// .content__title {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: row;
//   flex-direction: row;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   -webkit-box-pack: justify;
//   -ms-flex-pack: justify;
//   justify-content: space-between;
//   margin-bottom: 24px;
// }


// .playlist-title__col {
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 24px;
//   letter-spacing: 2px;
//   color: #696969;
//   text-transform: uppercase;
// }

// .playlist-title__svg {
//   width: 12px;
//   height: 12px;
//   fill: transparent;
//   stroke: #696969;
// }

// .col01 {
//   width: 447px;
// }

// .col02 {
//   width: 321px;
// }

// .col03 {
//   width: 245px;
// }

// .col04 {
//   width: 60px;
//   text-align: end;
// }

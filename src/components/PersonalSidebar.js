export default function SidebarPersonality(props) {
    return (
        <div className="sidebar__personal">
        <p className="sidebar__personal-name">{props.userName}</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
    )
}
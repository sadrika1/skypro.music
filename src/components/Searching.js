import { useState } from 'react'
import './searchingComponents.css'

// const Serching = () => {
//   return (
//     <>
//       <SerchingInput />
//       <div className="centerblock__filter filter">
//         <div className="filter__title">Искать по:</div>
//         <SerchingFilter />
//         {/* <FilterAuthor /> */}
//         {/* <div className="filter__button button-year _btn-text">году выпуска</div> */}
//         {/* <FilterYear /> */}
//         {/* <div className="filter__button button-genre _btn-text">жанру</div> */}
//         {/* <FilterGenre /> */}
//       </div>
//     </>
//   )
// }

// const SerchingInput = () => {
//   return (
//     <div className="centerblock__search search">
//       <svg className="search__svg">
//         <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
//       </svg>
//       <input
//         className="search__text"
//         type="search"
//         placeholder="Поиск"
//         name="search"
//       />
//     </div>
//   )
// }

const Serching = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const artists = [
    'minthaze',
    'Ali Bakgor',
    'Psychopath',
    'Guilt',
    'Tom Boxer',
    'Calvin Harris, Disciples',
    'Dynoro, Outwork, Mr. Gee',
  ]

  const years = [
    '2011',
    '1991',
    '2000',
    '2003',
    '2017',
    '2005',
    '2010',
  ]

  const genres = [
    'Pop',
    'Hip-Hop',
    'Rock',
    'Folk',
    'Electric-Music',
    'Post-Rock',
    'Metal',
  ]

  const selectCategory = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }
  function CategoryItem({ isOpen, title, onClick, list }) {
    return (
      <div className="filter__button button-author _btn-text">
        <div className="_btn-text" onClick={onClick}>
          {title}
        </div>
        {!isOpen ? null : (
          <div className="dropdown__content">
            <ul>
              {list.map((item) => {
                return <li className="dropdown__item">{item}</li>
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>

      <div className="filters__block">
        <div className='filters__block_text'>Искать по:</div>
        <CategoryItem
          title="исполнителю"
          onClick={() => selectCategory('artist')}
          isOpen={selectedCategory === 'artist'}
          list={artists}
        ></CategoryItem>
        <CategoryItem
          title="году выпуска"
          onClick={() => selectCategory('year')}
          isOpen={selectedCategory === 'year'}
          list={years}
        ></CategoryItem>
        <CategoryItem
          title="жанру"
          onClick={() => selectCategory('genre')}
          isOpen={selectedCategory === 'genre'}
          list={genres}
        ></CategoryItem>
      </div>
    </>
  )
}

export default Serching

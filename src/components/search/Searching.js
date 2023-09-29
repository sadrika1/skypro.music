import { useState } from 'react'
import * as S from './searching.styled'
// import './searchingComponents.css'


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

  const years = ['2011', '1991', '2000', '2003', '2017', '2005', '2010']

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
      <S.FilterButton>
        <div onClick={onClick}>
          {title}
        </div>
        {!isOpen ? null : (
          <S.Dropdown>
            <ul>
              {list.map((item) => {
                return <S.DropdownItem key={item}>{item}</S.DropdownItem>
              })}
            </ul>
          </S.Dropdown>
        )}
      </S.FilterButton>
    )
  }

  return (
    <>
      <S.CentroBlockSearch>
        <S.SearchSVG>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSVG>
        <S.SearchInput
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CentroBlockSearch>
      <S.CentroBlockTitle>Треки</S.CentroBlockTitle>

      <S.FiltersBlock>
        <S.FiltersBlockText>Искать по:</S.FiltersBlockText>
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
      </S.FiltersBlock>
    </>
  )
}

export default Serching

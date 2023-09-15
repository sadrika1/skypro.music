import { useState } from "react";
import './searchingComponents.css'


const Serching = () => {
  return (
    <>
      <SerchingInput />
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <FilterAuthor />
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
    </>
  )
}

const SerchingInput = () => {
  return (
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
  )
}

const FilterAuthor = () => {
  const options = ["minthaze", "Ali Bakgor", "Psychopath", "Guilt", "Tom Boxer","Calvin Harris, Disciples", "Dynoro, Outwork, Mr. Gee"]
  //прописать ключи для корректной сортировки

  const [popUp, setPopUp] = useState(false)
  return (
    <>
      <div className="filter__button button-author _btn-text" 
        onClick={()=> setPopUp(!popUp)}>исполнителю</div>
        {popUp &&         
          <div className="dropdown__content">
            {options.map((option) => { 
              return (            
                <div className="dropdown__item" onClick={() => setPopUp(option)}>{option}</div>)
              })}
          </div>
        } 
    </>
  )}

  export default Serching;

  // const arrAuthors = ["minthaze", "Ali Bakgor", "Psychopath", "Guilt", "Tom Boxer","Calvin Harris, Disciples", "Dynoro, Outwork, Mr. Gee" ];
  // const [select, setSelect] = useState('');

 
  // const authors = arrAuthors.map((text, index) => {
  //   return <option key={index}>{text}</option>
  // })

  // return (
  // <>
  //     <label></label>
  //     <select value={select} onChange={(event) => setSelect(event.target.value)}>{authors}
  //     </select>
  // </>
  // )





import styled from 'styled-components'

export const Dropdown = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 245px;
  height: 305px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  background-color: #313131;
  border-radius: 15px;
  margin-top: 15px;
  margin-left: -15px;
`

export const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s;
  list-style-type: none;
  margin-left: -30px;

  &:hover {
    text-decoration: underline;
    color: #B672FF;
  }
`


export const FiltersBlock = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 50px;
`

export const FiltersBlockText = styled.div`
  padding-right: 10px;
`
export const CentroBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CentroBlockTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
  color: #ffffff;
`
export const SearchSVG = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`
export const SearchInput = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  & placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    border-color: #ad61ff;
    color: #ad61ff;
  }
`

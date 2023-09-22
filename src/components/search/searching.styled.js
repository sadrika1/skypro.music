import styled from 'styled-components'

export const Dropdown = styled.div`
  position: absolute;
  width: 245px;
  height: 305px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  background-color: #313131;
  border-radius: 15px;
  margin-top: 15px;
  margin-left: -15px;
  overflow: auto;
`
// .dropdown__item:hover {
//   text-decoration: underline;
//   color: #B672FF;
// }

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
`
// .dropdown__item:hover {
//   text-decoration: underline;
//   color: #B672FF;
// }

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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
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
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
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
`

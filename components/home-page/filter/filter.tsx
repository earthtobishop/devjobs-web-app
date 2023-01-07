import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { TitleInput } from './title-input'

const Wrapper = styled.section`
  position: absolute;
  top: 130px;
  background-color: #fff;
  height: 80px;
  width: 327px;
  display: flex;
  justify-content: center;
  padding: 0 12px;
  border-radius: 5px;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    height: 80px;
    width: 689px;
  }

  @media only screen and (min-width: 1440px) {
    justify-content: space-between;
    height: 80px;
    width: 1100px;
  }
`

const SmallIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`

const SearchIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-color: #5964e0;
  cursor: pointer;
  height: 48px;
  width: 48px;
  border-radius: 5px;

  .search-text {
    visibility: hidden;
    display: none;
    color: #fff;
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    height: 48px;
    width: 80px;

    .icon {
      visibility: hidden;
      display: none;
    }
    .search-text {
      visibility: visible;
      display: inline-block;
    }
  }

  @media only screen and (min-width: 1440px) {
    height: 48px;
    width: 80px;

    .icon {
      visibility: hidden;
      display: none;
    }
    .search-text {
      visibility: visible;
    }
  }
`

const FilterIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 5px;

  .label {
    visibility: hidden;
    display: none;
    color: #000;
    font-weight: bold;
    height: 24px;
    width: 108px;
    text-align: center;
    white-space: nowrap;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 30px;
    height: 48px;
    width: 80px;

    .icon {
      visibility: hidden;
      display: none;
    }
    .label {
      visibility: visible;
      display: flex;
      gap: 6px;
      margin-right: 15px;
    }
  }

  @media only screen and (min-width: 1440px) {
    margin-right: 30px;
    height: 48px;
    width: 80px;

    .icon {
      visibility: hidden;
      display: none;
    }
    .label {
      visibility: visible;
      display: flex;
      gap: 6px;
      margin-right: 15px;
    }
  }
`

interface FilterIconProps {
  handleChange: () => void
}

const FilterIcon: React.FC<FilterIconProps> = ({ handleChange }) => {
  return (
    <FilterIconDiv>
      <div className='icon'>
        <img src='/assets/mobile/icon-filter.svg' alt='Filter Icon' />
      </div>
      <div className='label'>
        <input type='checkbox' onChange={handleChange} />
        <span>Full Time Only</span>
      </div>
    </FilterIconDiv>
  )
}

const SearchIcon = () => {
  return (
    <SearchIconDiv>
      <div className='icon'>
        <img src='/assets/desktop/icon-search.svg' alt='Search Icon' />
      </div>
      <div className='search-text'>Search</div>
    </SearchIconDiv>
  )
}

interface FilterProps {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  handleChange: () => void
}

const Filter: FC<FilterProps> = ({
  searchText,
  setSearchText,
  handleChange
}): ReactElement => {
  return (
    <Wrapper>
      <TitleInput
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Filter by title, companies, etc...'
      />
      <SmallIconsWrapper>
        <FilterIcon handleChange={handleChange} />
        <SearchIcon />
      </SmallIconsWrapper>
    </Wrapper>
  )
}

export default Filter

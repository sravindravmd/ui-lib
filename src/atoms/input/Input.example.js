import React from 'react'
import { Input } from './'
import { Dropdown } from '../../molecules'
import styled from 'styled-components'
import IconSearch from '../../assets/images/icon-search'
import { theme } from '../../shared'

const StyledCSearch = styled.div`
  display: flex;
  box-shadow: 0px 5px 20px rgba(115, 127, 143, 0.1);
  background-color: #ffffff;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 5px 25px;
  align-items: center;

  .column {
    &.left {
      flex-basis: 100%;

      input {
        border: none;
      }
    }
    &.right {
      flex-basis: 300px;

      .option-label {
        text-align: right;
        padding-right: 25px;
      }

      .ctx-search {
        > div:nth-child(3) {
          right: -25px;
          top: 50px;
          border: 1px solid ${theme.palette.ui.neutral.grey4};
          border-radius: 4px;
        }
      }

      & > div {
        width: auto;
        margin: auto;

        > div:nth-of-type(2) {
          box-shadow: none;
        }
      }
    }
  }
`

const options = [
  { id: 1, name: 'Josh Weir' },
  { id: 2, name: 'Sarah Weir' },
  { id: 3, name: 'Alicia Weir' },
  { id: 4, name: 'Ashutosh Tiwari' },
]

const dropdownPropsWithTrue = {
  isDefault: true,
  options: [...options],
  value: { id: 0, name: 'All Item Types' },
  className: 'ctx-search',
}

export const ContextualSearch = () => {
  return (
    <StyledCSearch>
      <div className='column left'>
        <Input
          iconLeft={<IconSearch />}
          className='search-contextual'
          inputProps={{
            placeholder: 'Search by SKU Number, Category, or Collections',
          }}
        />
      </div>
      <div className='column right'>
        <Dropdown {...dropdownPropsWithTrue} />
      </div>
    </StyledCSearch>
  )
}

ContextualSearch.propTypes = {}

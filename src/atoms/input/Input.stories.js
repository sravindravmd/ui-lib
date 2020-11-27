import React from 'react'
import { Input } from './'
import IconSearch from '../../assets/images/icon-search'
import { ContextualSearch } from './Input.example'

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {
    onClick: { action: 'click' },
  },
}

const Template = args => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  className: 'primary',
  label: 'Field Label',
  inputProps: {
    placeholder: 'Text',
  },
}

export const Search = Template.bind({})
Search.args = {
  ...Primary.args,
  kind: 'sm',
  className: 'search-global',
  label: '',
  iconLeft: <IconSearch />,
  inputProps: {
    placeholder: 'Search',
    boxed: true,
  },
}

export const SearchLocal = Template.bind({})
SearchLocal.args = {
  ...Primary.args,
  className: 'search-local',
  iconLeft: <IconSearch />,
  label: '',
  inputProps: {
    boxed: false,
  },
}

export const contextualSearch = args => <ContextualSearch {...args} />

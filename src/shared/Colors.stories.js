import React from 'react'
import { Colors } from '../atoms/color/Colors'
import { theme } from './index'
export default {
  title: 'Shared/Theme/Color',
  component: Colors,
}

const brandPrimary = [
  {
    color: theme.palette.brand.primary.charcoal,
    name: 'Primary Default',
    path: 'theme.palette.brand.primary.charcoal',
  },
  {
    color: theme.palette.brand.primary.gray,
    name: 'Primary Secondary',
    path: 'theme.palette.brand.primary.gray',
  },
  {
    color: theme.palette.brand.primary.white,
    path: 'theme.palette.brand.primary.white',
  },
]
const brandSecondaryColors = [
  {
    color: theme.palette.brand.secondary.purple,
    name: 'Purple',
    path: 'theme.palette.brand.secondary.purple',
  },
  {
    color: theme.palette.brand.secondary.pink,
    name: 'Pink',
    path: 'theme.palette.brand.secondary.pink',
  },
  {
    color: theme.palette.brand.secondary.yellow,
    name: 'Yellow',
    path: 'theme.palette.brand.secondary.yellow',
  },
  {
    color: theme.palette.brand.secondary.green,
    name: 'Green',
    path: 'theme.palette.brand.secondary.green',
  },
  {
    color: theme.palette.brand.secondary.blue,
    name: 'Blue',
    path: 'theme.palette.brand.secondary.blue',
  },
]
const uiCtaStatesColors = [
  {
    color: theme.palette.ui.states.active,
    name: 'Active',
    path: 'theme.palette.ui.states.active',
  },
  {
    color: theme.palette.ui.states.hover,
    name: 'Hover',
    path: 'theme.palette.ui.states.hover',
  },
  {
    color: theme.palette.ui.states.disabled,
    name: 'Disabled',
    path: 'theme.palette.ui.states.disabled',
  },
  {
    color: theme.palette.ui.states.pressed,
    name: 'Pressed',
    path: 'theme.palette.ui.states.pressed',
  },
  {
    color: theme.palette.ui.cta.yellow,
    name: 'Warning',
    path: 'theme.palette.ui.cta.yellow',
  },
  {
    color: theme.palette.ui.cta.green,
    name: 'Success',
    path: 'theme.palette.ui.cta.green',
  },
  {
    color: theme.palette.ui.cta.red,
    name: 'Error',
    path: 'theme.palette.ui.cta.red',
  },
  {
    color: theme.palette.ui.cta.blue,
    name: 'Blue',
    path: 'theme.palette.ui.cta.blue',
  },
]
const uiNeutral = [
  {
    color: theme.palette.ui.neutral.grey1,
    name: 'Grey1',
    path: 'theme.palette.ui.neutral.grey1',
  },
  {
    color: theme.palette.ui.neutral.grey2,
    name: 'Grey2',
    path: 'theme.palette.ui.neutral.grey2',
  },
  {
    color: theme.palette.ui.neutral.grey3,
    name: 'Grey3',
    path: 'theme.palette.ui.neutral.grey3',
  },
  {
    color: theme.palette.ui.neutral.grey4,
    name: 'Grey4',
    path: 'theme.palette.ui.neutral.grey4',
  },
  {
    color: theme.palette.ui.neutral.grey5,
    name: 'Grey5',
    path: 'theme.palette.ui.neutral.grey5',
  },
  {
    color: theme.palette.ui.neutral.grey6,
    name: 'Grey6',
    path: 'theme.palette.ui.neutral.grey6',
  },
  {
    color: theme.palette.ui.neutral.grey7,
    name: 'Grey7',
    path: 'theme.palette.ui.neutral.grey7',
  },
  {
    color: theme.palette.ui.neutral.grey8,
    name: 'Grey8',
    path: 'theme.palette.ui.neutral.grey8',
  },
]

const Template = args => <Colors {...args} />

export const BrandPrimaryColor = Template.bind({})
BrandPrimaryColor.args = {
  colors: brandPrimary,
}
export const BrandSecondaryColor = Template.bind({})
BrandSecondaryColor.args = {
  colors: brandSecondaryColors,
}
export const UiCtaStatesColor = Template.bind({})
UiCtaStatesColor.args = {
  colors: uiCtaStatesColors,
}
export const UiNeutralColor = Template.bind({})
UiNeutralColor.args = {
  colors: uiNeutral,
}

export const options = [
  { id: 1, name: 'Josh Weir' },
  { id: 2, name: 'Sarah Weir' },
  { id: 3, name: 'Alicia Weir' },
  { id: 4, name: 'Ashutosh Tiwari' },
]
export const dropdownPropsWithTrue = {
  isDefault: true,
  options: [...options],
  titleLabel: 'Field Label',
  value: { id: 0, name: 'Menu Title' },
}
export const dropdownPropsWithFalse = {
  isDefault: false,
  options: [...options],
  titleLabel: 'Field Label',
  value: { id: 0, name: 'Menu Title' },
}

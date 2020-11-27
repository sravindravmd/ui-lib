import theme from './theme.js'
import media from './media'

const FONT_NAMES = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'subtitle3',
  'body',
  'kicker',
  'caption',
  'link',
]

FONT_NAMES.forEach(name => {
  const css = []
  Object.keys(theme.typography[name]).forEach(styleKey => {
    const dashKey = styleKey.replace(/.[A-Z]/, match => {
      return match[0] + '-' + match[1].toLowerCase()
    })
    css.push(`${dashKey}: ${theme.typography[name][styleKey]}`)
  })
  theme.typography[name].css = css.join(';\n')
})

export { theme, media }

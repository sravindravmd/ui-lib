# copilot-ui

This is a reusable UI component library,created with atomic design model principles.
It consists of atoms,molecules,organisms,templates and pages.

> ui library

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @teamfabric/copilot-ui
```

## Usage

- Import `GlobalStyle` Component at Root of project which adds required fonts and global styles.
- Import `Theme` component add pass it as an argument to the theme provider
- For other components usage pls refer [storybook](http://ui.copilot.fabric.inc/)

* Example: in \_app.js

```jsx
import { GlobalStyle, theme } from '@teamfabric/copilot-ui'
class MyApp extends App {
  render() {
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyles />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    )
  }
}
```

---

theme.js

```
export default {
  breakpoints: {
    keys: ['md', 'lg'],
    values: {
      md: 1024,
      lg: 1440,
    },
  },
  direction: 'ltr',
  palette: {
    ui: {
      neutral: {
        grey1: '#384454',
        grey2: '#B9BFC7',
        grey3: '#D5D9DD',
        grey4: '#E3E5E9',
        grey5: '#F1F2F4',
        grey6: '#737373',
        grey7: '#A0A0A1',
        grey8: '#D0D0D0',
      },
      cta: {
        yellow: '#FD9F1C',
        green: '#008A1E',
        red: '#D50000',
        blue: '#0D62FF',
      },
    },
    brand: {
      primary: {
        charcoal: '#121213',
        gray: '#737F8F',
        white: '#FFFFFF',
      },
      secondary: {
        purple: '#8458F6',
        pink: '#E84869',
        yellow: '#F7CE46',
        green: '#58BF86',
        blue: '#57BFF9',
      },
    },
  },
  shadows: [],
  typography: {
    fontSize: 16,
    //Headline 1,2,3
    h1: {
      fontSize: '3.75rem',
      fontFamily: 'Gilroy-Bold',
      letterSpacing: 'normal',
      lineHeight: '4.125rem',
      fontStyle: 'normal',
    },
    h2: {
      fontSize: '3rem',
      fontFamily: 'Gilroy-Bold',
      letterSpacing: 'normal',
      lineHeight: '3.25rem',
      fontStyle: 'normal',
    },
    h3: {
      fontSize: '2rem',
      fontFamily: 'Gilroy-Bold',
      letterSpacing: 'normal',
      lineHeight: '2.375rem',
      fontStyle: 'normal',
    },
    //subtitle 1,2,3
    subtitle1: {
      fontSize: '2rem',
      fontFamily: 'Gilroy-SemiBold',
      letterSpacing: 'normal',
      lineHeight: '2.375rem',
      fontStyle: 'normal',
    },
    subtitle2: {
      fontSize: '1.5rem',
      fontFamily: 'Gilroy-SemiBold',
      letterSpacing: 'normal',
      lineHeight: '1.75rem',
      fontStyle: 'normal',
    },
    subtitle3: {
      fontSize: '1.3125rem',
      fontFamily: 'Gilroy-SemiBold',
      letterSpacing: '0.5px',
      lineHeight: '1.5625rem',
      fontStyle: 'normal',
    },
    body: {
      fontSize: '1.125rem',
      fontFamily: 'Gilroy-SemiBold',
      letterSpacing: 'normal',
      lineHeight: '1.6875rem',
      fontStyle: 'normal',
    },
    kicker: {
      fontSize: '0.75rem',
      fontFamily: 'Gilroy-SemiBold',
      letterSpacing: 'normal',
      lineHeight: '0.875rem',
      fontStyle: 'normal',
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem',
      fontFamily: 'Gilroy-Regular',
      letterSpacing: 'normal',
      lineHeight: '1.125rem',
      fontStyle: 'normal',
    },
    link: {
      fontSize: '0.875rem',
      fontFamily: 'Gilroy-Medium',
      letterSpacing: 'normal',
      lineHeight: '1rem',
      fontStyle: 'normal',
    },
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    context: 800,
    hoverOver: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
}
```

## License

MIT © [Fabric](https://fabric.inc)

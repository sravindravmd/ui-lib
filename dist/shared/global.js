"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = exports.globalFonts = void 0;

var _styledComponents = require("styled-components");

const globalFonts = (0, _styledComponents.css)`
  @font-face {
    font-family: Gilroy-Regular;
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Regular.woff')
      format('woff');
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Regular.woff2')
      format('woff2');
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Regular.otf')
      format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: Gilroy-Medium;
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Medium.woff')
      format('woff');
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Medium.woff2')
      format('woff2');
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Medium.otf')
      format('opentype');
    font-style: normal;
  }

  @font-face {
    font-family: Gilroy-SemiBold;
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-SemiBold.woff')
      format('woff');
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-SemiBold.woff2')
      format('woff2');
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-SemiBold.otf')
      format('opentype');
    font-style: normal;
  }

  @font-face {
    font-family: Gilroy-Bold;
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Bold.woff')
      format('woff');
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Bold.woff2')
      format('woff2');
    src: url('https://fabric-assets-s3.s3.amazonaws.com/fonts/Gilroy/Gilroy-Bold.otf')
      format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: IBM plex sans;
    src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap')
      format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  * {
    font-family: Gilroy-Medium;
  }
`;
exports.globalFonts = globalFonts;
const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
 ${globalFonts}`;
exports.GlobalStyle = GlobalStyle;
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-weight: 100;
    src: local('Roboto'), url(./fonts/Roboto-Thin.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: local('Roboto'), url(./fonts/Roboto-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: local('Roboto'), url(./fonts/Roboto-Medium.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: local('Roboto'), url(./fonts/Roboto-Bold.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: local('Roboto'), url(./fonts/RobotoMono-Bold.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Nasalization';
    font-weight: 700;
    src: local('Nasalization'), url(./fonts/nasalization-rg.ttf) format('truetype');
  }



  @font-face {
    font-family: 'SofiaPro';
    font-weight: 400;
    src: local('SofiaPro'), url(./fonts/SofiaPro-Regular.otf) format('opentype');
  }

  @font-face {
    font-family: 'SofiaPro';
    font-weight: 500;
    src: local('SofiaPro'), url(./fonts/SofiaPro-Medium.otf) format('opentype');
  }

  @font-face {
    font-family: 'SofiaPro';
    font-weight: 600;
    src: local('SofiaPro'), url(./fonts/SofiaPro-SemiBold.otf) format('opentype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: local('SofiaPro'), url(./fonts/SofiaPro-Bold.otf) format('opentype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    src: local('SofiaPro'), url(./fonts/SofiaPro-Black.otf) format('opentype');
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    outline: none;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  :root{
    --nav-height: 72px;
    --feed-width: 0px;
    --chat-width: 340px;
    --side-offset: 25px;
    --bottom-offset: 25px;
    --sidebar-width: 340px;
    --scrollbar-width: 17px;
    --banner-height: 0px;
    --hide-main-page: block;
    --mobile-nav-height: 63px;
    --page-height: 100vh;
    --main-height: calc(100vh - var(--nav-height));
    --esports-nav-height: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    --body-height: 100vh;
    --dark: #272b41;
    --dark-two: #0f1923;
    --white: #fff;
    --red-pink: #f9305b;
    --pinkish-red: #e81538;
    --dark-seafoam: #1bb67f;
    --dark-three: #1f2236;
    --slate: #40465c;
    --dark-four: #181a27;
    --red-pink-two: #f92c6d;
    --cool-grey: #9599a8;
    --dark-five: #202232;
    --black: #000;
    --tealish: #22c7a7;
    --cool-grey-two: #b8bbc8;
    --butterscotch: #ffc648;
    --dark-six: #1b1d2b;
    --blue-grey: #7b8ca9;
    --mud: #6c4f11;
    --slate-grey: #53586b;
    --cornflower: #5f6af2;
    --very-light-pink: #fffdfd;
    --blue-blue: #142dcc;
    --lightish-blue: #4860f9;
    --cloudy-blue: #acb1cd;
    --weird-green: #3eed80;
    --pastel-blue: #a6b4ff;
    --slate-two: #3e425a;
    --blush: #f8c0b7;
    --pinkish-tan: #d98b7c;
    --dark-seven: #33364d;
    --separator: #323b45;
    --background-two: #1a242d;
    --background-three: #252f38;
    --background-four: #1d2730;
    --background-five: #2b2b2c;
    --dark-background: #0f1923;
    --dark-background-four: #262f3c;
    --dark-background-five: #2e3142;
    --light-background: #1b242f;
    --light-grey: #bcbfc7;
    --light-grey-two: #8c9099;
    --light-grey-three: #9095ab;
    --dark-grey: #8a90a2;
    --white-grey: #aab0c3;
    --white-grey-two: #e2e6f4;
    --white-two: #fefefe;
    --background: #0f1923;
    --lime-green: #04d47c;
    --lime-green-two: #06e385;
    --dark-green: #006d3f;
    --red: #f12c4c;
    --dark-red: #cc2843;
    --dark-separator: #15202b;
    --charcoal-grey: #343b4a;
    --bronze: #c5a075;
    --silver: #cadee0;
    --gold: #ffd764;
    --platinum: #6edae4;
    --diamond: #fff;
    --separator-two: #353e4c;
    --footer-color: #1a242d;
    --dark-text: #333b46;
    --dark-grey-two: #464d5e;
    --rouge: #8c1024;
    --tealish-green: #04d47c;
    --bluey-grey: #9095ab;
    --dark-gradient: #15202c;
    --black-one: #1a2633;
    --dark-40: rgba(18,29,40,0.4);
    --dark-separator-two: #28313c;
    --bluey-grey-two: #9095ac;
    --bluey-grey-three: #aab0c4;
    --separator-three: #515963;
  }


    #root,
    html,
    body {
      background: var(--background-two);
      text-align: center;
      font-size: 14px;
      color: #fff;
      position: relative;
      font-family: SofiaPro, 'Roboto', sans-serif, Nasalization !important;
      margin: 0;
      font-weight: 400;
      line-height: 1.42857;
      padding: 0;
      width: 100%;
      height: 100%;
    }

    button {
      cursor: pointer;
      border: none;
      outline: none;
      transition: .5s ease all;
      width: 100%;
      font-family: "SofiaPro",sans-serif;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 14px;
      font-weight: 700;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
    }

    a {
      color: var(--dark-grey);
      text-decoration: none;
      cursor: pointer;
    }

    input {
      background-color: #131521;
      border: none;
      border-radius: 3px;
      padding: 15px;
      color: #fff;
      outline: none;
    }

    .half {
      font-size: 18px !important;
    }

    .double {
      font-size: 12px !important;
    }

    .grey-important {
      width: 32px;
      height: 32px;
    }

`;

export default GlobalStyles;

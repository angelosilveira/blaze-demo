import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components';

const GlobalStyles: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`


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

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      overflow: hidden;
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background: ${theme.colors.primary};
      background-repeat: no-repeat;
      background: ${theme.background.linear};
    }

    #root,
    html,
    body {
      height: 100vh;
    }

    button {
      cursor: pointer;
      background: none;
      border: 0;
    }

    a {
      text-decoration: none;
    }
  `}

`;

export default GlobalStyles;

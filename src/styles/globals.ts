import { linearGradient } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* Root variables */
  :root {
    --white:#FFFFFF;
    --ice_FDF:#FDFDFF;
    --ice_E9E:#E9E9E9;
    --ice_EBE:#EBEBEB;
    --ice_CAC:#CACACA;
    --gray_979:#979797;
    --gray_4C4:#4C4C4C;
    --gray_4D4:#4D4D4D;
    --dark_282:#282C31;
    --dark_212:#212427;

    --pink:#E786D7;
    --purple:#7F7FD5;

    --purple_half: rgba(135, 128, 213, 0.5);
    --gradient_purple_pink:   ${linearGradient({
      colorStops: ['#7F7FD5 0%', '#E786D7 100%'],
      toDirection: 'to right',
      fallback: '#FFF',
    })};
    --gradient_white:   ${linearGradient({
      colorStops: ['#FFFFFF 100%', '#FFFFFF 0%'],
      toDirection: 'to right',
      fallback: '#FFF',
    })};
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Light.otf') format('otf');
    src: url('/fonts/Gilroy-ExtraBold.otf') format('otf');
    font-style: normal;
    font-weight: 400;
    font-display: fallback; /* <- this can be added to each @font-face definition */
  }

  * {
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    font: 400 1rem "Gilroy", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media(max-width: 1080px) { font-size: 93.75%; }

    @media(max-width: 720px) { font-size: 87.5%; }

    body, input, textarea, select, button {
      font-weight: 400;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 1000px #ffffff00 inset;
        transition: 5000s ease-in-out 0s;
      }
    }

    body {
      background: var(--dark_212);

      #__next div {
        color: white;
        font-weight: 800;
        font-size: 4rem;
        padding: 5rem;
      }

      button {
        cursor: pointer;
        background: transparent
      }

      [disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }

      h1, h2, h3, h4, h5, h6, strong { font-weight: 600; }

      ol, ul { list-style: none; }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;

import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    /* latin */
    @font-face {
      font-family: 'Fjalla One';
      /* font-style: normal; */
      /* font-weight: 700; */
      /* font-display: swap; */
      src: url('./fonts/Fjalla One.ttf') format('truetype'), url('./fonts/Fjalla One.ttf') format('truetype');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
      /* latin */
      @font-face {
        font-family: 'sd prostreet Heading';
        /* font-style: normal; */
        /* font-weight: 700; */
        /* font-display: swap; */
        src: url('./fonts/sd prostreet.ttf') format('truetype'), url('./fonts/sd prostreet.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'Impact Body';
        /* font-style: normal; */
        /* font-weight: 100; */
        /* font-display: swap; */
        src: url('./fonts/URW Impact W01 Bold Condensed.ttf') format('truetype'), url('./fonts/URW Impact W01 Bold Condensed.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'Amazon Body';
        /* font-style: normal; */
        /* font-weight: 100; */
        /* font-display: swap; */
        src: url('./fonts/Amazon Ember Regular.ttf') format('truetype'), url('./fonts/Amazon Ember Regular.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }          
      /* latin */
      @font-face {
        font-family: 'Oswald Body';
        /* font-style: normal; */
        /* font-weight: 100; */
        /* font-display: swap; */
        src: url('./fonts/Oswald.ttf') format('truetype'), url('./fonts/Oswald.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }    
      `}
  />
)

export default Fonts
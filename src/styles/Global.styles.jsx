import {createGlobalStyle} from 'styled-components'
import {PRIMARY, NEUTRAL, SOCIAL, SHADOW} from './colors'

const GlobalStyle = createGlobalStyle`
    /*
    =============== 
    Variables
    ===============
    */

    :root {
    /* dark shades of primary color*/
    /* primary/main color */
    --clr-primary-1: ${PRIMARY[100]};
    /* lighter shades of primary color */
    --clr-primary-2: ${PRIMARY[200]};
    /* darkest grey - used for headings */
    --clr-grey-1: ${NEUTRAL[100]};
    /* grey used for paragraphs */
    --clr-grey-2: ${NEUTRAL[200]};
    --clr-grey-3: ${NEUTRAL[300]};
    --clr-grey-4: ${NEUTRAL[400]};
    --clr-white: ${NEUTRAL[500]};
    --twitter-link: ${SOCIAL.twitter.active};
    --twitter-link-hover: ${SOCIAL.twitter.hover};

    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px ${SHADOW.light};
    --dark-shadow: 0 5px 15px ${SHADOW.dark};
    --max-width: 1170px;
    --fixed-width: 620px;
    }
    /*
    =============== 
    Global Styles
    ===============
    */

    *,
    ::after,
    ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--clr-grey-4);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
    }
    ul {
    list-style-type: none;
    }
    a {
    text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    }
    h1 {
    font-size: 3rem;
    }
    h2 {
    font-size: 2rem;
    }
    h3 {
    font-size: 1.25rem;
    }
    h4 {
    font-size: 0.875rem;
    }
    p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-2);
    }
    span {
    color: var(--clr-primary-2);
    }

    @media screen and (min-width: 800px) {
    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 1.75rem;
    }
    h4 {
        font-size: 1rem;
    }
    body {
        font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
        line-height: 1;
    }
    }

`
 
export default GlobalStyle;
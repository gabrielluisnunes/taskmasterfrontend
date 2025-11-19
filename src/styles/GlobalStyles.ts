import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        line-height: 1.5;
        background-color: #f9fafb; 
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
    }
    
    #root {
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input, textarea {
        &:focus:not(:focus-visible) {
            outline: none;
        }
    }
`;

export default GlobalStyles;
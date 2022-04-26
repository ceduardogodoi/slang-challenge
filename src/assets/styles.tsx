import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --container-padding: 1rem;

    --bg-gray: #f9fafb;
    --bg-main: #2097f9;
    --bg-gray-dark: #d1d5db;

    --border-main: #2097f9;
    --border-radius: 8px;
    --border-gray-dark: #d1d5db;
    
    --text-color-main: #329af0;
    --text-gray-dark: #d1d5db;

    --header-height: 60px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arimo, sans-serif;
  }
`

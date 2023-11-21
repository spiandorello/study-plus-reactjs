import { ThemeProvider } from 'styled-components'

import { Router } from "./Router.jsx";

import { GlobalStyle } from  './styles/global.js'
import { defaultTheme } from './styles/themes/default.js'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
    </ThemeProvider>
  )
}

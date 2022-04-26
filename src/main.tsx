import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { SlangHeader } from './components/header'

import { GlobalStyles } from './assets/styles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <SlangHeader />
    </BrowserRouter>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

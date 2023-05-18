import React from 'react'
import "./App.scss"
import Router from './router/Router'
import WebFont from 'webfontloader'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  WebFont.load({
    google: {
      families: ["Montserrat", "Courgette"]
    }
  })

  const Query = new QueryClient()
  return (
    <QueryClientProvider client={Query}>
      <div className="app">
        <Router/>
      </div>
    </QueryClientProvider>
  )
}

export default App
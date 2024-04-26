import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.scss'
import { Container } from './shared/ui/@Container/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
)

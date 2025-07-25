import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { LiffProvider } from './contexts/LiffProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LiffProvider>
      <App />
    </LiffProvider>
  </StrictMode>,
)

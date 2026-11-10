import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initMetaPixel } from './lib/metaPixel'

// Initialize Meta Pixel for ad attribution and conversion tracking
initMetaPixel()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/app.jsx'
import Button from './components/button/button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'/>
    <Button />
  </StrictMode>,
)

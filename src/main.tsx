import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '~/App.tsx'
import { ThemeProvider } from '~/context/theme-provider'
import '~/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider >
      <App />
    </ThemeProvider>
  </StrictMode>,
)

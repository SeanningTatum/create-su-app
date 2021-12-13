import { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { NotificationProvider } from '@Core/store/NotificationStore'
import { ModalProvider } from '@Core/store/ModalStore'

render(
  <StrictMode>
    <ModalProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </ModalProvider>
  </StrictMode>,
  document.getElementById('root')
)

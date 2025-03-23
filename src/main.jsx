import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import ThemeProvider from './provider/ThemeProvider.jsx'
import { Provider } from 'react-redux'
import Store from './features/redux-features/store/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
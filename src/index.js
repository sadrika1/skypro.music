import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/context'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

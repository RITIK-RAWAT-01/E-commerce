import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shop_Context_Provider from './component/context/Shop_Context.jsx'

createRoot(document.getElementById('root')).render(
  <Shop_Context_Provider>
    <App />
  </Shop_Context_Provider>,
)

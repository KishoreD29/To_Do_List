import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Home from './pages/Home.jsx'
import TodoList from './pages/Todolist.jsx'
import Form from './pages/Form.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <TodoList/>
    
  
  </StrictMode>,
)

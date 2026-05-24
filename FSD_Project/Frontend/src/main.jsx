import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import TodoList from './pages/Todolist.jsx'
import Form from './pages/Form.jsx'
import Details from './pages/Details.jsx'
import Edit from './pages/Edit.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/edit" element={<Edit/>}/>

    </Routes>
    
  </BrowserRouter>
  </StrictMode>
)

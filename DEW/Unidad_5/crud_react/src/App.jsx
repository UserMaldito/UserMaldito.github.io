//En desuso

import { Route, Routes, Router } from 'react'
import './App.css'
import Home from './components/Home'
import { UserList, UserCreate, UserDetails, UserUpdate, UserDelete } from './Componentes/UserList'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos/" element={<UserList />} />
        <Route path="/alumnos/create:id" element={<UserCreate />} />
        <Route path="/alumnos/read:id" element={<UserDetails />} />
        <Route path="/alumnos/update:id" element={<UserUpdate />} />
        <Route path="/alumnos/delete:id" element={<UserDelete />} />
      </Routes>
    </Router>
  )
}

export default App

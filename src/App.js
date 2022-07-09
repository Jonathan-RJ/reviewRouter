import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Expenses  from './pages/Expenses'
import Invoices  from './pages/Invoices'
import NotFound  from './pages/NotFound'
import Navbar  from './components/Navabar'
import User  from './pages/User'
import UserPage  from './pages/UserPage'
import Dashboard from './pages/Dashboard'

//poniendole :id este siempre direccionara cuando haya un numero(id)
//con navigate se redirecciona a la direccion del mismo componente, es util cuando
// la sesion del usuario ya se acabo y se quiere redireccionar al login, con replace si reemplaza la ruta
//pero asi solo siempre se redirige al user
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Expenses/>}/>
        <Route path='/about' element={<Invoices/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:id' element={<UserPage/>}/>
        <Route path='/usuarios' element={<Navigate to="/user"/>}/> 
        <Route path='/usuarios2' element={<Navigate replace to="/user"/>}/>
         
        <Route path='/dashboard/*' element={<Dashboard/>}>
        <Route path='welcome' element={<p>Welcome</p>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

import { NavLink } from "react-router-dom"
import './navbar.css'
//los navlink tienenn por defecto el isActive y con eso se pueden hacer funciones
export default function Navbar(){
    return(
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive})=> (isActive ? 'active' : '')} to='/about'>about</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> (isActive ? 'blue' : '')} to='/user'>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
            </ul>
        </div>
    )
}
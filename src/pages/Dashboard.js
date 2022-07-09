import { useNavigate, Link, Outlet } from "react-router-dom"
//con use navigate puedo reenviar a cualquier direccion
export default function Dashboard() {
    const navigate = useNavigate()
    const handlerClick = () =>{
        navigate("/")
    }
// asi se pueden mostrar subcomponetes, solo que en App se debe poner * de esa forma con la url apareceran
//otros elementos, en este caso welcome, tambien se puede hacer usando un link
//el outlet indica donde se debe pintar lo que esta en dashboard del App
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Dashboard</h2>
        <Outlet/>
        <button onClick={handlerClick}>
            Logout
        </button>
        <Link to="welcome">
            say Welcome
        
        </Link>
       
      </main>
    )
  }

  /* se puede hacer asi direscto
   <Routes>
        <Route path='welcome' element={<p>Welcome</p>}/>
        </Routes>
        pero asi se pueden tener rutas muy dispersas
        */
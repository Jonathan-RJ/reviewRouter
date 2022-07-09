import { Link } from 'react-router-dom'
//link es usado en links dentro de componentes puesto que no tienen el active y solo son para enviar a otra pagina
const userID = 10
//se puede usar de esta forma en la que se le pase  variables facil para cobinar con petiiones fetech
export default function Invoices() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
        <Link to="/user">Usuarios </Link>
        <Link to={`/user/${userID}`}>Usuarios ID</Link>
      </main> 
    );
  }
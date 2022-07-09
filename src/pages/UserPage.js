import { useParams} from 'react-router-dom'

export default function UserPage() {
    const params = useParams()
//tambien se podria destructurar para solo poner id {id} = useParams
    console.log(params)
    return (
      <main style={{ padding: "1rem 0" }}>
       user <h2>{params.id}</h2>
      </main>
    )
  }
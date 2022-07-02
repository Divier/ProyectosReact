import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => { setUser({ id: 123, name: 'Fernando', email: 'fernando@google.com' }) }}>
        Cargar Usuario
      </button>
    </>
  )
}

import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <h1>Home Page</h1>
      <hr />
    </>
  )
}

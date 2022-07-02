import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate('/marvel');
  }

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <button className="btn btn-primary" onClick={handlerNavigate}>
        Login
      </button>
    </>
  )
}

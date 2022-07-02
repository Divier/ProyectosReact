import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  const handlerNavigate = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    login('Fernando Herrera');

    navigate(lastPath, {
      replace: true
    });
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

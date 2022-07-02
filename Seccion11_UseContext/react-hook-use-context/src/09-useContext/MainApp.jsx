import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, HomePage, LoginPage } from './';
import { UserProvider } from './context/UserProvider';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main App</h1>
        <Navbar />
        <hr />

        <Routes>
          <Route path="/" element={ <HomePage /> }></Route>
          <Route path="login" element={ <LoginPage /> }></Route>
          <Route path="about" element={ <AboutPage /> }></Route>

          {/*<Route path="/*" element={ <LoginPage /> }></Route>*/}
          {<Route path="/*" element={ <Navigate to={ "about" } /> }></Route>}
        </Routes>
    </UserProvider>
  )
}

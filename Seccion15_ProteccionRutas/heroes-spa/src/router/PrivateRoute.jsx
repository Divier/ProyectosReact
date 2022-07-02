import { useContext, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

const save = (lastPath) => {
    localStorage.setItem('lastPath', lastPath);
};

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    const { pathname, search } = useLocation();
    const lastPath = pathname + search;

    useMemo(() => save(lastPath), [lastPath]);

    return (
        (logged) ? children : <Navigate to={'/login'} />
    )
}

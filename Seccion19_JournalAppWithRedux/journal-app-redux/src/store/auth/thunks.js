import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const checkAuthenticationGoogle = () => {
    return async (dispatch) => {
        
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) {
            return dispatch(logout(result));
        }
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if (!result.ok) {
            return dispatch(logout(result));
        }
        dispatch(login(result))
    }
}

export const startLoginUserWithEmailPassword = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await loginUserWithEmailPassword({ email, password });
        if (!result.ok) {
            return dispatch(logout(result));
        }
        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();
        dispatch( logout() );
    }
}
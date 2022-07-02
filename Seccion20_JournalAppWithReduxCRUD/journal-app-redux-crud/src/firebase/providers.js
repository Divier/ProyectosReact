import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const user = result.user;
        const { displayName, email, photoURL, uid } = user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, 
            photoURL, 
            email, 
            displayName
        }

    } catch (error) {
        console.log(error);
        return { 
            ok: false, 
            errorMessage: error.message 
        }
    }
}

export const loginUserWithEmailPassword = async ({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);      
        const { uid, photoURL, email: emailFromResp, displayName } = resp.user;
        return {
            ok: true,
            uid, 
            photoURL, 
            emailFromResp, 
            displayName
        }

    } catch (error) {
        console.log(error);
        return { 
            ok: false, 
            errorMessage: error.message 
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
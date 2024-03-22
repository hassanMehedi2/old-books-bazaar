import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email, password) => {
      return  signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (name,photo)=>{
       return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo
       })
    }
    const logout = ()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            if (CurrentUser) {
              setLoading(false);
              setUser(CurrentUser)
            } else {
              // User is signed out
              // ...
            }
          });
          


        return ()=> unsubscribe();
    }, [])
    const authInfo = {
        user,
        isLoading,
        createUser,
        loginUser,
        updateUser,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
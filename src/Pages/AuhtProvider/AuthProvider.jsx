import React, { createContext, useEffect, useState } from 'react'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged 
  } from 'firebase/auth';

import Auth from "../../fairebase.inits"


export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [User, SetUser] = useState("hello world !");
    const [loading,SetLoading] = useState(true)


    const CreateUser = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const LoginUser =  (email,password) =>{
        SetLoading(true)
        return signInWithEmailAndPassword(Auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            console.log("current user is ", currentUser);
            SetUser(currentUser);
            SetLoading(false)
        });
        return () => {
            unsubscribe();
        };
    }, []);


    const AuthInfo = {
        User,
        CreateUser,
        LoginUser,
        loading,

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

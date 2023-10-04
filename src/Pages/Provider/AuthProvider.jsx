import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { app } from '../../../firebase.config';



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currenUser=>{
            setUser(currenUser);
            console.log('Current User; :', currenUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        createUser,
        login,
        user, logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
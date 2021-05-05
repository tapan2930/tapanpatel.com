import  {useState, useEffect,createContext } from "react"
import nookies from "nookies"
import firebaseClient from "src/services/firebaseClient.service"
import firebase from "firebase/app"
import "firebase/auth";
import { useContext } from "react";

const  AuthContext = createContext({});

export const AuthProvider = ({children}:any) => {
    firebaseClient()
    const [user,setUser] = useState<any>(null)

    useEffect(()=>{
        return firebase.auth().onIdTokenChanged( async (user)=>{
            if(!user) {
                setUser(null)
                nookies.set(undefined, "token", "", {})
                return;
            }
            const token = await user.getIdToken();
            setUser(user)
            nookies.set(undefined, "token", token, {})

        })
    },[])


    return(
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider> 
    )
}

export const useAuth = () => useContext(AuthContext);


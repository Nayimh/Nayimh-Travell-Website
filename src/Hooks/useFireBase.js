import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/fireBaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
// signin
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
           
    }
    
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        })
    }


    // state change
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user)
                setUser(user)
            }
        })
    }, []);
    


    return {
        user,
        
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;
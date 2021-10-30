import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/fireBaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);

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
                
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsloading(false)
        })
    }, []);
    


    return {
        user,
        
        signInUsingGoogle,
        logOut,
        isLoading
    }

}

export default useFirebase;
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setLoading] = useState(false);

    const signInUsingGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .finally(()=>setLoading(false));
    }

    useEffect(()=>{
    const unsubscribed =  onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribed;
    },[])

    const logOut = () => {
        setLoading(true)
        signOut(auth)
        .then(()=>{ })
        .finally(() =>setLoading(false))
    }

   //handle register
   const handleEmailChange = e => {
    setEmail(e.target.value);
   }
   //handle pass
   const handlePassword = e => {
     if(e.target.value.length < 6){
        console.log('Your password at least 6 characters');
     }
     else{
        setPassword(e.target.value);
     }
   }

   const handleRegister = (e) => {
       e.preventDefault();
       createUserWithEmailAndPassword(auth, email, password)
       .then(result => {
           
           setUser(result.user)
       })
       .catch((error) => {
        setError(error.message);
       })
   }
    
   const handleLogin = () => {
       signInWithEmailAndPassword(auth, email, password)
       .then(result => {
           setUser(result.user);
       } )
       .catch((error) => {
        setError(error.message);
       })
   }

   const handleNameChange = e => {
       setName(e.target.value)
   }


    return{
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading,
        handleEmailChange,
        handlePassword,
        handleRegister,
        handleLogin,
        handleNameChange,
        name
    }
}


export default useFirebase;
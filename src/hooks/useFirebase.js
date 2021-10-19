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

    const handleRegister = e => {
        e.preventDefault();
        createNewUser()
        
    }

    //login
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setUser(user)
        })
        .catch(error => {
            setError(error.message)
        })
    }


    //handle email
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    //handle Password
    const handlePassWord = e => {
        if(e.target.value.length < 6){
            setError('Your password at least 6 characters ')
            return;
        }
        else{
            setPassword(e.target.value);
        }
    }

    //email register
    const createNewUser = ( email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    
    return{
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleRegister,
        handleEmail,
        handlePassWord,
        handleLogin,
        isLoading
    }
}


export default useFirebase;
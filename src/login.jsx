import {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

function login () {

    const auth = getAuth;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
        } catch (error){
            console.log(error.message);
        }
    }  

    return (
        <h1>Login</h1>
    );
    
}
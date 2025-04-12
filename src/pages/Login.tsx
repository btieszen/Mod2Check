import style from '../styles/formStyles';
import {useState} from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../lib/firebase/firebase'
import { useNavigate } from 'react-router-dom';

const Login =() =>{
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError('');
    try{
        await signInWithEmailAndPassword(auth,email,password);
        setTimeout(() =>{
        navigate('./profile');
        },50000);
    }catch (error:any){
        setError(error.message);
    }
    };

    return(
        <div style={style.form}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
    
            {error && <p style={style.error}>{error}</p>}
            <fieldset style={style.fieldset}>
                <legend style={style.legend}>Login</legend>
                <input
                style={style.input}
                type='email'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
       
            <input
            style= {style.input}
            type='password'
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            </fieldset>
            </form>
            </div>
    );
}
export default Login;
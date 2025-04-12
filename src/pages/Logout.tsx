import { useEffect }from 'react';
import { signOut } from 'firebase/auth';
import {auth} from '../lib/firebase/firebase';
import { useNavigate } from 'react-router-dom';


const Logout =() =>{
    const navigate = useNavigate();

    useEffect(()=>{
        signOut(auth);
        navigate('/login');
    },[navigate]);
    return <div>Logout</div>
};
export default Logout;
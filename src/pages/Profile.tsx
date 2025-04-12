import { useAuth } from "../context/AuthContext";
import { useState} from "react";
import { updateProfile,deleteUser } from "firebase/auth";
import style from "../styles/formStyles";
import { useNavigate } from "react-router-dom";

const Profile = () =>{
    const { user } = useAuth();
    const [email,setemail]= useState(user?.email || '');
    const[displayName,setDisplayName] = useState(user?.displayName ||'');
    const[error,setError] = useState('');
    const[success,setSuccess] = useState('');

    const navigate=useNavigate()


    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setError('');
        setSuccess('');
        if (!user) {
            setError('User not Found');
            return;
        }
        try{
            await updateProfile(user, {
                displayName: displayName,
            });
            setSuccess('Profile update Successfully');
       
        } catch (error:any){
            setError(error.message);
        }
        };

    const handleDeleteAccount = async (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        setError('');
        setSuccess('');
        try{
            if (!user) {
                setError('User Not Found');
                return;
            }
            await deleteUser(user);
            setSuccess("Account deleted Successfully");
            navigate('/');
        } catch (error:any) {
            setError(error.message);
        }
    };

    return(
        <div style={style.form as React.CSSProperties}>
            <h1>Profile</h1>
            <form onSubmit={handleUpdateProfile}>
                <input 
                style={style.input}
                type='text'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Name"
                />
                <input 
                style={style.input}
                disabled={true}
                type='email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder='Email'
                />
                <button  type="submit"  className="btn btn-primary 
                           custom-primary">
                    Update Profile
                </button>
                {success && <p style={style.success}>{success}</p>}
                {error && <p style={style.error}>{error}</p>}
                <div>
                    <button
                    onClick={handleDeleteAccount}
                    style={style.deleteAccountButton}
                    >
                        DeleteAccount
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Profile;
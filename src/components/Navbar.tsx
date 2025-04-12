
import { Link } from"react-router-dom";
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

const Navbar = ()=>{
const {user} =useAuth()

return(


<div className='nav-container'>

    <Link to ='/' className='link'>
    Home
    </Link>
    <Link to="/addDataForm"  className='link'>
    Add Product
    </Link>
    <Link to="/displayData"  className='link'>
    Display Products
    </Link>
    <Link to="/addOrderForm"  className='link'>
    Add Order
    </Link>
    <Link to="/displayOrder"  className='link'>
    Display Order
    </Link>
    {user? (
      <>
      <Link to='/profile' className ='link'>
      Profile
      </Link>
      <Link to="/logout" className='link'>
    Logout
    </Link>
    </>
    ) : (
      <>
    <Link to="/login" className='link'>
    Login
    </Link>
    <Link to="/register" className='link'>
    Register
    </Link>
    </>
    )}
    </div>
    );
    };
    export default Navbar;

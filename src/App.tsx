import { BrowserRouter,Routes,Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from './components/Navbar';
import Logout from './pages/Logout';
import Login from './pages/Login';
import Register from './pages/Register';
import {AuthProvider} from './context/AuthContext';
import Home from "./pages/Home";
import AddDataForm from "./components/AddDataForm";
import DisplayData from "./components/DisplayData";
import AddOrderForm from "./components/AddOrderForm";
import DisplayOrder from "./components/DisplayOrder";

function App() {


  return (
   
    
      <AuthProvider>
  
      <BrowserRouter>
      <Navbar />
  <Routes>
  
     
  <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addDataForm" element={<AddDataForm />} />
        <Route path="/displayData" element={<DisplayData />} />
        <Route path="/addOrderForm" element={<AddOrderForm />} />
        <Route path="/displayOrder" element={<DisplayOrder />} />


      
      </Routes>
   
    </BrowserRouter>
   
    </AuthProvider>
 
 
  );
};
export default App;
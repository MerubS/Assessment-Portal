import './Navbar.css'
import { Link } from "react-router-dom";
import Useauth from '../Routes/UseAuth';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const b = Useauth();
  const navigate = useNavigate();
 return (

 <div className='sidebar'>
  <h5 style={{paddingBottom:25}}> Assessment Portal </h5>
  <Link to="/Questions" style={{textDecoration:'none',color:'white',padding:2, display:'block'}} > Questions </Link>
  <Link to= "/Bundles" style={{textDecoration:'none',color:'white',padding:2, display:'block'}} > Bundles </Link>
  {/* <Link to="/Logout" style={{textDecoration:'none',color:'white',padding:2 , display:'block'}} > Logout</Link> */}
  <button style={{textDecoration:'none',color:'white',padding:2, display:'block',border:'none',backgroundColor:'#803be5'}} onClick={()=>{b.setauth(false); navigate('/') }}>  Logout </button>
</div>

 );
}

export default Navbar;
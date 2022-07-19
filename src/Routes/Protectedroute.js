import { Navigate } from "react-router-dom";
// import { useAuth } from "./UseAuth";
import Useauth from "./UseAuth";
const Protectedroute = ({children}) => {
    const isAuthenticated = Useauth();
    {console.log(isAuthenticated.auth)}
  return (
   
    isAuthenticated.auth? children : <Navigate to='/' replace/>

  );
}

export default Protectedroute;
import { Navigate } from "react-router-dom";
import { useAuth } from "./UseAuth";
const Protectedroute = ({children}) => {
    const isAuthenticated = useAuth();
    {console.log(isAuthenticated.authed)}
  return (
   
    isAuthenticated.authed ? children : <Navigate to='/' replace/>

  );
}

export default Protectedroute;
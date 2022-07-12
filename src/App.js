import Login from './Pages/Login';
import React , {useState , useEffect} from 'react';
import axios from "axios"
import MainRoute from './Routes/MainRoute';
const App = () => {
  const [Authenticated , setAuthenticated] = useState(false);

  const message = "Connection Established With Backend"


  useEffect( () => {

    const conn = async() => {
    try {
			  await axios.post("/start", {
				message
			})
      .then((responce) => console.log(responce.data))
		} catch (error) {
			console.error(error)
		}}
    conn()
  },[]);


   const setauthtrue = () => {
    setAuthenticated(true);
   }
   const setauthfalse = () => {
    setAuthenticated(false);
   }
 return (
  <div>
       {Authenticated ? <MainRoute/> : <Login auth={setauthtrue}/>}
  </div>
   );
 }
 
 export default App;
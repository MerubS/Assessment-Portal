import Login from './Pages/Login';
import React , {useState , useEffect , useContext} from 'react';
import axios from "axios"
import MainRoute from './Routes/MainRoute';
import { ContextProvider } from './Routes/UseAuth';


const App = () => {

  const message = "Connection Established With Backend"


  useEffect( () => {

    const conn = async() => {
    try {
			  await axios.post("http://localhost:8080/start", {
				message
			})
      .then((responce) => console.log(responce.data))
		} catch (error) {
			console.error(error)
		}}
    conn()
  },[]);

 return (
  //  <div>
  //    {Authenticated ? <MainRoute logauth={setauthtrue} nlogauth={setauthfalse}/> : <Login auth={setauthtrue}/>} 
  //  </div>
  // <Login/>
 <ContextProvider>
  <MainRoute/>
 </ContextProvider>
  );
 }
 
 export default App;
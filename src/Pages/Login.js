import { useState, useContext } from 'react';
import { Row , Form , Button, Container } from 'react-bootstrap';
import './Login.css'
import axios from "axios"
import {useAuth} from '../Routes/UseAuth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [logincred,setlogincred] = useState({email : '' , pass : '' });
  var login_status = '';
  const navigate = useNavigate();  
  const login = useContext(useAuth)
  const submitHandler = async e => {
    e.preventDefault()
    await checking();
    if (login_status === "Success"){              
      login();
    }
    else{
      console.log('User not Found')
      /// Login failed
    }
  }

  const checking = async () => {
    
  try {
              await axios.post("http://localhost:8080/sendData", 
              {logincred}).then((responce) => {
                login_status = responce.data
               console.log(login_status)
      })
      } catch (error) {
          console.error(error)
  }
  } 

   return(
 <div>
 <div className="split left">
  <div className="centered">
    <h1 style={{color:'white',fontSize:'7vw'}}>Assessment Portal</h1>
    <p style={{color:'white', marginLeft:50 , paddingTop: 30 , fontWeight:400 , fontSize: 20}}> " Gains in acheivement appear to be quite considerable, and as noted earlier, amongst the largest ever reported confirmed by the major reviews of research on the effects of formative assessment "  </p>
  </div>
</div>

<div className="split right">
  <div className="centeredform">

      <h1> Welcome Aboard </h1>
      <p style={{color:'grey' , paddingTop: 10 , fontWeight:400 , fontSize: 13}}> Glad to have you back! We offer an assortment of quality services to build and preserve the public image of your brand </p>

      <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(event) => {
      setlogincred({
        ...logincred , email : event.target.value ,
      })
    }} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(event) => {
      setlogincred({
        ...logincred , pass : event.target.value ,
      })
    }} />
  </Form.Group>
<Row style={{padding:10}}>
  <Button variant="primary" type="submit">
    Login
  </Button>
  </Row>
</Form>
  </div>
</div>
</div>
   );
}

export default Login;
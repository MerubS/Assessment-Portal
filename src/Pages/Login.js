import { Row , Form , Button, Container } from 'react-bootstrap';
import './Login.css'
function Login() {
   return(
 <div>
 <div class="split left">
  <div class="centered">
    <h1 style={{color:'white',fontSize:'7vw'}}>Assessment Portal</h1>
    <p style={{color:'white', marginLeft:50 , paddingTop: 30 , fontWeight:400 , fontSize: 20}}> " Gains in acheivement appear to be quite considerable, and as noted earlier, amongst the largest ever reported confirmed by the major reviews of research on the effects of formative assessment "  </p>
  </div>
</div>

<div class="split right">
  <div class="centeredform">

      <h1> Welcome Aboard </h1>
      <p style={{color:'grey' , paddingTop: 10 , fontWeight:400 , fontSize: 13}}> Glad to have you back! We offer an assortment of quality services to build and preserve the public image of your brand </p>

      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
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
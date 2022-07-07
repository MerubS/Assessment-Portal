import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Question from './Pages/Question';
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router,Switch, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar> </Navbar>
      <Routes> 
      <Route path='/Questions' element={<Question/>} />
      <Route path='/Logout' element={<Login/>} />
      <Route path='/' element={<Question/>} />
      </Routes>
    </Router>
  );
}

export default App;

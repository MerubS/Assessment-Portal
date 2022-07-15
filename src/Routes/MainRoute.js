import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../Pages/Navbar'
import Question from '../Pages/Question'
import Login from '../Pages/Login'
import Protectedroute from './Protectedroute'
const MainRoute = (props) => {  
   return (
    <Router>
      <Navbar> </Navbar>
      <Routes> 
      <Route path='/Questions' element={<Protectedroute> <Question/> </Protectedroute>} />
      <Route path='/Logout' element={<Protectedroute> <Login/> </Protectedroute>} />
      <Route path='/' element={<Login/>} />
      </Routes>
    </Router>
   );
}

export default MainRoute;
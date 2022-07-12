import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../Pages/Navbar'
import Question from '../Pages/Question'
import Login from '../Pages/Login'
const MainRoute = () => {  
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

export default MainRoute;
import './Question.css'
import Card from '../Components/Card.js'
import {Container , Button , Row , Col} from 'react-bootstrap'
function Question() {
  const qdata = [
    [1, 'Some question', 'Op 1', 'Op 2', 'Op 3' , 'Op 4'],
    [2, 'Some question', 'Op 1', 'Op 2', 'Op 3' , 'Op 4'],
    [3, 'Some question', 'Op 1', 'Op 2', 'Op 3' , 'Op 4'],
    [4, 'Some question', 'Op 1', 'Op 2', 'Op 3' , 'Op 4'],
    [5, 'Some question', 'Op 1', 'Op 2', 'Op 3' , 'Op 4'],
  ]
 return(
  <Container style={{marginLeft:'15%',backgroundcolor:'green', paddingTop:'5%'}}> 
   <Card data = {qdata[0]} />
   <Card data = {qdata[1]} />
   <Card data = {qdata[2]} />
   <Card data = {qdata[3]} />
   <Card data = {qdata[4]} />
     <Row style={{paddingTop: 25, justifyContent:'end'}} > 
      <Col sm={3}> 
    <Button variant='outline-info' className='float-right'> Next </Button>
     </Col>
    </Row>
  </Container>


 );

}

export default Question;
import './Question.css'
import Qdisplay from '../Components/Qdisplay'
import {Container , Button , Row , Col, Card , Form} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Question = () => {

  const [loading,setloading] = useState(false);
  const [qdata , setqdata] = useState({});

  useEffect( () => {

    const conn = async() => {
    try {
			  await axios.get("http://localhost:8080/getQuestions")
      .then((responce) => {

        if (responce.data.length > 0) {
         setqdata([...responce.data])
        //  console.log(qdata)   
          setloading(true) 
      }

         else {
          console.log("Question Fetch Failed")
         }
        })
		} catch (error) {
			console.error(error)
		}}
    conn() 
  },[]);

 return(
  <Container style={{marginLeft:'15%',backgroundcolor:'green',paddingTop:'3%'}}> 
 {loading && qdata.map((d,index) => ( 
 <Row> <Qdisplay data={d} index={index}/> </Row>
 )) }
     <Row style={{paddingTop: 25, justifyContent:'end'}} > 
      <Col sm={3}> 
    <Button variant='outline-info' className='float-right'> Submit </Button>
     </Col>
    </Row>
  </Container>
 );
 
}

export default Question;
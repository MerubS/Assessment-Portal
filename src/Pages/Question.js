import './Question.css'
import Card from '../Components/Card.js'
import {Container , Button , Row , Col} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
function Question() {

  const [loading,setloading] = useState(false);
  const [qdata , setqdata] = useState({});

  useEffect( () => {

    const conn = async() => {
    try {
			  await axios.get("/getQuestions")
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
  // <div>
  //   {loading && console.log("The data is",qdata)}
  //   {
  //     loading && qdata.map((d) => {console.log("In div", d)})
  // }
  // </div>
  <Container style={{marginLeft:'15%',backgroundcolor:'green', paddingTop:'5%'}}> 
  {loading && qdata.map((d) =>{
    <Card q= {d.Question} op1 = {d.Option1} op2 ={d.Option2} op3 ={d.Option3} op4 ={d.Option4}/>
  })}
     <Row style={{paddingTop: 25, justifyContent:'end'}} > 
      <Col sm={3}> 
    <Button variant='outline-info' className='float-right'> Next </Button>
     </Col>
    </Row>
  </Container>
 );
 
}

export default Question;
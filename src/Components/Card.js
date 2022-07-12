import {Card , Form} from 'react-bootstrap';

function QuestionCard(props) {
return(
    <Card style={{ width: '80vw' , marginBottom:'1%'}}>
  <Card.Body>
    <Card.Title> Question no: </Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> {console.log("In card",props.q)} </Card.Subtitle>
    <Card.Text>
    <Form style={{paddingLeft:40}}>
    <Form.Check 
        type= 'radio'
        id= 'one'
        label= {props.op1}
      />
        <Form.Check 
        type= 'radio'
        id= 'two'
        label= {props.op2}
      />
        <Form.Check 
        type= 'radio'
        id= 'three'
        label= {props.op3}
      />
        <Form.Check 
        type= 'radio'
        id= 'four'
        label= {props.op4}
      />
    </Form>
    </Card.Text>
  </Card.Body>
</Card>
);

}

export default QuestionCard;
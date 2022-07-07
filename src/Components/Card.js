import {Card , Form} from 'react-bootstrap';

function QuestionCard(props) {
return(
    <Card style={{ width: '80vw' , marginBottom:'1%'}}>
  <Card.Body>
    <Card.Title> Question no: {props.data[0]} </Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> {props.data[1]} </Card.Subtitle>
    <Card.Text>
    <Form style={{paddingLeft:40}}>
    <Form.Check 
        type= 'radio'
        id= 'one'
        label= {props.data[2]}
      />
        <Form.Check 
        type= 'radio'
        id= 'two'
        label= {props.data[3]}
      />
        <Form.Check 
        type= 'radio'
        id= 'three'
        label= {props.data[4]}
      />
        <Form.Check 
        type= 'radio'
        id= 'four'
        label= {props.data[5]}
      />
    </Form>
    </Card.Text>
  </Card.Body>
</Card>
);

}

export default QuestionCard;
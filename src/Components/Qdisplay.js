import {Card , Form} from 'react-bootstrap';
const Qdisplay = (props) => {
 return (
    <Card style={{ width: '80vw' , marginBottom:'1%' , marginleft:'0%'}}>
    <Card.Body>
      <Card.Title> Question no: {props.index + 1}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted"> {props.data.Question} </Card.Subtitle>
      <Card.Text>
      <Form style={{paddingLeft:40}}>
      <Form.Check 
          type= 'radio'
          id= 'one'
          label= {props.data.Option1}
        />
          <Form.Check 
          type= 'radio'
          id= 'two'
          label= {props.data.Option2}
        />
          <Form.Check 
          type= 'radio'
          id= 'three'
          label= {props.data.Option3}
        />
          <Form.Check 
          type= 'radio'
          id= 'four'
          label= {props.data.Option4}
        />
      </Form>
      </Card.Text>
    </Card.Body>
  </Card>
 );
}

export default Qdisplay;
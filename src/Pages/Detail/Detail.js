import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Detail = () => {
    const { serviceName, serviceDescription } = useParams();
    return (
        <div className="mt-5 service">
            
        <Card className="card_body">
 
 <Card.Body>
   <Card.Title><h3>{serviceName}</h3></Card.Title>
   <Card.Text>
     {serviceDescription}
   </Card.Text>
 </Card.Body>
 <Card.Footer>
   <Link to="/home">
   <Button className="btn btn-warning">Back</Button>
   </Link>
   
 </Card.Footer>
</Card>
     </div>
    );
};

export default Detail;
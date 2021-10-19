import React from 'react';
import { Card } from 'react-bootstrap';

const LastSection = ({detail}) => {
    const {name, descrip, img} = detail;
    return (
        <div className="mt-5 pb-5 ">
             <Card className="card_body">
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title><h3>{name}</h3></Card.Title>
      <Card.Text>
        {descrip}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default LastSection;
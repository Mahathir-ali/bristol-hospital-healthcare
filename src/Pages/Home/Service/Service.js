import React from 'react';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {serviceName, description, id, img } = service;
    const arrow = <FontAwesomeIcon icon={faChevronRight}/>

    return (
        <div className="mt-5">
           <Card className="card_body">
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title><h3>{serviceName}</h3></Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link to={`/detail/${id}`}>
      <Button className="btn btn-warning">Find out more {arrow}</Button>
      </Link>
      
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Service;
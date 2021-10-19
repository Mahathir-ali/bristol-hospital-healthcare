import React from 'react';
import { useParams } from 'react-router';


const Detail = () => {
    const {serviceId } = useParams();
    return (
        <div>
            <h1>{serviceId}</h1>
        </div>
    );
};

export default Detail;
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404/404.png';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="notFound">
            <img src={notfound} alt="" />
            <br/>
            <Link to="/home"><button className="back-btn">Go Back</button></Link>
        </div>
    );
};

export default NotFound;
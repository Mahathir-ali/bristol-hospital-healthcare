import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex justify-content-between p-3">
                <div><h2>Bristol</h2></div>
                <div><h3>Heal. Learn. Discover</h3></div>
            </div>
            <div className="footer_links">
                <div>
                    <h3> Quick Links </h3>
                    <p> <a href="/">Find a service</a> </p>
                    <p> <a href="/">Contact us</a> </p>
                    <p> <a href="/">Research</a> </p>
                    <p> <a href="/">Education</a></p>
                </div>
                <div>
                    <h3> Inforamtion For</h3>
                    <p> <a href="/">Patients & Visitors</a></p>
                    <p> <a href="/">Future Students</a></p>
                </div>
                <div>
                    <h3>About</h3>
                    <p> <a href="/">Why choose Bristol</a></p>
                    <p> <a href="/">About Bristol</a></p>
                    <p> <a href="/">Privacy policy</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
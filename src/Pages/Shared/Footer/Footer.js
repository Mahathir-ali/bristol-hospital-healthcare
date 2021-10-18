import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex justify-content-between p-3">
                <div><h2>i-Care</h2></div>
                <div><h3>Heal. Learn. Discover</h3></div>
            </div>
            <div className="footer_links">
                <div>
                    <h3>Quick Links</h3>
                    <p>Find a service</p>
                    <p>Contact us</p>
                    <p>Research</p>
                    <p>Education</p>
                </div>
                <div>
                    <h3>Inforamtion For</h3>
                    <p>Patients & Visitors</p>
                    <p>Future Students</p>
                </div>
                <div>
                    <h3>About</h3>
                    <p>Why choose i-Care</p>
                    <p>About i-Care</p>
                    <p>Privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import './Education.css'
const Education = () => {
    return (
        <div>
            <h1>
            Integrated learning in a unique environment
            </h1>
            <p>Bristol provides transformative learning experiences for the future leaders of healthcare. Our education programs are enriched by the latest medical research and the excellent clinical care offered by our hospital and clinics.</p>

            <h4>Our programs</h4>
            <p>Our high-quality education programs  have been designed to enrich well-established educational approaches with current and emerging innovations. They are innovative and future-focused, with a meaningful emphasis on</p>

            <ul>
                <li>patient-centred care, informed by world-class clinicians</li>
                <li>translational research, inspired by groundbreaking researchers, and</li>
                <li>interprofessional learning</li>
                <li>GP education series.</li>
            </ul>
            <hr/>
            <div className="courses">
                <div className="card">
                    <h5>Bachelor of Clinical Science</h5>
                    <p>Gain skills you will need for a career in health and research.</p>
                </div>
                <div className="card">
                    <h5>Doctor of Medicine</h5>
                    <p>A future-focused program that produces professional graduates.</p>
                </div>
                <div className="card">
                    <h5>Doctor of Physiotherapy</h5>
                    <p>Learn to assess, diagnose and treat a range of health conditions.</p>
                </div>
                <div className="card">
                    <h5>Master of Public Health</h5>
                    <p>This degree prepares you for a dynamic career in public health.</p>
                </div>
                <div className="card">
                    <h5>Psychology programs</h5>
                    <p>Preparing you for a career in psychology or neuropsychology.</p>
                </div>
                <div className="card">
                    <h5>Speech and hearing programs</h5>
                    <p>Giving you skills you’ll need for a career in these fields.</p>
                </div>
            </div>

        </div>
    );
};

export default Education;
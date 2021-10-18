import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Education = () => {
    const arrow = <FontAwesomeIcon icon={faChevronRight}/>
    return (
        <div className="my-5">
            <h1>A fully-integrated academic<br/> health science center</h1>
            <div className="d-flex row row-cols-1 mt-5">
                <div className="col col-lg-6 col-md-6">
                    <h3>i-Care Heath is a trailblazer in<br/> healthcare, education and research</h3>
                    <p>
                     First and only fully integrated academic health sciences centre brings together the excellence in clinical care provided by i-Care Hospital and MQ Health Clinics with the research and teaching enterprise of the Faculty of Medicine, Health and Human Sciences.
                    </p>
                    <button>Find out more {arrow}</button>
                </div>
                <div className="col col-lg-6 col-md-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WxusGkNW_6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Education;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner.png'
import banner2 from '../../../images/operation.jpg'
import banner3 from '../../../images/happy-life.jpg'
// import'./Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel fade className="slider" >
  <Carousel.Item>
    <img
      className="d-block w-100 h-50" 
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className="text-dark">
      <h3>We Provide the best treatment.</h3>
      <p>Tell your all problems and we will you to recover and you can live a healthy life.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption className="text-dark">
      <h3>The top surgeons of our country now is in our hospital.</h3>
      <p>Now you will get the best treatment in town in one place.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption className="text-dark">
      <h3>Excellence in patient-centered care, teaching & research.</h3>
      <p>Co-operate with us tell us what are you facing and we will help you to recover.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;
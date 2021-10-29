import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/banner1.jpg'
import image2 from '../../../images/banner2.jpg'
import image3 from '../../../images/banner3.jpg'


const Banner = () => {
    return (
        <div id="home" className="  banner-Container mb-5">
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Adventure is worthwhile"
    />
    <Carousel.Caption>
      <h3>The best view comes after the hardest climb</h3>
      <h5>“Climb the mountains and get their good tidings. Nature’s peace will flow into you as sunshine flows into trees.”</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>If your ship doesn't come in, swim out and meet it</h3>
      <h5>Being on a boat that's moving through the water, it's so clear. Everything falls into place in terms of what's important and what's not.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Paragliding takes an adventure through life</h3>
      <h5>Flying in smooth weather on a paraglider can be surprisingly calm and relaxing.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;
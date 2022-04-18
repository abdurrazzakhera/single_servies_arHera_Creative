import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.png";
import banner2 from "../../../images/banner/banner2.png";
import banner3 from "../../../images/banner/banner3.png";
import banner4 from "../../../images/banner/banner4.png";
import banner5 from "../../../images/banner/banner5.png";
import banner6 from "../../../images/banner/banner6.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='d-block w-100' src={banner1} alt='First slide' />
        <Carousel.Caption className='text-secondary'>
          <h3 className='fs-1'>Love Forever</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={banner3} alt='Third slide' />

        <Carousel.Caption>
          <h3 className='fs-1'>Outdoor Session Signature</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={banner4} alt='Third slide' />

        <Carousel.Caption>
          <h3 className='fs-1'>Studio Session Standard</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={banner5} alt='Third slide' />

        <Carousel.Caption>
          <h3 className='fs-1'>Outdoor Session Signature Blast</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={banner6} alt='Third slide' />

        <Carousel.Caption className='text-black '>
          <h3 className='fs-1'>Traditional Wedding Ceremony</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

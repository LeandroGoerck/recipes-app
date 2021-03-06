import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselItem({ imgsrc1 }) {
  if (imgsrc1 === undefined) {
    return <span>error</span>;
  }
  return (
    <Carousel.Item>
      <img
        className="d-block w-100 bg-success text-dark"
        src={ imgsrc1 }
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

CarouselItem.propTypes = {
  imgsrc1: PropTypes.string.isRequired,
  // imgsrc2: PropTypes.string.isRequired,
};

export default CarouselItem;

import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
    return (
        <Carousel fade className='py-5'>
            <Carousel.Item className='carousel-item'>
                <img
                    className="d-block w-100"
                    src="images/slider1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='carousel-item'>
                <img
                    className="d-block w-100"
                    src="images/slider2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

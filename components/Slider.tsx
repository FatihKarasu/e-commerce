import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
    return (
        <Carousel fade className='py-5'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.dsmcdn.com/ty427/pimWidgetApi/webBig_20220511102116_2197927KadinWeb202205111101.jpg"
                    alt="First slide"
                />
             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.dsmcdn.com/ty423/campaign/banners/original/605258/a1d1256a19_0_new.jpg"
                    alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.dsmcdn.com/ty426/pimWidgetApi/webBig_20220511083946_2214986KadinWeb202203231801.jpg"
                    alt="Third slide"
                />

                
            </Carousel.Item>
        </Carousel>
    )
}

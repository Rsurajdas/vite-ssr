import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BANNERS = [
    {
        id: 1,
        image: "/images/slider/slider_1.webp",
    },
    {
        id: 2,
        image: "/images/slider/slider_2.webp",
    },
    {
        id: 3,
        image: "/images/slider/slider_3.webp",
    },
    {
        id: 4,
        image: "/images/slider/slider_4.webp",
    },
    {
        id: 5,
        image: "/images/slider/slider_5.webp",
    },
    {
        id: 6,
        image: "/images/slider/slider_6.webp",
    },
    {
        id: 7,
        image: "/images/slider/slider_7.webp",
    },
    {
        id: 8,
        image: "/images/slider/slider_8.webp",
    },
    {
        id: 9,
        image: "/images/slider/slider_9.webp",
    },
]


export default function MainSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
            {BANNERS.map(item => <Carousel.Item key={item.id}>
                <img src={item.image} alt="main-banner" className='main-slider-img' />
                <Carousel.Caption>
                    <h1 className='mb-4'>Solution Provider for Bulk Solids Handling</h1>
                    <Link to="/contact" className='button button-solid'>Contact Us</Link>
                </Carousel.Caption>
            </Carousel.Item>)}
        </Carousel>
    );
}


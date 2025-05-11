// src/components/HeroBanner.js
import React, { useState, useEffect } from 'react';
import './HeroBanner.css';
import hero1 from '../../../assets/images/add1.jpg';
import hero2 from '../../../assets/images/add2.jpg'; 
import hero3 from '../../../assets/images/add3.jpg';

const banners = [
  {
    image: hero1,
    // heading: 'Best Deal Online on Smart Watches',
    // subtext: 'SMART WEARABLE. Up to 80% OFF',
  },
  {
    image: hero2,
    // heading: 'Exclusive Fitness Bands Collection',
    // subtext: 'FITNESS TRACKERS. Flat 50% OFF',
  },
  {
    image: hero3,
    // heading: 'New Arrivals: Luxury Smart Watches',
    // subtext: 'LUXURY WEAR. Save Big Today!',
  },
];

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  const { image,  } = banners[index];

  return (
    <section className="hero-banner">
      {/* <div className="hero-content"> */}
        {/* <h1>{heading}</h1> */}
        {/* <p>{subtext}</p> */}
        {/* <button className="shop-now">Shop Now</button> */}
      {/* </div> */}
      <div className="hero-image">
        <img src={image} alt="add" />
      </div>
    </section>
  );
};

export default HeroBanner;

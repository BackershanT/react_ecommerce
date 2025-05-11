// src/pages/Home.js
import React from 'react';
import Navbar from '../../components/home/Navbar/Navbar';
import HeroBanner from '../../components/home/HeroBanner/HeroBanner';
// import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import Categories from '../../components/CategorySection/CategorySection';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Categories />
      <Footer/>

    </>
  );
};

export default Home;

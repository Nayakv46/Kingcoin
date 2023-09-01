import React from 'react';


import Trending from '../components/Trending';
import Markets from '../components/Markets';
import WhyUs from '../components/WhyUs';
import Join from '../components/Join';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Trending />
      <Markets />
      <WhyUs />
      <Join />
      <Footer />
    </>
  )
}

export default Home
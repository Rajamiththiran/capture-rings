import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { Reviews } from '../components/reviews';
import { Portfolio } from '../components/portfolio';

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Reviews />
      <Portfolio />
      <Footer />
    </div>
  );
};

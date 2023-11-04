import React from 'react'
import './HHero.scss'

const HHero = () => {
  return (
    <section className="relative bg-image">
      <div className="absolute inset-0 bg-white-overlay"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center text-direction">
          <h1 className="text-title">
          Setting Standards.
            <br />
            <strong className="block font-rose-700">Elevating Hospitality.</strong>
          </h1>
          <p className="text-description">
          Elevating Hospitality through a Symphony of Excellence, Expertise, Passion, and Unforgettable Experiences for Your Success.
          </p>
          <div className="button-group">
            <a href="#" className="button button-start">
              Get Started
            </a>
            {/* <a href="#" className="button button-learn-more">
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HHero
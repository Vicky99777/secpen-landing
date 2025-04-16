import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-dark text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">SecPen Labs</h1>
        <p>Advanced Cybersecurity Solutions</p>
        <a href="#dashboard" className="btn btn-light btn-lg">Explore Dashboard</a>
      </div>
    </section>
  );
};

export default Hero;
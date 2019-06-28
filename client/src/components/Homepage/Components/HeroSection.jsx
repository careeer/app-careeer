import React from 'react';
import { Link } from 'react-router-dom';
import ReactRotatingText from 'react-rotating-text';

import HeroImage from '../../Icons/HeroImage';

const HeroSection = () => (
  <section className="heroSection">
    <div className="contentContainer">
      <HeroImage />
      <div className="heroContent">
        <h1>
          Transition <br />
          your career <br />
          &nbsp;
          <strong className="rotatingText">
            <ReactRotatingText
              cursor={false}
              pause={2000}
              emptyPause={10}
              typingInterval={50}
              deletingInterval={10}
              items={[
                'Product Management',
                'UX Design',
                'Tech Sales',
                'Freelance',
                'Software Development',
                'Business Development',
              ]}
            />
          </strong>
        </h1>
        <button className="signUpLink">
          <Link to="/createAccount">Get Started</Link>
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;

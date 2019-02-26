import React from 'react';

import LightbulbsImage from '../../Icons/LightbulbsImage';
import HiBubbleImage from '../../Icons/HiBubbleImage';
import Anya from '../../Icons/Images/Anya.png';
import Tiffany from '../../Icons/Images/Tiffany.png';
import Onex from '../../Icons/Images/Onex.png';

const About = () => (
  <div className="aboutPage">
    <header className="aboutHero">
      <LightbulbsImage />
      <h1>About Us</h1>
      <HiBubbleImage />
    </header>
    <div className="container">
      <div className="greenRectangle" />
      <article className="ourVision">
        <h1>
          <span className="greenInlineRectangle">Our vision</span> is to build a
          bridge to jobs in tech
        </h1>
        <section>
          <p>
            At Careeer.me, we know what it’s like to struggle through the job
            search process. We have experienced the process ourselves, and found
            that it was like trudging through mud. Up a mountain. With rain.
          </p>
          <p>
            Having coached hundreds of working professionals as they look for
            their first (or 5th) job in tech, we’ve learned a few things:
          </p>
          <ul>
            <li>
              <h3>1. Direction is usually missing</h3>
              <p>“I know what I want, but how do I get there?”</p>
            </li>
            <li>
              <h3>2. Mentorship</h3>
              <p>“I need advice from somebody who works in the field”</p>
            </li>
            <li>
              <h3>3. Accountability</h3>
              <p>
                “I get bored/sidetracked/stop caring/apathetic about the job
                search process”
              </p>
            </li>
          </ul>
          <p>
            We’ve found that direction, mentorship, and custom skill development
            are critical to creating a successful job search strategy. We built
            Careeer.me to provide a clear path to jobs in tech, while solving
            the trending issues in communication and interviewing skills.
          </p>
          <p>
            You can read more about why we started Careeer.me &nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@careeer.me/why-i-built-careeer-me-ff5869503d1e"
            >
              here
            </a>
          </p>
        </section>
      </article>
      <header className="aboutTitle">
        <h1>Our Team</h1>
      </header>
      <section className="ourTeam">
        <figure>
          <a href="https://www.linkedin.com/in/anya-iverova-27046822/">
            <img src={Anya} alt="Anya" />
            <figcaption>
              Anya Iverova
              <br />
              CEO/Coach/Founder
            </figcaption>
          </a>
        </figure>
        <figure>
          <a href="https://www.linkedin.com/in/tiffanyestrella">
            <img src={Tiffany} alt="Tiffany" />
            <figcaption>
              Tiffany Estrella
              <br />
              UX/UI Designer
            </figcaption>
          </a>
        </figure>
        <figure>
          <a href="https://www.linkedin.com/in/onex-g/">
            <img src={Onex} alt="Onex" />
            <figcaption>
              Onex Gonzalez
              <br />
              App Developer
            </figcaption>
          </a>
        </figure>
      </section>
    </div>
  </div>
);

export default About;

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
      <h1>
        About Us
      </h1>
      <HiBubbleImage />
    </header>
    <div className="container">
      <div className="greenRectangle" />
      <article className="ourVision">
        <h1>
          <span className="greenInlineRectangle">Our vision</span> is to
          build a bridge to
          jobs in tech
        </h1>
        <section>
          <p>
            At Careeer.me, we know what it’s like to change your career from
            non-tech to tech. We have experienced the process ourselves, and
            found that it was like trudging through mud. Up a mountain. With rain.
          </p>
          <p>
            Having coached hundreds of working professionals as they transition
            their careers we’ve learned a few things:
          </p>
          <ul>
            <li>
              <h3>1. Direction is usually missing</h3>
              <p>“I know what I want, but how do I get there?”</p>
            </li>
            <li>
              <h3>2. Mentorship</h3>
              <p>“I want to talk to somebody who works in the field”</p>
            </li>
            <li>
              <h3>3. Accountability</h3>
              <p>“I get bored/sidetracked/stop caring/apathetic”</p>
            </li>
          </ul>
          <p>
            We’ve found that direction, accountability, and focused skill development
            are critical to moving forward and staying focused on your career goal. We
            built Careeer.me to provide a clear path to jobs in tech, while solving
            the trending issues we’ve seen in career services solutions.
          </p>
        </section>
      </article>
      <header className="aboutTitle">
        <h1>Our Team</h1>
      </header>
      <section className="ourTeam">
        <figure>
          <img src={Anya} alt="Anya" />
          <figcaption>
            Anya Iverova<br />
            CEO/Coach/Founder
          </figcaption>
        </figure>
        <figure>
          <img src={Tiffany} alt="Tiffany" />
          <figcaption>
            Tiffany Estrella<br />
            UX/UI Designer
          </figcaption>
        </figure>
        <figure>
          <img src={Onex} alt="Onex" />
          <figcaption>
            Onex Gonzalez<br />
            App Developer
          </figcaption>
        </figure>
      </section>
    </div>
  </div>
);

export default About;

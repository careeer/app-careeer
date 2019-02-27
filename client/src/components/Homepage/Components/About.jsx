import React from 'react';

import LightbulbsImage from '../../Icons/LightbulbsImage';
import HiBubbleImage from '../../Icons/HiBubbleImage';

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
          <span className="greenInlineRectangle">Our vision</span> is to build a bridge to jobs in
          tech
        </h1>
        <section>
          <p>
            At Careeer.me, we know what it’s like to struggle through the job search process. We
            have experienced the process ourselves, and found that it was like trudging through mud.
            Up a mountain. With rain.
          </p>
          <p>
            Having coached hundreds of working professionals as they look for their first (or 5th)
            job in tech, we’ve learned a few things:
          </p>
          <ul>
            <li>
              <h3>Direction is usually missing</h3>
              <p>“I know what I want, but how do I get there?”</p>
            </li>
            <li>
              <h3>Mentorship</h3>
              <p>“I need advice from somebody who works in the field”</p>
            </li>
            <li>
              <h3>Accountability</h3>
              <p>“I get bored/sidetracked/stop caring/apathetic about the job search process”</p>
            </li>
          </ul>
          <p>
            We’ve found that direction, mentorship, and custom skill development are critical to
            creating a successful job search strategy. We built Careeer.me to provide a clear path
            to jobs in tech, while solving the trending issues in communication and interviewing
            skills.
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
        <h1>Our Coaches</h1>
      </header>
      <section className="ourTeam ourCoaches">
        <p>
          You will work with coaches who are experts in their field and have direct professional
          experience as product managers, UX designers, software engineers, project managers, sales
          professionals, and more. We understand how to review portfolios, the difference between
          agile and scrum, and why you used MEAN stack to build your platform.
        </p>
        <p>
          Careeer.me’s primary coach is the CEO and Founder, Anya Iverova. Here are highlight’s from
          Anya’s career path:
        </p>
        <ul>
          <li>8 years in the education industry</li>
          <br />
          <li>
            Started out in university partnership development and corporate business development
          </li>
          <br />
          <li>PM instructor at General Assembly</li>
          <br />
          <li>
            Launched Fresh Conceptual, product design studio and worked with clients such as
            DMV.ORG, City of West Hollywood, and King Chavez Charter School.
          </li>
          <br />
          <li>
            Launched Careeer.me to provide personalized career support for current tech
            professionals and newbies gaining traction in the field.
          </li>
        </ul>
      </section>
      <header className="aboutTitle culture">
        <h1>What you can expect from our culture:</h1>
      </header>
      <section className="ourTeam">
        <p>
          <strong>Efficiency</strong> - we work with a sense of urgency to get you into your next
          job, fast.
        </p>
        <br />
        <p>
          <strong>Personability</strong> - No robots here, but rather, smart people who listen
          deeply, genuinely appreciate your business, and gameplan with you to get you where you
          want to be.
        </p>
        <br />
        <p>
          <strong>Empathy</strong> - If you know exactly what you want, we’re right there with you.
          If you’re not sure, we’ll do everything we can to assess the situation and figure it out
          together. And if you’re feeling depressed, insecure, or otherwise crappy, we understand
          and will meet you where you’re at.
        </p>
      </section>
    </div>
  </div>
);

export default About;

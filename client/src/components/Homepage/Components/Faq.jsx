import React from 'react';

import QuestionsImage from '../../Icons/QuestionsImage';
import LoudspeakerImage from '../../Icons/LoudspeakerImage';

const Faq = () => (
  <div className="faqPage">
    <header className="faqHero">
      <QuestionsImage />
      <h1>
        Frequently Asked Questions
      </h1>
      <LoudspeakerImage />
    </header>
    <section>
      <h2>
        What if I’m not sure which role I want to pursue?
      </h2>
      <p>
        In this case, we recommend you sign up for our free trial. Based on your conversation
        with your coach, we will direct you to the right resources, whether that’s one of our
        programs, or a trusted resource.
      </p>
      <h2>
        Are you affiliated with any schools or education companies?
      </h2>
      <p>
        We are not affiliated with any of the schools we recommend. Therefore, we are able to
        provide an objective, expert resource for you, without pushing any particular school.
      </p>
    </section>
    <header className="faqTitle">
      <h1>Our Services</h1>
    </header>
    <section className="ourServices">
      <h2>
        What is a career roadmap?
      </h2>
      <p>
        A step-by-step plan, co-created by you and your coach, monitored weekly for progress
        towards your goal. Your roadmap is flexible, taking into account your timeline, budget,
        and overall goals.
      </p>
      <p>
        A career roadmap is helpful if:
      </p>
      <ul>
        <li> You’re stuck on figuring out your next steps </li>
        <li> You’re lacking direction or focus </li>
        <li> You’re getting lost in the weeds of the job application and interview process </li>
      </ul>
      <h2>
        What is on-demand coaching?
      </h2>
      <p>
        You get your own coach to support you every step of the way through in-app
        messaging. Your coach is available during the week 9am - 5pm EST.
      </p>
      <h2>
        I want on-the-job coaching to get a promotion and/or excel in my current role.
      </h2>
      <p>
        We provide on-the-job coaching across a variety of roles in tech, including UX Design,
        Product Management, Sales, Business Development, Engineering, and more. Sign up
        for a free trial and chat with a coach to create a custom plan.
      </p>
      <h2>
        What can I expect when I sign up?
      </h2>
      <p>
        You’ll have a free 20min call and receive a personalized career roadmap, starting in one
        of the following areas:
      </p>
      <ul>
        <li> Education plan </li>
        <li> Professional rebranding </li>
        <li> Interview prep </li>
        <li> Job search strategy </li>
        <li> Offer negotiation </li>
        <li> On-the-job coaching </li>
      </ul>
    </section>
    <header className="faqTitle">
      <h1>Education Plan</h1>
    </header>
    <section className="educationPlan">
      <h2>
        What is a personalized education plan?
      </h2>
      <p>
        An assessment-based education plan that consists of the courses you need fill your current
        skill gaps.
      </p>
      <h2>
        Is an education plan right for me?
      </h2>
      <p>
        If you’re getting lost in the weeds of researching tech courses, or if you know you’re
        missing certain skills, a custom education plan is for you. Because we are not affiliated
        with any of the schools we recommend, our software creates a plan that is right for you,
        not for someone else.
      </p>
    </section>
    <header className="faqTitle">
      <h1>Professional Branding</h1>
    </header>
    <section className="professionalBranding">
      <h2>
        What does professional branding consist of?
      </h2>
      <p>
        We help you update your linkedin, cover letter, resume, and UX portfolio to fit your news
        kills and tech persona.
      </p>
    </section>
    <header className="faqTitle">
      <h1>Interview Prep</h1>
    </header>
    <section className="interviewPrep">
      <h2>
        What does interview prep consist of?
      </h2>
      <p>
        Trainings created by our CEO on topics such as interview strategy, humanizing
        the job search process, how to pitch your value-add, how to communicate your process,
        and other topics that raise self-awareness and help you develop an entirely different
        perspective and skill-set for interviewing. Oh yeah, and 1:1 mock interviews with your
        coach to help you apply your new skills and sharpen your pitch :)
      </p>
    </section>
    <header className="faqJobSearchTitle">
      <h1>Job Search Strategy</h1>
    </header>
    <section className="jobSearchStrategy">
      <h2>
        What does job search strategy consist of?
      </h2>
      <p>
        Strategic, personalized support from your coach, including trainings
        on how to search for jobs in the most efficient,
        effective, and authentic manner. Connecting with hiring managers,
        networking, following-up, and cold-pitching are some of the skills
        we teach.  We even help you create a list of jobs that fit your skill
        set and support you during the application process.
      </p>
    </section>
    <header className="faqTitle">
      <h1>Offer Negotiation</h1>
    </header>
    <section className="offerNegotiation">
      <h2>
        What is offer negotiation?
      </h2>
      <p>
        If you’re at this milestone, Kudos! It’s a good place to be :)
        Your on-demand coach will be there to help you position yourself
        to get the best offer possible. *We recommend Fast Track if you are at this stage.
      </p>
    </section>
    <section className="newQuestion">
      <h2>Don’t see your question on our FAQ list?</h2>
      <h2>Email us at support@careeer.me and we will add it to the list!</h2>
    </section>
  </div>
);

export default Faq;

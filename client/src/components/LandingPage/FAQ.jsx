import React from 'react';
import { Grid } from 'semantic-ui-react';

const FAQ = () => (
  <div className="faqPage">
    <Grid columns="equal">
      <Grid.Row centered>
        <Grid.Column textAlign="center">
          <h1>FAQ&apos;s</h1>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid
      stackable
      columns="equal"
      divided="vertically"
      className="questionList"
    >
      <Grid.Row>
        <Grid.Column>
          <h2>General</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What if I’m not sure which role I want to pursue?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            In this case, we recommend you sign up for our free trial.
            Based on your conversation with the career coach,
            we will be able to direct you to the right resources,
            whether that’s one of our programs,
            or another path that will provide you with direction.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            Are you affiliated with any schools or education companies?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            We are not affiliated with any of the schools we recommend.
            Therefore, we are able to provide an objective,
            expert resource for you, without pushing any particular
            course or favoring a particular budget.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column>
          <h2>Our Services</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What is a career roadmap?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            An assessment based, step-by-step plan,
            that gets you from the role you’re in, to the job you want in tech.
            Your roadmap is flexible, taking into account your timeline, budget, and overall goals.
          </p>

          <p>
            A career roadmap is helpful if:
          </p>
          <ul>
            <li>
              You&apos;re stuck figuring out your next steps
            </li>
            <li>
              You&apos;re lacking direction or focus.
              Taking classes here and there, but sort of lagging behind
              in making the change happen.
            </li>
            <li>
              You&apos;re getting lost in the weeds of figuring out
              which course(s) and skills you need.
            </li>
          </ul>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What is on-demand coaching?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            You get your own coach to support you every step of the way.
            We have found that customers often have questions at random times,
            and not everyone has the network or a mentor to give them career
            guidance <i>when they need it</i>. Some of those random,
            questions that might boggle your mind are:
          </p>
          <ul>
            <li>
              How do I pitch my transferable skills?
            </li>
            <li>
              What is the career trajectory for this role?
            </li>
            <li>
              Does this line in my resume make sense?
            </li>
          </ul>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What can I expect when I sign up with Careeer.me?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            You’ll begin working with a coach Day 1.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            I’m not exactly sure what my next step is in my career,
            I’m feeling a bit stuck. Do you help with that?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            We will help you drill down to the questions you are trying to answer,
            and then create a plan to get you from where you are, to where you want to be.
            When you sign up, you will go through a 20 minute call with a professional
            coach to help you clear your mind, narrow down your focus,
            and take the next step forward.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            After your first coach call, you will start in one of the following 5 milestones:
          </h4>
        </Grid.Column>
        <Grid.Column>
          <ul>
            <li>
              personalized education plan
            </li>
            <li>
              professional rebranding
            </li>
            <li>
              interview prep
            </li>
            <li>
              job search strategy
            </li>
            <li>
              offer negotiation
            </li>
          </ul>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What is a personalized education plan?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            An education plan consists of the courses you need fill your current skill gaps.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            Is an education plan right for me?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            If you’re getting lost in the weeds of researching tech courses,
            or if you know you’re missing certain skills, a custom education plan is for you.
            Because we are not affiliated with any of the schools we recommend,
            our software creates a plan that is right for you, not for someone else.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What does professional rebranding consist of?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            We help you update your linkedin, cover letter, and resume to fit your new skills.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What does interview prep consist of?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            Each plan includes training around interview strategy - how to change
            your lens on the interview and hiring process, how to pitch your value-add,
            how to communicate your process, and other topics that raise self-awareness
            and help you develop an entirely different perspective and strategy for interviewing.
            If you choose the standard or fast track, you will also receive mock
            interview training via video/phone call.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What does job search strategy consist of?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            Strategic, personalized support on how to search for jobs in the most efficient,
            effective, and authentic manner. Connecting with hiring managers, networking,
            following-up, and cold-pitching are some of the skills we teach.
            We even help you create a list of jobs that fit your skill set, and our
            on-demand coach will be there to help any questions during the application process.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h4>
            What is offer negotiation?
          </h4>
        </Grid.Column>
        <Grid.Column>
          <p>
            If you’re at this milestone, Kudos! It’s a good place to be :)
            Our on-demand coaches will be there to help you position
            yourself to get the best offer possible.
            *We recommend the Fast Track option if you are in this stage.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid>
      <Grid.Row centered>
        <Grid.Column textAlign="center">
          <h4>
            Don’t see your question on our FAQ list?
            <br />
            Email us at support@careeer.me and we will add it to the list!
          </h4>
          <br />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default FAQ;

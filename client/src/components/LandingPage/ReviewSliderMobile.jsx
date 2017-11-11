/* eslint-disable */
import React from 'react';
import Slider from 'react-slick';

const ReviewSlider = () => (
  <Slider
    className="mobileOnly"
    fade
    autoplay
    arrows={false}
    slidesToShow={1}
    adaptiveHeight
    centerPadding="30px"
    infinite
    centerMode
    autoplaySpeed={5000}
  >
    <div>
      <p>
        &quot;If you ever find yourself wishing for effective action plans from experienced mentors who are genuinely invested in your success, look no further.&quot;
      </p>
      <strong>
        Sangita
      </strong>
    </div>
    <div>
      <p>
        &quot;While I did try to break down the process into bite-sized pieces before working with you, the way your program breaks it down is more effective.&quot;
      </p>
      <strong>
        Dan
      </strong>
    </div>
    <div>
      <p>
        &quot;Careeer has helped me understand which role is a perfect fit with my skills and passions&quot;
      </p>
      <strong>
        Fadi
      </strong>
    </div>
    <div>
      <p>
        &quot;I immediately knew that you could really help me.&quot;
      </p>
      <strong>
        Dan
      </strong>
    </div>

    <div>
      <p>
        &quot;I have never gotten results like this in the past and feel more confident about my portfolio and resume&quot;
      </p>
      <strong>
        Dimple
      </strong>
    </div>
    <div>
      <p>
        &quot;Lots of good information. Learning your own value proposition and changing your midset &quot;lense&quot; about the hiring process.&quot;
      </p>
      <strong>
        Aaron
      </strong>
    </div>
    <div>
      <p>
        &quot;It helps to have someone that is rooting for you to succeed&quot;
      </p>
      <strong>
        Tiffany
      </strong>
    </div>
    <div>
      <p>
        &quot;More tailored and personal, suiting my strengths and workflow&quot;
      </p>
      <strong>
        Hai
      </strong>
    </div>
    <div>
      <p>
        &quot;Keeping me on track and focused toward my goal.&quot;
      </p>
      <strong>
        Mark
      </strong>
    </div>

  </Slider>
);

export default ReviewSlider;

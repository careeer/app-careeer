/* eslint-disable */
import React from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';

const Reviews = props => (
  <Slider
    className={props.styleName}
    fade
    autoplay
    arrows
    slidesToShow={1}
    centerPadding={props.padding}
    infinite
    centerMode
    autoplaySpeed={3500}
  >
    <div>
      <div className="reviewAvatar">
        <Image
          alt=""
          avatar
          className="avatar"
          src="https://res.cloudinary.com/careeer/image/upload/v1510605289/fadi_cfgizx.jpg"
        />
      </div>
      <div className="reviewContent">
        <p>
          &quot;Careeer has helped me understand which role is a perfect fit with my skills and passions&quot;
        </p>
        <br />
        <strong>
          - Fadi
        </strong>
      </div>
    </div>
    <div>
      <div className="reviewAvatar">
        <Image
          alt=""
          avatar
          className="avatar"
          src="https://res.cloudinary.com/careeer/image/upload/v1510605280/dan_cm22df.jpg"
        />
      </div>
      <div className="reviewContent">
        <p>
          &quot;I immediately knew that you could really help me.&quot;
        </p>
        <br />
        <strong>
          - Dan
        </strong>
      </div>
    </div>
    <div>
      <div className="reviewAvatar">
        <Image
          alt=""
          avatar
          className="avatar"
          src="https://res.cloudinary.com/careeer/image/upload/v1510605285/dimple_micayr.jpg"
        />
      </div>
      <div className="reviewContent">
        <p>
          &quot;I have never gotten results like this in the past and feel more confident about my portfolio and resume&quot;
        </p>
        <br />
        <strong>
          - Dimple
        </strong>
      </div>
    </div>
    <div>
      <div className="reviewAvatar">
        <Image
          alt=""
          avatar
          className="avatar"
          src="https://res.cloudinary.com/careeer/image/upload/v1510605274/aaron_npbmfu.jpg"
        />
      </div>
      <div className="reviewContent">
        <p>
          &quot;Lots of good information. Learning your own value proposition and changing your mindset &quot;lens&quot; about the hiring process.&quot;
        </p>
        <br />
        <strong>
          - Aaron
        </strong>
      </div>
    </div>
    <div>
      <div className="reviewAvatar">
        <Image
          alt=""
          avatar
          className="avatar"
          src="https://res.cloudinary.com/careeer/image/upload/v1510605305/tiffany_riubhg.jpg"
        />
      </div>
      <div className="reviewContent">
        <p>
          &quot;It helps to have someone that is rooting for you to succeed&quot;
        </p>
        <br />
        <strong>
          - Tiffany
        </strong>
      </div>
    </div>
    <div>
      <div className="reviewAvatar">
        <Image
          alt=""
          avatar
          className="avatar"
          src="https://res.cloudinary.com/careeer/image/upload/v1510605295/hai_y4canp.jpg"
        />
      </div>
      <div className="reviewContent">
        <p>
          &quot;More tailored and personal, suiting my strengths and workflow&quot;
        </p>
        <br />
        <strong>
          - Hai
        </strong>
      </div>
    </div>
    <div>
      <div className="reviewAvatar">
        <Image
          alt=""
          avatar
          className="avatar"
          src="https://res.cloudinary.com/careeer/image/upload/v1510605300/mark_zibndg.jpg"
        />
      </div>
      <div className="reviewContent">
        <p>
          &quot;Keeping me on track and focused toward my goal.&quot;
        </p>
        <br />
        <strong>
          - Mark
        </strong>
      </div>
    </div>
  </Slider>
);

export default Reviews;

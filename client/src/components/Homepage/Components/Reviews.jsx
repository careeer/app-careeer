/* eslint-disable */
import React from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';

const Reviews = props => (
  <Slider
    className={props.styleName}
    autoplay
    dots
    draggable={false}
    pauseOnHover={false}
    slidesToShow={3}
    centerPadding="0"
    infinite
    centerMode
    speed={1500}
    autoplaySpeed={3500}
  >
    <div>
      <div className="reviewContainer">
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
            &quot;Careeer has helped me understand which role is perfect for my skills and passions&quot;
          </p>
          <br />
          <p>
            -Fadi
          </p>
          <strong>
            Solutions Architect
          </strong>
        </div>
      </div>
    </div>
    <div>
      <div className="reviewContainer">
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
          <p>
            -Dan
          </p>
          <strong>
            Product Manager
          </strong>
        </div>
      </div>
    </div>
    <div>
      <div className="reviewContainer">
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
            &quot;I have never gotten results like this and feel more confident about my portfolio and resume. Thank you for helping me land my first job in UX!&quot;
          </p>
          <br />
          <p>
            -Dimple
          </p>
          <strong>
            UX Designer
          </strong>
        </div>
      </div>
    </div>
    <div>
      <div className="reviewContainer">
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
            &quot;They provided me with valuable insights on how to market myself, but more importantly showed me a new way to think about the whole process.&quot;
          </p>
          <br />
          <p>
            -Aaron
          </p>
          <strong>
            Product Manager
          </strong>
        </div>
      </div>
    </div>
    <div>
      <div className="reviewContainer">
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
            &quot;What I found most beneficial was the structure, game plan, and guiding voice to move forward.&quot;
          </p>
          <br />
          <p>
            -Hai
          </p>
          <strong>
            UX Designer
          </strong>
        </div>
      </div>
    </div>
    <div>
      <div className="reviewContainer">
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
          <p>
            -Mark
          </p>
          <strong>
            Project Manager
          </strong>
        </div>
      </div>
    </div>
  </Slider>
);

export default Reviews;

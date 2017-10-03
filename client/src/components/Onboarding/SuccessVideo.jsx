import React from 'react';
import { Grid } from 'semantic-ui-react';

const SuccessVideo = () => (
  <Grid
    textAlign="center"
    verticalAlign="middle"
  >
    <Grid.Column
      computer={6}
      largeScreen={6}
      tablet={10}
      widescreen={10}
      mobile={15}
    >
      <div className="video-container">
        <iframe
          title="Success Story"
          src="https://www.youtube.com/embed/JoLk-LWtYMI?rel=0"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Grid.Column>
  </Grid>
);

export default SuccessVideo;

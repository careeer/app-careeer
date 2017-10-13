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
      <div className="videoContainer">
        <iframe
          title="Success Story"
          src="https://www.youtube.com/embed/JoLk-LWtYMI?rel=0&showinfo=0"
          frameBorder="0"
          allowFullScreen={false}
        />
      </div>
    </Grid.Column>
  </Grid>
);

export default SuccessVideo;

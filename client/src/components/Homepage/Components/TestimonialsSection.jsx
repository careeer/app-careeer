import React from 'react';
import { Grid } from 'semantic-ui-react';
import ReviewSlider from './ReviewSlider';


const TestimonialsSection = () => (
  <Grid className="testimonials">
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="14" className="sectionTitle">
        Testimonials
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <ReviewSlider />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default TestimonialsSection;

/* eslint-disable */
import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

function DoneButton(props) {
  return (
    <Container
      text
      className="welcomeContainer"
    >
      <Icon
        link
        name="checkmark"
        size="big"
        className="welcomeCheckmark"
        onClick={props.onCheckmarkClick}
      />
      <p className="welcomeDoneButton">
        done
      </p>
    </Container>
  );
}

export default DoneButton;

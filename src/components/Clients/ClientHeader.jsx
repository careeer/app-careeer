import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ImageAvatar from './ImageAvatar';
import ClientName from './ClientName';
import ImageUpload from './ImageUpload';
import CareeerVisionInput from './CareeerVisionInput';

const overlayStyle = {
  position: 'absolute',
};

@inject('roadmapElements')@observer
class ClientHeader extends Component {
  render() {
    return (
      <Grid.Row>
        <div>
          <div style={overlayStyle}>
            <ImageAvatar avatar={this.props.roadmapElements.currentClientAvatar} />
            <ClientName name={this.props.value} />
          </div>
          <ImageUpload saveAvatarUrl={this.props.roadmapElements.updateClientAvatar} />
        </div>
        <CareeerVisionInput />
      </Grid.Row>
    );
  }
}

export default ClientHeader;

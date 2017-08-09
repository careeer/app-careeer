<Input
  transparent={true}
  fluid={true}
  disabled={this.state.isNameDisabled}
  placeholder="enter client's first and last name" onKeyPress={this.handleKeyPress}
  name='clientName'
  value={this.state.clientName}
  onChange={this.handleChange}
/>

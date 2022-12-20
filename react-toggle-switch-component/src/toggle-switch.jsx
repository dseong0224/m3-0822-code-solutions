import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggleOn: !this.state.toggleOn
    });
  }

  render() {
    let toggleStyle = null;
    if (this.state.toggleOn) {
      toggleStyle = 'toggle-switch on';
    } else {
      toggleStyle = 'toggle-switch off';
    }
    return (
      <div className='toggle-btn' onClick={this.handleClick}>
        <div className={toggleStyle}></div>
      </div>
    );
  }
}

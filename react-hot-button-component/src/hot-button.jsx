import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(props) {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    const btnColor = 'btn' + this.state.clickCount;
    return <button onClick={this.handleBtnClick} className={btnColor}>Hot Button</button>;
  }
}

export default HotButton;

import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      currentBtnBool: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.changeBtnBool = this.changeBtnBool.bind(this);
  }

  handleClick() {
    if (!this.state.currentBtnBool) {
      this.stop(this.stopWatch);
    } else {
      this.stopWatch = setInterval(this.play, 1000);
    }
    this.changeBtnBool();
  }

  stop(stopWatch) {
    clearInterval(stopWatch);
  }

  changeBtnBool() {
    this.setState({
      currentBtnBool: !this.state.currentBtnBool
    });
  }

  play() {
    this.setState({
      elapsedTime: this.state.elapsedTime + 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='face'>
          <h1>{this.state.elapsedTime}</h1>
        </div>
        <div className={this.state.currentBtnBool ? 'play-css stop-play-btn' : 'stop-css stop-play-btn'} onClick={this.handleClick}></div>
      </React.Fragment>
    );
  }
}

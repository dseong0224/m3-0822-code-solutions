import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passWord: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      passWord: value
    });
  }

  render() {
    let pwInput;
    const pwLength = this.state.passWord.length;
    const pwInputBox = <input name='password' value={this.state.passWord} type="password" onChange={this.handleChange} ></input>;

    if (pwLength > 0 && pwLength < 8) {
      pwInput =
        <div className='incorrect-pw'>
          <div >
            {pwInputBox}
            <span > x</span>
          </div>
          <div> Your password is too short</div>
        </div>;
    } else if (pwLength >= 8) {
      pwInput =
        <div>
          <div>
            {pwInputBox}
            <span className='correct-pw'>
              o
            </span>
          </div>
        </div>;
    } else {
      pwInput =
        <div className='incorrect-pw'>
          <div>
            {pwInputBox}
            <span > x</span>
          </div>
          <div> A password is required</div>
        </div>;
    }

    return (
      <React.Fragment>
        <label>Password: </label>
        {pwInput}
      </React.Fragment>
    );
  }
}

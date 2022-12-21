import React from 'react';
import * as ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form>
        UserName: <input value={this.state.username} onChange={this.handleUsernameChange}></input>
        <br />
        <br />
        Password : <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <br />
        <br />
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);

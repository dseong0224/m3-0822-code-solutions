import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data,
          isLoading: false
        });
      });
    /* your code here */
  }

  render() {
    return this.state.isLoading
      ? <p>hello...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;

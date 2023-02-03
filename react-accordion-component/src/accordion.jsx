import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      currentTopic: '',
      duplicateTopic: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const currentTopicTitle = e.currentTarget.querySelector('h1').innerText;

    if (currentTopicTitle === this.state.currentTopic) {
      this.setState({
        duplicateTopic: !this.state.duplicateTopic
      });
    } else {
      this.setState({
        duplicateTopic: false
      });
    }

    this.setState({
      clicked: !this.state.clicked,
      currentTopic: currentTopicTitle
    });
  }

  render() {
    const topicCards = this.props.topics.map(topic => {
      return (<div key={topic.title}>
        <div className='topic title' onClick={this.handleClick}><h1>{topic.title}</h1></div>
        <div className={`topic detail ${!this.state.duplicateTopic && topic.title === this.state.currentTopic ? '' : 'hide'}`}><p>{topic.description}</p></div>
      </div>
      );
    });
    return (
      <div className='container'>
        {topicCards}
      </div>
    );
  }
}

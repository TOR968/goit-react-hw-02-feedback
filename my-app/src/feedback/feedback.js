import React, { Component } from 'react';
import './feedback.module.css';
import FeedbackOptions from './FeedbackOptions';

class Fedback extends Component {
  //   static propTypes = {
  //     title: T.string,
  //   };

  static defaultProps = {
    title: 'Please leave feedback',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValueState = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.changeValueState}
        ></FeedbackOptions>
        <h2>Statistics</h2>
        {/*this.countTotalFeedback() === 0 ? <Notification message="No feedback given">.: */}
        <ul>
          {Object.keys(this.state).map(item => (
            <li>
              {item[0].toUpperCase() + item.slice(1)}:{this.state[item]}
            </li>
          ))}
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    );
  }
}

export default Fedback;
